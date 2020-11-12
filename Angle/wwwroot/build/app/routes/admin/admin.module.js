"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var shared_module_1 = require("../../shared/shared.module");
var auth_service_1 = require("../guards/auth.service");
var add_course_component_1 = require("./course/add-course/add-course.component");
var detail_course_component_1 = require("./course/detail-course/detail-course.component");
var list_course_component_1 = require("./course/list-course/list-course.component");
var detail_student_component_1 = require("./student/detail-student/detail-student.component");
var list_student_component_1 = require("./student/list-student/list-student.component");
var add_teacher_component_1 = require("./teacher/add-teacher/add-teacher.component");
var detail_teacher_component_1 = require("./teacher/detail-teacher/detail-teacher.component");
var list_teacher_component_1 = require("./teacher/list-teacher/list-teacher.component");
var routes = [
    { path: 'list-teacher', component: list_teacher_component_1.ListTeacherComponent, canActivate: [auth_service_1.AuthGuardService] },
    { path: 'add-teacher', component: add_teacher_component_1.AddTeacherComponent, canActivate: [auth_service_1.AuthGuardService] },
    { path: 'teacher/:id', component: detail_teacher_component_1.DetailTeacherComponent, canActivate: [auth_service_1.AuthGuardService] },
    { path: 'list-course', component: list_course_component_1.ListCourseComponent, canActivate: [auth_service_1.AuthGuardService] },
    { path: 'add-course', component: add_course_component_1.AddCourseComponent, canActivate: [auth_service_1.AuthGuardService] },
    { path: 'course/:id', component: detail_course_component_1.DetailCourseComponent, canActivate: [auth_service_1.AuthGuardService] },
    { path: 'list-student', component: list_student_component_1.ListStudentComponent, canActivate: [auth_service_1.AuthGuardService] },
    { path: 'student/:id', component: detail_student_component_1.DetailStudentComponent, canActivate: [auth_service_1.AuthGuardService] }
];
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule.forChild(routes)
            ],
            declarations: [
                add_teacher_component_1.AddTeacherComponent,
                list_teacher_component_1.ListTeacherComponent,
                detail_teacher_component_1.DetailTeacherComponent,
                list_course_component_1.ListCourseComponent,
                add_course_component_1.AddCourseComponent,
                detail_course_component_1.DetailCourseComponent,
                list_student_component_1.ListStudentComponent,
                detail_student_component_1.DetailStudentComponent
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], AdminModule);
    return AdminModule;
}());
exports.AdminModule = AdminModule;
//# sourceMappingURL=admin.module.js.map