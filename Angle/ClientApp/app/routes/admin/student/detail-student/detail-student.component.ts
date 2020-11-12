import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { Student } from '../../interfaces/student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-detail-student',
  templateUrl: './detail-student.component.html',
  styleUrls: ['./detail-student.component.css']
})
export class DetailStudentComponent implements OnInit {
  @Input() student: Student;
  studentCourses$:Observable<Student[]>;
  studentCourses:Student[]=[];

  id = this.route.snapshot.params['id'];
  sid:any;
  updateForm:FormGroup;
  deleteForm: FormGroup;
  delMessage:string;
  modalRef: BsModalRef;
  feesMessage:string;
  constructor(private studentservice: StudentService, private route: ActivatedRoute,private fb:FormBuilder, private modalservice:BsModalService) {

    let check = new FormControl(false, Validators.requiredTrue);

    this.studentservice.getStudentById(this.id.toString()).subscribe(result => {
      this.student=result;
      this.sid=this.student.id
    });


    this.deleteForm = fb.group({

      'check': check
    });


    let scid = new FormControl(null, [Validators.required, Validators.minLength(2)]);
    let cid = new FormControl(null, [Validators.required, Validators.minLength(2)]);
    let sid = new FormControl(null, [Validators.required, Validators.minLength(2)]);

    let fees = new FormControl(null, [Validators.required, Validators.minLength(2)]);
    this.updateForm = fb.group({

      'scid':scid,
      'fees':fees,
      'sid':sid,
      'cid':cid
    });

    

  }

  openModal(template: TemplateRef<any>,scid:number,cid:number,feesStudent:number) {
    this.updateForm.controls['scid'].setValue(scid);
    this.updateForm.controls['cid'].setValue(cid);
    this.updateForm.controls['sid'].setValue(this.id.toString());

    this.updateForm.controls['fees'].setValue(feesStudent);
    this.modalRef = this.modalservice.show(template);
  }


  onUpdate($ev, value: any) {
    $ev.preventDefault();
    for (let c in this.updateForm.controls) {
      this.updateForm.controls[c].markAsTouched();
    }
    if (this.updateForm.valid) {
      console.log('Valid!');
      let editFees = value;
      this.studentservice.updateFees(editFees).subscribe(result=>{
        this.feesMessage="";
        this.feesMessage="Updated!";
        this.student_Courses();
      },error=>{
        this.feesMessage="";
        this.feesMessage="Error!"
      });

    }
  }

  student_Courses(){
    this.studentservice.clearCache();
    this.studentCourses$=this.studentservice.getStudentCourses(this.id.toString());
    this.studentCourses$.subscribe(result => {
      this.studentCourses=result;
    })
  }
  deleteStudent(id:string){
    this.studentservice.deleteStudent(this.id.toString()).subscribe(result=>{
      this.delMessage="";
      this.delMessage="Student Deleted."
    },error=>{
      this.delMessage="";
      this.delMessage="Error. Please Try Again."
    })
  }
  ngOnInit() {
  this.student_Courses()


    
  }



}

