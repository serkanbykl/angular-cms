import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { Teacher } from '../../interfaces/teacher';
import { TeacherService } from '../../services/teacher.service';

@Component({
  selector: 'app-detail-teacher',
  templateUrl: './detail-teacher.component.html',
  styleUrls: ['./detail-teacher.component.css']
})
export class DetailTeacherComponent implements OnInit {


  @Input() teacher: Teacher;
  //teachers: Teacher[] = [];
  teachers$: Observable<Teacher[]>;

  id = this.route.snapshot.params['id'];

  updateForm: FormGroup;
  deleteForm: FormGroup;
  upMessage:string;
  delMessage:string;


  constructor(private teacherservice: TeacherService, private route: ActivatedRoute, private fb: FormBuilder,private router:Router) {


    let id = new FormControl(null, [Validators.required, Validators.minLength(2)]);
    let username = new FormControl('', [Validators.required, Validators.minLength(2)])
    let password = new FormControl('', [Validators.required, Validators.minLength(2)])

    let name = new FormControl('', [Validators.required, Validators.minLength(2)])

    let educationDetail = new FormControl('')
    let personalDetail = new FormControl('')

    let check = new FormControl(false, Validators.requiredTrue);


    this.teacherservice.getTeacherById(this.id.toString()).subscribe(result => this.setData(result));

    this.updateForm = fb.group({
      'id': id,
      'username': username,
      'password': password,
      'educationDetail': educationDetail,
      'personalDetail': personalDetail,
      'name': name
    });



    this.deleteForm = fb.group({
      'id': id,
      'check': check
    });


  }

  setData(data: any) {
    this.teacher = data;
    this.updateForm.controls['id'].setValue(this.teacher.id);
    this.updateForm.controls['name'].setValue(this.teacher.name);

    this.updateForm.controls['username'].setValue(this.teacher.userName);
    this.updateForm.controls['password'].setValue(this.teacher.password);

    this.updateForm.controls['educationDetail'].setValue(this.teacher.educationDetail);
    this.updateForm.controls['personalDetail'].setValue(this.teacher.personalDetail);
    this.deleteForm.controls['id'].setValue(this.teacher.id);

  }

  onUpdate($ev, value: any) {
    $ev.preventDefault();
    for (let c in this.updateForm.controls) {
      this.updateForm.controls[c].markAsTouched();
    }
    if (this.updateForm.valid) {
      console.log('Valid!');
      let editTeacher = value;
      editTeacher.id.toString();
      this.teacherservice.updateTeacher(editTeacher.id, editTeacher).subscribe(
        result => {
          console.log('Teacher Updated');
          this.upMessage="";
          this.upMessage="Teacher Updated";
          this.teacherservice.clearCache();
          this.teacherservice.getTeacherById(this.id.toString()).subscribe(result => this.setData(result));

        },
        error => console.log('Could Not Update Teacher')
      )

    }


  }

  onDelete(value: any) {
    if (this.deleteForm.valid) {
      (value.id).toString();
      this.teacherservice.deleteTeacher(value.id).subscribe(result => {
        this.delMessage="";
        this.delMessage="Deleted Successfully."

      },error=>{
        this.delMessage="";
        this.delMessage="Error!"
      })
    }
  }
  ngOnInit() {
  }



}

