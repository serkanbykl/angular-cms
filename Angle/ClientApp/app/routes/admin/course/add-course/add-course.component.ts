import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
//import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable, Subject } from 'rxjs';
import { Course } from '../../interfaces/course';
import { Teacher } from '../../interfaces/teacher';
import { CourseService } from '../../services/course.service';
import { TeacherService } from '../../services/teacher.service';

@Component({
  selector: 'app-list-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  insertForm: FormGroup;


  courses$: Observable<Course[]>;
  courses: Course[] = [];
  teachers$: Observable<Teacher[]>;
  teachers: Teacher[] = [];
  message: string;
  constructor(private courseservice: CourseService, private teacherservice: TeacherService, private fb: FormBuilder) {

    let tid = new FormControl('', [Validators.required]);
    let cName = new FormControl('', [Validators.required]);
    let fees = new FormControl('', [Validators.required]);
    let duration = new FormControl('', [Validators.required]);

    this.insertForm = fb.group({
      'tid': tid,
      'cName': cName,
      'fees': fees,
      'duration': duration
    });
  }
  submitForm() {


    let newCourse = this.insertForm.value;

    this.courseservice.insertCourse(newCourse).subscribe(
      result => {
        this.courseservice.clearCache();
        this.courses$ = this.courseservice.getCourses();

        this.courses$.subscribe(newlist => {
          this.courses = newlist;
          this.insertForm.reset();
          this.message = "";
          this.message = "New Course Added."
        });

      },
      error => {

        this.message = "";
        this.message = "Could not add course."

      })

  }

  ngOnInit() {
    this.teachers$ = this.teacherservice.getTeachers();
    this.teachers$.subscribe(result => {
      this.teachers = result;
    })



  }

}
