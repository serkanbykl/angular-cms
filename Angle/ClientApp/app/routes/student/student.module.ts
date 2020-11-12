import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { AuthGuardService } from '../guards/auth.service';
import { StudentContentCourseComponent } from './course/content-course/content-course.component';
import { StudentDetailCourseComponent } from './course/detail-course/detail-course.component';
import { StudentListCourseComponent } from './course/list-course/list-course.component';
import { StudentRegCourseComponent } from './course/reg-course/reg-course.component';

const routes: Routes = [
    { path: 'list-course', component: StudentListCourseComponent, canActivate : [AuthGuardService] },
    { path: 'reg-course', component: StudentRegCourseComponent, canActivate : [AuthGuardService] },
    { path: 'course/:id', component: StudentDetailCourseComponent, canActivate : [AuthGuardService]},
    { path: 'course/content/:cid', component: StudentContentCourseComponent}

];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        StudentListCourseComponent,
        StudentRegCourseComponent,
        StudentListCourseComponent,
        StudentDetailCourseComponent,
        StudentContentCourseComponent
    ],
    exports: [
        RouterModule
    ]
})
export class StudentModule { }
