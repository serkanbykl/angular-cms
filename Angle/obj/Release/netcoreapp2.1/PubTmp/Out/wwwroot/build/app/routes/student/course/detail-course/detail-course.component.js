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
exports.StudentDetailCourseComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var course_service_1 = require("../../services/course.service");
var StudentDetailCourseComponent = /** @class */ (function () {
    function StudentDetailCourseComponent(courseservice, route, router, fb) {
        var _this = this;
        this.courseservice = courseservice;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.id = this.route.snapshot.params['id'];
        this.courses = [];
        var cid = new forms_1.FormControl('', [forms_1.Validators.required]);
        var sid = new forms_1.FormControl('', [forms_1.Validators.required]);
        var cName = new forms_1.FormControl('', [forms_1.Validators.required]);
        var fees = new forms_1.FormControl('', [forms_1.Validators.required]);
        var duration = new forms_1.FormControl('', [forms_1.Validators.required]);
        var teacherName = new forms_1.FormControl('', [forms_1.Validators.required]);
        this.courseservice.getCourseById(this.id.toString()).subscribe(function (result) { return _this.setData(result); });
        this.insertForm = fb.group({
            'cid': cid,
            'sid': sid,
            'cName': cName,
            'fees': fees,
            'teacherName': teacherName,
            'duration': duration
        });
    }
    ;
    StudentDetailCourseComponent.prototype.setData = function (data) {
        this.course = data;
        this.insertForm.controls['cid'].setValue(this.course.cid);
        this.insertForm.controls['sid'].setValue(localStorage.id);
        this.insertForm.controls['cName'].setValue(this.course.cName);
        this.insertForm.controls['fees'].setValue(this.course.fees);
        this.insertForm.controls['teacherName'].setValue(this.course.teacherName);
        var formatDate = this.course.duration;
        formatDate.toString().slice(0, 10);
        this.insertForm.controls['duration'].setValue(formatDate.toString().slice(0, 10));
        this.dataSet = data;
    };
    StudentDetailCourseComponent.prototype.submitForm = function () {
        var _this = this;
        this.dataSet.sid = localStorage.id;
        var newReg = this.dataSet;
        this.courseservice.regCourse(newReg).subscribe(function (result) {
            _this.message = "Registered Successfuly.";
        }, function (error) {
            _this.message = "Already Register.";
        });
    };
    StudentDetailCourseComponent.prototype.ngOnInit = function () {
        this.courseservice.clearCache();
    };
    StudentDetailCourseComponent = __decorate([
        core_1.Component({
            selector: 'app-detail-course',
            templateUrl: './detail-course.component.html',
            styleUrls: ['./detail-course.component.css']
        }),
        __metadata("design:paramtypes", [course_service_1.CourseService,
            router_1.ActivatedRoute,
            router_1.Router,
            forms_1.FormBuilder])
    ], StudentDetailCourseComponent);
    return StudentDetailCourseComponent;
}());
exports.StudentDetailCourseComponent = StudentDetailCourseComponent;
//# sourceMappingURL=detail-course.component.js.map