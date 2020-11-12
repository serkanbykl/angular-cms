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
exports.DetailCourseComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var course_service_1 = require("../../services/course.service");
var student_service_1 = require("../../services/student.service");
var teacher_service_1 = require("../../services/teacher.service");
var DetailCourseComponent = /** @class */ (function () {
    function DetailCourseComponent(courseservice, route, fb, teacherservice, studentservice) {
        var _this = this;
        this.courseservice = courseservice;
        this.route = route;
        this.fb = fb;
        this.teacherservice = teacherservice;
        this.studentservice = studentservice;
        this.teachers = [];
        this.contents = [];
        this.id = this.route.snapshot.params['id'];
        this.students = [];
        var cid = new forms_1.FormControl('', [forms_1.Validators.required]);
        var tid = new forms_1.FormControl('', [forms_1.Validators.required]);
        var cName = new forms_1.FormControl('', [forms_1.Validators.required]);
        //let teacherName = new FormControl('', [Validators.required]);
        var fees = new forms_1.FormControl('', [forms_1.Validators.required]);
        var duration = new forms_1.FormControl('', [forms_1.Validators.required]);
        var check = new forms_1.FormControl(false, forms_1.Validators.requiredTrue);
        this.courseservice.getCourseById(this.id.toString()).subscribe(function (result) { return _this.setData(result); });
        this.updateForm = fb.group({
            'cid': cid,
            'tid': tid,
            'cName': cName,
            'fees': fees,
            'duration': duration
        });
        console.log();
        this.deleteForm = fb.group({
            'cid': cid,
            'check': check
        });
    }
    DetailCourseComponent.prototype.setData = function (data) {
        this.course = data;
        this.updateForm.controls['cid'].setValue(this.course.cid);
        this.updateForm.controls['tid'].setValue(this.course.tid);
        this.updateForm.controls['cName'].setValue(this.course.cName);
        this.updateForm.controls['fees'].setValue(this.course.fees);
        var formatDate = this.course.duration;
        formatDate.toString().slice(0, 10);
        this.updateForm.controls['duration'].setValue(formatDate.toString().slice(0, 10));
    };
    DetailCourseComponent.prototype.onUpdate = function ($ev, value) {
        var _this = this;
        $ev.preventDefault();
        for (var c in this.updateForm.controls) {
            this.updateForm.controls[c].markAsTouched();
        }
        if (this.updateForm.valid) {
            console.log('Valid!');
            var editCourse = value;
            editCourse.cid.toString();
            this.courseservice.updateCourse(editCourse.cid, editCourse).subscribe(function (result) {
                console.log('Course Updated');
                _this.upMessage = "";
                _this.upMessage = "Course Updated";
                _this.courseservice.clearCache();
                _this.courseservice.getCourseById(_this.id.toString()).subscribe(function (result) { return _this.setData(result); });
            }, function (error) { return console.log('Could Not Update Course'); });
        }
    };
    DetailCourseComponent.prototype.onDelete = function (value) {
        var _this = this;
        if (this.deleteForm.valid) {
            (value.cid).toString();
            this.courseservice.deleteCourse(value.cid).subscribe(function (result) {
                _this.delMessage = "";
                _this.delMessage = "Deleted Successfully.";
            }, function (error) {
                _this.delMessage = "";
                _this.delMessage = "Error!";
            });
        }
    };
    DetailCourseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teachers$ = this.teacherservice.getTeachers();
        this.teachers$.subscribe(function (result) {
            _this.teachers = result;
        });
        this.content$ = this.courseservice.getContentCourse(this.id);
        this.content$.subscribe(function (result) {
            _this.contents = result;
        });
        this.studentservice.clearCache();
        this.students$ = this.studentservice.getCourseStudent(this.id);
        this.students$.subscribe(function (result) {
            _this.students = result;
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DetailCourseComponent.prototype, "course", void 0);
    DetailCourseComponent = __decorate([
        core_1.Component({
            selector: 'app-detail-course',
            templateUrl: './detail-course.component.html',
            styleUrls: ['./detail-course.component.css']
        }),
        __metadata("design:paramtypes", [course_service_1.CourseService,
            router_1.ActivatedRoute,
            forms_1.FormBuilder,
            teacher_service_1.TeacherService,
            student_service_1.StudentService])
    ], DetailCourseComponent);
    return DetailCourseComponent;
}());
exports.DetailCourseComponent = DetailCourseComponent;
//# sourceMappingURL=detail-course.component.js.map