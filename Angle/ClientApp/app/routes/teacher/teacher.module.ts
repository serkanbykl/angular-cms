import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { AuthGuardService } from '../guards/auth.service';
import { TeacherContentCourseComponent } from './course/content-course/content-course.component';
import { TeacherMyCoursesComponent } from './course/my-courses/my-courses.component';


const routes: Routes = [
    { path: 'my-courses', component: TeacherMyCoursesComponent, canActivate : [AuthGuardService] },
    { path: 'my-course/:cid', component: TeacherContentCourseComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        TeacherMyCoursesComponent,
        TeacherContentCourseComponent
    ],
    exports: [
        RouterModule
    ]
})
export class TeacherModule { }
