import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from '../../../routes/pages/services/account.service';

import { UserblockService } from './userblock.service';

@Component({
    selector: 'app-userblock',
    templateUrl: './userblock.component.html',
    styleUrls: ['./userblock.component.scss']
})
export class UserblockComponent implements OnInit {
    user: any;
    constructor(public userblockService: UserblockService,private acc : AccountService) {

        this.user = {
            picture: 'assets/img/user/01.jpg'
        };
    }


    
      loginStatus$:Observable<boolean>;
      username$:Observable<string>;
      userRole$:Observable<string>;

    ngOnInit() {
        this.loginStatus$ = this.acc.isLoggedIn;
        this.username$ = this.acc.currentUserName;
        this.userRole$ = this.acc.currentUserRole;
    }
    
    onLogOut(){
        this.acc.logOut();
    }

    userBlockIsVisible() {
        return this.userblockService.getVisibility();
    }

}
