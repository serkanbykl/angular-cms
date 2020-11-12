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
exports.CourseService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var CourseService = /** @class */ (function () {
    function CourseService(http) {
        this.http = http;
        this.baseUrl = "api/admin/getcourses";
        this.addCourseUrl = "api/admin/addcourse";
        this.deleteCourseUrl = "api/admin/deletecourse/";
        this.updateCourseUrl = "api/admin/updatecourse/";
        this.getContentCourseUrl = "api/admin/getcontentcourse/";
        this.getCourseStudents = "api/admin/getcoursestudents/";
    }
    CourseService.prototype.getCourses = function () {
        if (!this.course$) {
            this.course$ = this.http.get(this.baseUrl);
        }
        return this.course$;
    };
    CourseService.prototype.getCourseById = function (id) {
        return this.getCourses().pipe(operators_1.flatMap(function (result) { return result; }), operators_1.first(function (course) { return course.cid == id; }));
    };
    CourseService.prototype.insertCourse = function (newCourse) {
        return this.http.post(this.addCourseUrl, newCourse);
    };
    CourseService.prototype.updateCourse = function (id, editCourse) {
        return this.http.put(this.updateCourseUrl + id, editCourse);
    };
    CourseService.prototype.deleteCourse = function (id) {
        return this.http.delete(this.deleteCourseUrl + id);
    };
    CourseService.prototype.getContentCourse = function (cid) {
        this.content$ = this.http.get(this.getContentCourseUrl + cid);
        return this.content$;
    };
    CourseService.prototype.getStudentCourses = function (cid) {
        if (!this.student$) {
            this.student$ = this.http.get(this.getCourseStudents + cid);
        }
        return this.student$;
    };
    CourseService.prototype.clearCache = function () {
        this.course$ = null;
    };
    CourseService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], CourseService);
    return CourseService;
}());
exports.CourseService = CourseService;
//# sourceMappingURL=course.service.js.map