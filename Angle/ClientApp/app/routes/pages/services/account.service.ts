import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class AccountService {

    constructor(private http: HttpClient, private router: Router) { }

    // API Url
    private baseUrlLogin: string = "api/account/login";
    private baseUrlRegister: string = "api/account/register";

    // Cookies
    public loginStatus = new BehaviorSubject<boolean>(this.checkLoginStatus());
    private UserName = new BehaviorSubject<string>(localStorage.getItem('username'));
    private UserRole = new BehaviorSubject<string>(localStorage.getItem('userRole'));

    // Register Method
    register(username: string, password: string, educationdetail: string, personaldetail: string, name: string) {

        return this.http.post<any>(this.baseUrlRegister, {
            username, password, educationdetail, personaldetail, name
        }).pipe(map(result => {
            return result;
        }, error => {
            return error;
        }));
    }

    // Login Method
    login(username: string, password: string) {
        // pipe() let you combine multiple functions into a single function. 
        // pipe() runs the composed functions in sequence.
        return this.http.post<any>(this.baseUrlLogin, { username, password }).pipe(


            map(result => {

                // login successful if there's a jwt token in the response
                if (result && result.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes

                    this.loginStatus.next(true);
                    localStorage.setItem('loginStatus', '1');
                    localStorage.setItem('jwt', result.token);
                    localStorage.setItem('username', result.username);
                    localStorage.setItem('expiration', result.expiration);
                    localStorage.setItem('userRole', result.userRole);
                    localStorage.setItem('id', result.id);
                    this.UserName.next(localStorage.getItem('username'));
                    this.UserRole.next(localStorage.getItem('userRole'));

                }

                return result;

            })

        );
    }
    
    // LogOut Method
    logOut() {
        this.loginStatus.next(false);
        localStorage.removeItem('id');

        localStorage.setItem('loginStatus', "0");
        localStorage.removeItem('jwt');
        localStorage.removeItem('username');
        localStorage.removeItem('userRole');
        localStorage.removeItem('expiration');
        this.router.navigate(['/login']);
        console.log("Logout Successfuly");
    }
    checkLoginStatus(): boolean {
        var loginCookie = localStorage.getItem("loginStatus");
        if (loginCookie == "1") {
            return true;
        }
        return false;
    }

    get isLoggedIn() {
        return this.loginStatus.asObservable();
    }

    get currentUserName() {
        return this.UserName.asObservable();
    }

    get currentUserRole() {
        return this.UserRole.asObservable();
    }

}
