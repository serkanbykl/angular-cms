import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from '../../interfaces/course';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrls: ['./detail-course.component.css']
})
export class StudentDetailCourseComponent implements OnInit {
  
  course : Course;

  insertForm: FormGroup;
  id = this.route.snapshot.params['id'];
  data:any;
  dataSet:any;;

  courses$: Observable<Course[]>;
  courses: Course[] = [];
  message: string;
  
  constructor(private courseservice: CourseService,
    private route: ActivatedRoute,
    private router:Router,
    private fb : FormBuilder) { 



    let cid = new FormControl('', [Validators.required]);
    let sid = new FormControl('', [Validators.required]);
    let cName = new FormControl('', [Validators.required]);
    let fees = new FormControl('', [Validators.required]);
    let duration = new FormControl('', [Validators.required]);
    let teacherName = new FormControl('', [Validators.required]);
    this.courseservice.getCourseById(this.id.toString()).subscribe(result =>this.setData(result));

    this.insertForm = fb.group({
      'cid': cid,
      'sid': sid,
      'cName': cName,
      'fees': fees,
      'teacherName': teacherName,
      'duration': duration
    });
    }

    setData(data: any) {
      this.course = data;
      this.insertForm.controls['cid'].setValue(this.course.cid);
      this.insertForm.controls['sid'].setValue(localStorage.id);
      this.insertForm.controls['cName'].setValue(this.course.cName);
      this.insertForm.controls['fees'].setValue(this.course.fees);
      this.insertForm.controls['teacherName'].setValue(this.course.teacherName);

      let formatDate = this.course.duration
      formatDate.toString().slice(0,10)
      this.insertForm.controls['duration'].setValue(formatDate.toString().slice(0,10));
      this.dataSet=data; 
    }

    submitForm() {
        this.dataSet.sid=localStorage.id;
        let newReg=this.dataSet;

        this.courseservice.regCourse(newReg).subscribe(
            result => 
            {
                this.message="Registered Successfuly."
  
            },
            error => {
              this.message="Already Register.";
            }
              
            )
  
          }
    

  ngOnInit()  {
    this.courseservice.clearCache();

  }


}
