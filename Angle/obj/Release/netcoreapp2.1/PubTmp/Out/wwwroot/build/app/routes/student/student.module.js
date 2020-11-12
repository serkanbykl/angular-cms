"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var shared_module_1 = require("../../shared/shared.module");
var auth_service_1 = require("../guards/auth.service");
var content_course_component_1 = require("./course/content-course/content-course.component");
var detail_course_component_1 = require("./course/detail-course/detail-course.component");
var list_course_component_1 = require("./course/list-course/list-course.component");
var reg_course_component_1 = require("./course/reg-course/reg-course.component");
var routes = [
    { path: 'list-course', component: list_course_component_1.StudentListCourseComponent, canActivate: [auth_service_1.AuthGuardService] },
    { path: 'reg-course', component: reg_course_component_1.StudentRegCourseComponent, canActivate: [auth_service_1.AuthGuardService] },
    { path: 'course/:id', component: detail_course_component_1.StudentDetailCourseComponent, canActivate: [auth_service_1.AuthGuardService] },
    { path: 'course/content/:cid', component: content_course_component_1.StudentContentCourseComponent }
];
var StudentModule = /** @class */ (function () {
    function StudentModule() {
    }
    StudentModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule.forChild(routes)
            ],
            declarations: [
                list_course_component_1.StudentListCourseComponent,
                reg_course_component_1.StudentRegCourseComponent,
                list_course_component_1.StudentListCourseComponent,
                detail_course_component_1.StudentDetailCourseComponent,
                content_course_component_1.StudentContentCourseComponent
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], StudentModule);
    return StudentModule;
}());
exports.StudentModule = StudentModule;
//# sourceMappingURL=student.module.js.map