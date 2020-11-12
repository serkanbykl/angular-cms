import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from '../../interfaces/course';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-content-course',
  templateUrl: './content-course.component.html',
  styleUrls: ['./content-course.component.css']
})
export class StudentContentCourseComponent implements OnInit {
  
  cid = this.route.snapshot.params['cid'];
  contents:any;
  message:string;
  constructor(private courseservice: CourseService,private route: ActivatedRoute) { 
    
  }


    

  ngOnInit()  {

    this.courseservice.clearCache();
    this.courseservice.getContent(localStorage.id,this.cid).subscribe(res=>{
      this.contents=res
    },
    err=>{
      this.message="Content Not Found."
      this.contents="";
    });
  }


}
