import { Injectable } from '@angular/core';
import { AccountService } from '../../../routes/pages/services/account.service';

@Injectable()
export class UserblockService {
    public userBlockVisible: boolean;
    constructor() {
        // initially visible
        this.userBlockVisible  = true;
    }


    getVisibility() {
        return this.userBlockVisible;
        
    }

    setVisibility(stat = true) {
        this.userBlockVisible = stat;
    }

    toggleVisibility() {
        this.userBlockVisible = !this.userBlockVisible;
    }

}


