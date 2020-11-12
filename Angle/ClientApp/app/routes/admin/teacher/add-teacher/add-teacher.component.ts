import { Component, OnInit } from '@angular/core';
import { AbstractControl, Form, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'ng2-validation';
import { Observable } from 'rxjs';
import { SettingsService } from '../../../../core/settings/settings.service';
import { TeacherService } from '../../services/teacher.service';


@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {

    insertForm: FormGroup;
    passwordForm: FormGroup;

    constructor(public settings: SettingsService, fb: FormBuilder, private teacherservice:TeacherService, private router:Router) {

        let username = new FormControl('', [Validators.required, Validators.minLength(2)])

        let password = new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)]));
        let certainPassword = new FormControl('', [Validators.required, CustomValidators.equalTo(password)]);

        let name = new FormControl('', [Validators.required, Validators.minLength(2)])

        let educationDetail = new FormControl(null)
        let personalDetail = new FormControl(null)



        this.passwordForm = fb.group({
            'password': password,
            'confirmPassword': certainPassword
        });

        this.insertForm = fb.group({
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
        for (let c in this.insertForm.controls) {
            this.insertForm.controls[c].markAsTouched();
        }
        for (let c in this.passwordForm.controls) {
            this.passwordForm.controls[c].markAsTouched();
        }

        if (this.insertForm.valid) {
            console.log('Valid!');
            let userDetails = value;
            this.teacherservice.register(userDetails.username,userDetails.passwordGroup.password,userDetails.educationDetail,userDetails.personalDetail,userDetails.name).subscribe(result=>{
                this.message="";
                this.errorList=[];
                this.message="Registered Successfully."
                this.insertForm.reset();
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