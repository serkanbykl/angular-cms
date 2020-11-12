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
exports.StudentService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var StudentService = /** @class */ (function () {
    function StudentService(http) {
        this.http = http;
        this.baseUrl = "api/admin/getstudents";
        this.getStudentCoursesUrl = "api/admin/GetStudentCourses/";
        this.updateFeesUrl = "api/admin/updatestudentfees";
        this.deleteStudentUrl = "api/admin/deletestudent/";
        this.getCourseStudentUrl = "api/admin/getcoursestudents/";
    }
    StudentService.prototype.getStudents = function () {
        this.clearCache();
        this.student$ = this.http.get(this.baseUrl);
        return this.student$;
    };
    StudentService.prototype.getStudentById = function (id) {
        return this.getStudents().pipe(operators_1.flatMap(function (result) { return result; }), operators_1.first(function (student) { return student.id == id; }));
    };
    StudentService.prototype.deleteStudent = function (id) {
        return this.http.delete(this.deleteStudentUrl + id);
    };
    StudentService.prototype.getStudentCourses = function (id) {
        this.student$ = this.http.get(this.getStudentCoursesUrl + id);
        return this.student$;
    };
    StudentService.prototype.getCourseStudent = function (cid) {
        this.student$ = this.http.get(this.getCourseStudentUrl + cid);
        return this.student$;
    };
    StudentService.prototype.updateFees = function (editFees) {
        return this.http.put(this.updateFeesUrl, editFees);
    };
    StudentService.prototype.clearCache = function () {
        this.student$ = null;
    };
    StudentService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], StudentService);
    return StudentService;
}());
exports.StudentService = StudentService;
//# sourceMappingURL=student.service.js.map