import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../core/settings/settings.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { AccountService } from '../services/account.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;

    invalidLogin:boolean;
    
    username:FormControl;
    password:FormControl;

    errorMessage:string;

    constructor(public settings: SettingsService, private fb: FormBuilder, private acc: AccountService, private router: Router,private route: ActivatedRoute) {}

    submitForm() {


            console.log('Valid!');
            let userLogin = this.loginForm.value;
            this.acc.login(userLogin.username, userLogin.password).subscribe(result => {

                let token = (<any>result).token;
                console.log(token);
                console.log(result.userRole);
                console.log("User Logged In Successfully");
                this.invalidLogin = false;
                this.router.navigate(['/home']).then(() => { window.location.reload();});
            }, error => {
                this.invalidLogin = true;
                this.errorMessage = "Please Check the Login Credentials - Invalid Username / Password was entered";
                console.log(this.errorMessage);

            }
            );
        
    }

    ngOnInit() {
        this.username=new FormControl('',[Validators.required]);
        this.password=new FormControl('',[Validators.required]);
        this.loginForm=this.fb.group({
          "username":this.username,
          "password": this.password
        });
    
        
      }
    
    }
