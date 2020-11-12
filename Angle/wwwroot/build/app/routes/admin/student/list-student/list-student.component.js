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
exports.ListStudentComponent = void 0;
var core_1 = require("@angular/core");
var student_service_1 = require("../../services/student.service");
var ListStudentComponent = /** @class */ (function () {
    function ListStudentComponent(studentservice) {
        this.studentservice = studentservice;
        this.students = [];
    }
    ListStudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.studentservice.clearCache();
        this.students$ = this.studentservice.getStudents();
        this.students$.subscribe(function (result) {
            _this.students = result;
        });
    };
    ListStudentComponent = __decorate([
        core_1.Component({
            selector: 'app-list-student',
            templateUrl: './list-student.component.html',
            styleUrls: ['./list-student.component.css']
        }),
        __metadata("design:paramtypes", [student_service_1.StudentService])
    ], ListStudentComponent);
    return ListStudentComponent;
}());
exports.ListStudentComponent = ListStudentComponent;
//# sourceMappingURL=list-student.component.js.map