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
var CourseService = /** @class */ (function () {
    function CourseService(http) {
        this.http = http;
        this.getMyCoursesUrl = "api/teacher/getmycourses/";
        this.getContentUrl = "api/teacher/getcontentcourse/";
        this.addContentUrl = "api/teacher/addcontent";
        this.deleteContentUrl = "api/teacher/deletecontent/";
    }
    CourseService.prototype.getMyCourses = function (id) {
        this.myCourse$ = this.http.get(this.getMyCoursesUrl + id);
        return this.myCourse$;
    };
    CourseService.prototype.getContentCourse = function (id, cid) {
        if (!this.course$) {
            this.course$ = this.http.get(this.getContentUrl + id + '/' + cid);
        }
        return this.course$;
    };
    CourseService.prototype.addContent = function (newContent) {
        return this.http.post(this.addContentUrl, newContent);
    };
    CourseService.prototype.deleteContent = function (id, cid) {
        return this.http.delete(this.deleteContentUrl + id + '/' + cid);
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