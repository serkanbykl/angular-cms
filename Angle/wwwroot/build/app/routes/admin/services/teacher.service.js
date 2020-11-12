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
exports.TeacherService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var TeacherService = /** @class */ (function () {
    function TeacherService(http) {
        this.http = http;
        this.baseUrl = "api/admin/getteachers";
        this.addTeacherUrl = "api/admin/addteacher";
        this.deleteTeacherUrl = "api/admin/deleteteacher/";
        this.updateTeacherUrl = "api/admin/updateteacher/";
        this.baseUrlRegister = "api/admin/addteacher";
    }
    TeacherService.prototype.register = function (username, password, educationdetail, personaldetail, name) {
        return this.http.post(this.baseUrlRegister, {
            username: username, password: password, educationdetail: educationdetail, personaldetail: personaldetail, name: name
        }).pipe(operators_1.map(function (result) {
            return result;
        }, function (error) {
            return error;
        }));
    };
    TeacherService.prototype.getTeachers = function () {
        if (!this.teacher$) {
            this.teacher$ = this.http.get(this.baseUrl);
        }
        return this.teacher$;
    };
    TeacherService.prototype.getTeacherById = function (id) {
        return this.getTeachers().pipe(operators_1.flatMap(function (result) { return result; }), operators_1.first(function (teacher) { return teacher.id == id; }));
    };
    TeacherService.prototype.insertTeacher = function (newTeacher) {
        return this.http.post(this.addTeacherUrl, newTeacher);
    };
    TeacherService.prototype.updateTeacher = function (id, editTeacher) {
        console.log(editTeacher);
        return this.http.put(this.updateTeacherUrl + id, editTeacher);
    };
    TeacherService.prototype.deleteTeacher = function (id) {
        return this.http.delete(this.deleteTeacherUrl + id);
    };
    TeacherService.prototype.clearCache = function () {
        this.teacher$ = null;
    };
    TeacherService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], TeacherService);
    return TeacherService;
}());
exports.TeacherService = TeacherService;
//# sourceMappingURL=teacher.service.js.map