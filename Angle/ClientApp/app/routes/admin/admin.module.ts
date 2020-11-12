import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { AuthGuardService } from '../guards/auth.service';
import { AddCourseComponent } from './course/add-course/add-course.component';
import { DetailCourseComponent } from './course/detail-course/detail-course.component';
import { ListCourseComponent } from './course/list-course/list-course.component';
import { DetailStudentComponent } from './student/detail-student/detail-student.component';
import { ListStudentComponent } from './student/list-student/list-student.component';
import { AddTeacherComponent } from './teacher/add-teacher/add-teacher.component';
import { DetailTeacherComponent } from './teacher/detail-teacher/detail-teacher.component';
import { ListTeacherComponent } from './teacher/list-teacher/list-teacher.component';

const routes: Routes = [
    { path: 'list-teacher', component: ListTeacherComponent, canActivate : [AuthGuardService] },
    { path: 'add-teacher', component: AddTeacherComponent, canActivate : [AuthGuardService] },
    { path: 'teacher/:id', component: DetailTeacherComponent, canActivate : [AuthGuardService] },

    { path: 'list-course', component: ListCourseComponent, canActivate : [AuthGuardService] },
    { path: 'add-course', component: AddCourseComponent, canActivate : [AuthGuardService] },
    { path: 'course/:id', component: DetailCourseComponent, canActivate : [AuthGuardService] },

    { path: 'list-student', component: ListStudentComponent, canActivate : [AuthGuardService] },
    { path: 'student/:id', component: DetailStudentComponent, canActivate : [AuthGuardService] }


];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        AddTeacherComponent,
        ListTeacherComponent,
        DetailTeacherComponent,
        ListCourseComponent,
        AddCourseComponent,
        DetailCourseComponent,
        ListStudentComponent,
        DetailStudentComponent    ],
    exports: [
        RouterModule
    ]
})
export class AdminModule { }
