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
exports.AddCourseComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var course_service_1 = require("../../services/course.service");
var teacher_service_1 = require("../../services/teacher.service");
var AddCourseComponent = /** @class */ (function () {
    function AddCourseComponent(courseservice, teacherservice, fb) {
        this.courseservice = courseservice;
        this.teacherservice = teacherservice;
        this.fb = fb;
        this.courses = [];
        this.teachers = [];
        var tid = new forms_1.FormControl('', [forms_1.Validators.required]);
        var cName = new forms_1.FormControl('', [forms_1.Validators.required]);
        var fees = new forms_1.FormControl('', [forms_1.Validators.required]);
        var duration = new forms_1.FormControl('', [forms_1.Validators.required]);
        this.insertForm = fb.group({
            'tid': tid,
            'cName': cName,
            'fees': fees,
            'duration': duration
        });
    }
    AddCourseComponent.prototype.submitForm = function () {
        var _this = this;
        var newCourse = this.insertForm.value;
        this.courseservice.insertCourse(newCourse).subscribe(function (result) {
            _this.courseservice.clearCache();
            _this.courses$ = _this.courseservice.getCourses();
            _this.courses$.subscribe(function (newlist) {
                _this.courses = newlist;
                _this.insertForm.reset();
                _this.message = "";
                _this.message = "New Course Added.";
            });
        }, function (error) {
            _this.message = "";
            _this.message = "Could not add course.";
        });
    };
    AddCourseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teachers$ = this.teacherservice.getTeachers();
        this.teachers$.subscribe(function (result) {
            _this.teachers = result;
        });
    };
    AddCourseComponent = __decorate([
        core_1.Component({
            selector: 'app-list-course',
            templateUrl: './add-course.component.html',
            styleUrls: ['./add-course.component.scss']
        }),
        __metadata("design:paramtypes", [course_service_1.CourseService, teacher_service_1.TeacherService, forms_1.FormBuilder])
    ], AddCourseComponent);
    return AddCourseComponent;
}());
exports.AddCourseComponent = AddCourseComponent;
//# sourceMappingURL=add-course.component.js.map