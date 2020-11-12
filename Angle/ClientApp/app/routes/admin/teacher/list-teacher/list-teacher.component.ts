import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from '../../interfaces/teacher';
import { TeacherService } from '../../services/teacher.service';

@Component({
  selector: 'app-list-teacher',
  templateUrl: './list-teacher.component.html',
  styleUrls: ['./list-teacher.component.css']
})
export class ListTeacherComponent implements OnInit {
    teachers$:Observable<Teacher[]>;
    teachers:Teacher[]=[];
    constructor(private teacherservice:TeacherService) { }
    ngOnInit() {
      this.teachers$=this.teacherservice.getTeachers();
      this.teachers$.subscribe(result => {
        this.teachers=result;
      })

    }
    
  }
  
