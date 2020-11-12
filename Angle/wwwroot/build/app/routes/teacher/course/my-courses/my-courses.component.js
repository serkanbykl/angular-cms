"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherMyCoursesComponent = void 0;
var core_1 = require("@angular/core");
var course_service_1 = require("../../services/course.service");
var TeacherMyCoursesComponent = /** @class */ (function () {
    function TeacherMyCoursesComponent(courseservice) {
        this.courseservice = courseservice;
    }
    TeacherMyCoursesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.courseservice.clearCache();
        this.courses$ = this.courseservice.getMyCourses(localStorage.id);
        this.courses$.subscribe(function (result) {
            _this.courses = result;
        });
    };
    TeacherMyCoursesComponent = __decorate([
        core_1.Component({
            selector: 'app-my-courses',
            templateUrl: './my-courses.component.html',
            styleUrls: ['./my-courses.component.css']
        }),
        __metadata("design:paramtypes", [course_service_1.CourseService])
    ], TeacherMyCoursesComponent);
    return TeacherMyCoursesComponent;
}());
exports.TeacherMyCoursesComponent = TeacherMyCoursesComponent;
//# sourceMappingURL=my-courses.component.js.map