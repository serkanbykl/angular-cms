import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Course } from '../../interfaces/course';
import { CourseService } from '../../services/course.service';
@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class TeacherMyCoursesComponent implements OnInit {


courses$:Observable<Course[]>;
courses:Course[];

  constructor(private courseservice:CourseService) { }
  ngOnInit() {
    this.courseservice.clearCache();
    this.courses$=this.courseservice.getMyCourses(localStorage.id);
    this.courses$.subscribe(result => {
      this.courses=result;
    })
  }

}
