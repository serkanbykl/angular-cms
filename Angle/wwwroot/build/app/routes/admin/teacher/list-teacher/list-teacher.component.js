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
exports.ListTeacherComponent = void 0;
var core_1 = require("@angular/core");
var teacher_service_1 = require("../../services/teacher.service");
var ListTeacherComponent = /** @class */ (function () {
    function ListTeacherComponent(teacherservice) {
        this.teacherservice = teacherservice;
        this.teachers = [];
    }
    ListTeacherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teachers$ = this.teacherservice.getTeachers();
        this.teachers$.subscribe(function (result) {
            _this.teachers = result;
        });
    };
    ListTeacherComponent = __decorate([
        core_1.Component({
            selector: 'app-list-teacher',
            templateUrl: './list-teacher.component.html',
            styleUrls: ['./list-teacher.component.css']
        }),
        __metadata("design:paramtypes", [teacher_service_1.TeacherService])
    ], ListTeacherComponent);
    return ListTeacherComponent;
}());
exports.ListTeacherComponent = ListTeacherComponent;
//# sourceMappingURL=list-teacher.component.js.map