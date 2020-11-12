import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../../interfaces/course';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-reg-course',
  templateUrl: './reg-course.component.html',
  styleUrls: ['./reg-course.component.css']
})


export class StudentRegCourseComponent implements OnInit {

  courses$:Observable<Course[]>;
  courses:Course[]=[];
  
    constructor(private courseservice:CourseService) { }
  
    ngOnInit() {
      this.courseservice.clearCache();
      this.courses$=this.courseservice.getRegCourses(localStorage.id);
      this.courses$.subscribe(result => {
        this.courses=result;
      })
    }
  
  }

  