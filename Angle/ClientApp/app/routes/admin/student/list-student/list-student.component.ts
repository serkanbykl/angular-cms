import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../../interfaces/student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
    students$:Observable<Student[]>;
    students:Student[]=[];

    constructor(private studentservice:StudentService) { }
    ngOnInit() {
      this.studentservice.clearCache();
      this.students$=this.studentservice.getStudents();
      this.students$.subscribe(result => {
        this.students=result;
      })

    }
    
  }
  
