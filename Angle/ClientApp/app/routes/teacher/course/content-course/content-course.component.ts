/*import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Course } from '../../interfaces/course';
import { CourseService } from '../../services/course.service';
@Component({
  selector: 'app-content-course',
  templateUrl: './content-course.component.html',
  styleUrls: ['./content-course.component.css']
})
export class TeacherContentCourseComponent implements OnInit {


courses$:Observable<Course[]>;
courses:Course[];

  constructor(private courseservice:CourseService) { }
  ngOnInit() {

  }

}
*/

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TCourse } from '../../interfaces/tcourse';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-content-course',
  templateUrl: './content-course.component.html',
  styleUrls: ['./content-course.component.css']
})
export class TeacherContentCourseComponent implements OnInit {
  
 insertForm: FormGroup;

  cid = this.route.snapshot.params['cid'];
  contents:TCourse[]=[];
  message:string;

  constructor(private courseservice: CourseService,private route: ActivatedRoute,private fb: FormBuilder) { 
    let tid = new FormControl(localStorage.id, [Validators.required]);
    let cid = new FormControl(this.cid, [Validators.required]);
    let content = new FormControl('', [Validators.required]);

    this.insertForm = fb.group({
      'tid': tid,
      'cid': cid,
      'content': content
    });
  }

  submitForm() {


    let newContent = this.insertForm.value;
    newContent.id=this.cid;
    newContent.tid=localStorage.id;
    this.courseservice.addContent(newContent).subscribe(
      result => {

          this.message = "New Content Added."
        
        this.getContent();
      },error => {

        this.message = "Could Not Add Content."

      })

  }

  deleteContent(tcid:number){
    this.courseservice.deleteContent(localStorage.id, tcid).subscribe(res=>{
      this.message="Content Deleted";
      this.courseservice.getContentCourse(localStorage.id, this.cid).subscribe(res=>{
        this.contents=res;
      },
      err=>{
        this.contents=[];
        console.log("Content Error!")
      });
    },err=>{
      this.message="Could Not Delete Content.";

    })
  }

  getContent(){
    this.courseservice.clearCache();
    this.courseservice.getContentCourse(localStorage.id, this.cid).subscribe(res=>{
      this.contents=res;
    },
    err=>{
      this.contents=[];
      console.log("Content Error!")
    });
  }
    

  ngOnInit()  {

   this.getContent();

  }


}
