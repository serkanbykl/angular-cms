import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../core/settings/settings.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    valForm: FormGroup;
    passwordForm: FormGroup;

    constructor(public settings: SettingsService, fb: FormBuilder, private acc:AccountService, private router:Router) {

        let username = new FormControl('', [Validators.required, Validators.minLength(2)])

        let password = new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)]));
        let certainPassword = new FormControl('', [Validators.required, CustomValidators.equalTo(password)]);

        let name = new FormControl('', [Validators.required, Validators.minLength(2)])

        let educationDetail = new FormControl('')
        let personalDetail = new FormControl('')



        this.passwordForm = fb.group({
            'password': password,
            'confirmPassword': certainPassword
        });

        this.valForm = fb.group({
            'accountagreed': [null, Validators.required],
            'username':username,
            'passwordGroup': this.passwordForm,
            'name':name,
            'educationDetail':educationDetail,
            'personalDetail':personalDetail

        });
    }
    errorList:string[]=[];
    message:string;

    submitForm($ev, value: any) {



        $ev.preventDefault();
        for (let c in this.valForm.controls) {
            this.valForm.controls[c].markAsTouched();
        }
        for (let c in this.passwordForm.controls) {
            this.passwordForm.controls[c].markAsTouched();
        }

        if (this.valForm.valid) {
            console.log('Valid!');
            let userDetails = value;
            this.acc.register(userDetails.username,userDetails.passwordGroup.password,userDetails.name,userDetails.educationDetail,userDetails.personalDetail).subscribe(result=>{
                this.message="";
                this.errorList=[];
                this.message="Registered Successfully."
                this.valForm.reset();
                this.router.navigate(['/login']);
            },error=> {
                this.errorList=[];
                this.message="";
            for(var i = 0; i < error.error.value.length; i++) 
            {
              this.errorList.push(error.error.value[i]);
              console.log(error.error.value[i]);
            }
            console.log("Sorry.. Can't Register.")
            });
        }
    }

    ngOnInit() {
    }

}