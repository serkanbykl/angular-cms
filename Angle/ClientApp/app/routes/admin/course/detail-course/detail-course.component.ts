import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from '../../interfaces/course';
import { Student } from '../../interfaces/student';
import { TCourse } from '../../interfaces/tcourse';
import { Teacher } from '../../interfaces/teacher';
import { CourseService } from '../../services/course.service';
import { StudentService } from '../../services/student.service';
import { TeacherService } from '../../services/teacher.service';

@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrls: ['./detail-course.component.css']
})
export class DetailCourseComponent implements OnInit {

  @Input() course : Course;

  //courses: Course[] = [];
  courses$ : Observable<Course[]>;
  teachers$: Observable<Teacher[]>;
  teachers: Teacher[] = [];
  data: any;
  content$:Observable<TCourse[]>;
  contents:TCourse[]=[];
  id = this.route.snapshot.params['id'];
  updateForm:FormGroup;
  deleteForm:FormGroup;
  upMessage:string;
  delMessage:string;
  students$:Observable<Student[]>;
  students:Student[]=[];



  constructor(private courseservice: CourseService,
    private route: ActivatedRoute,
    private fb : FormBuilder,
    private teacherservice:TeacherService,
    private studentservice:StudentService) { 
      let cid = new FormControl('', [Validators.required]);

      let tid = new FormControl('', [Validators.required]);
      let cName = new FormControl('', [Validators.required]);
      //let teacherName = new FormControl('', [Validators.required]);

      let fees = new FormControl('', [Validators.required]);
      let duration = new FormControl('', [Validators.required]);
      let check = new FormControl(false, Validators.requiredTrue);

      this.courseservice.getCourseById(this.id.toString()).subscribe(result => this.setData(result));
      this.updateForm = fb.group({
        'cid':cid,
        'tid': tid,
        'cName': cName,
        'fees': fees,
        'duration': duration
            });
  
      console.log();

  
      this.deleteForm = fb.group({
        'cid': cid,
        'check': check
      });
    }
    setData(data: any) {
      this.course = data;
      this.updateForm.controls['cid'].setValue(this.course.cid);
      this.updateForm.controls['tid'].setValue(this.course.tid);

      this.updateForm.controls['cName'].setValue(this.course.cName);

      this.updateForm.controls['fees'].setValue(this.course.fees);
      let formatDate = this.course.duration;
      formatDate.toString().slice(0,10)
      this.updateForm.controls['duration'].setValue(formatDate.toString().slice(0,10));
  
    }
    onUpdate($ev, value: any) {
      $ev.preventDefault();
      for (let c in this.updateForm.controls) {
        this.updateForm.controls[c].markAsTouched();
      }
      if (this.updateForm.valid) {
        console.log('Valid!');
        let editCourse = value;
        editCourse.cid.toString();
        this.courseservice.updateCourse(editCourse.cid, editCourse).subscribe(
          result => {
            console.log('Course Updated');
            this.upMessage="";
            this.upMessage="Course Updated";
            this.courseservice.clearCache();
            this.courseservice.getCourseById(this.id.toString()).subscribe(result => this.setData(result));
  
          },
          error => console.log('Could Not Update Course')
        )
  
      }
  
  
    }

    onDelete(value: any) {
      if (this.deleteForm.valid) {
        (value.cid).toString();
        this.courseservice.deleteCourse(value.cid).subscribe(result => {
          this.delMessage="";
          this.delMessage="Deleted Successfully."
  
        },error=>{
          this.delMessage="";
          this.delMessage="Error!"
        })
      }
    }

  ngOnInit() {
    this.teachers$ = this.teacherservice.getTeachers();
    this.teachers$.subscribe(result => {
      this.teachers = result;
    })

    this.content$ = this.courseservice.getContentCourse(this.id);
    this.content$.subscribe(result => {
      this.contents = result;
    })


    this.studentservice.clearCache();
    this.students$=this.studentservice.getCourseStudent(this.id);
    this.students$.subscribe(result => {
      this.students=result;
    })

  }

}
