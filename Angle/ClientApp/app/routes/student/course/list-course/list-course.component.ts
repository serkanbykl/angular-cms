import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Course } from '../../interfaces/course';
import { CourseService } from '../../services/course.service';
@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class StudentListCourseComponent implements OnInit {


courses$:Observable<Course[]>;
courses:Course[];

  constructor(private courseservice:CourseService) { }
  ngOnInit() {
    this.courseservice.clearCache();
    this.courses$=this.courseservice.getCourses();
    this.courses$.subscribe(result => {
      this.courses=result;
    })
  }

}
