"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var shared_module_1 = require("../../shared/shared.module");
var auth_service_1 = require("../guards/auth.service");
var content_course_component_1 = require("./course/content-course/content-course.component");
var my_courses_component_1 = require("./course/my-courses/my-courses.component");
var routes = [
    { path: 'my-courses', component: my_courses_component_1.TeacherMyCoursesComponent, canActivate: [auth_service_1.AuthGuardService] },
    { path: 'my-course/:cid', component: content_course_component_1.TeacherContentCourseComponent }
];
var TeacherModule = /** @class */ (function () {
    function TeacherModule() {
    }
    TeacherModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule.forChild(routes)
            ],
            declarations: [
                my_courses_component_1.TeacherMyCoursesComponent,
                content_course_component_1.TeacherContentCourseComponent
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], TeacherModule);
    return TeacherModule;
}());
exports.TeacherModule = TeacherModule;
//# sourceMappingURL=teacher.module.js.map