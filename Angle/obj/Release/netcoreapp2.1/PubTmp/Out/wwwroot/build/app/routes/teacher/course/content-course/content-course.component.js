"use strict";
/*import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Course } from '../../interfaces/course';
import { CourseService } from '../../services/course.service';
@Component({
  selector: 'app-content-course',
  templateUrl: './content-course.component.html',
  styleUrls: ['./content-course.component.css']
})
export class TeacherContentCourseComponent implements OnInit {


courses$:Observable<Course[]>;
courses:Course[];

  constructor(private courseservice:CourseService) { }
  ngOnInit() {

  }

}
*/
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
exports.TeacherContentCourseComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var course_service_1 = require("../../services/course.service");
var TeacherContentCourseComponent = /** @class */ (function () {
    function TeacherContentCourseComponent(courseservice, route, fb) {
        this.courseservice = courseservice;
        this.route = route;
        this.fb = fb;
        this.cid = this.route.snapshot.params['cid'];
        this.contents = [];
        var tid = new forms_1.FormControl(localStorage.id, [forms_1.Validators.required]);
        var cid = new forms_1.FormControl(this.cid, [forms_1.Validators.required]);
        var content = new forms_1.FormControl('', [forms_1.Validators.required]);
        this.insertForm = fb.group({
            'tid': tid,
            'cid': cid,
            'content': content
        });
    }
    TeacherContentCourseComponent.prototype.submitForm = function () {
        var _this = this;
        var newContent = this.insertForm.value;
        newContent.id = this.cid;
        newContent.tid = localStorage.id;
        this.courseservice.addContent(newContent).subscribe(function (result) {
            _this.message = "New Content Added.";
            _this.getContent();
        }, function (error) {
            _this.message = "Could Not Add Content.";
        });
    };
    TeacherContentCourseComponent.prototype.deleteContent = function (tcid) {
        var _this = this;
        this.courseservice.deleteContent(localStorage.id, tcid).subscribe(function (res) {
            _this.message = "Content Deleted";
            _this.courseservice.getContentCourse(localStorage.id, _this.cid).subscribe(function (res) {
                _this.contents = res;
            }, function (err) {
                _this.contents = [];
                console.log("Content Error!");
            });
        }, function (err) {
            _this.message = "Could Not Delete Content.";
        });
    };
    TeacherContentCourseComponent.prototype.getContent = function () {
        var _this = this;
        this.courseservice.clearCache();
        this.courseservice.getContentCourse(localStorage.id, this.cid).subscribe(function (res) {
            _this.contents = res;
        }, function (err) {
            _this.contents = [];
            console.log("Content Error!");
        });
    };
    TeacherContentCourseComponent.prototype.ngOnInit = function () {
        this.getContent();
    };
    TeacherContentCourseComponent = __decorate([
        core_1.Component({
            selector: 'app-content-course',
            templateUrl: './content-course.component.html',
            styleUrls: ['./content-course.component.css']
        }),
        __metadata("design:paramtypes", [course_service_1.CourseService, router_1.ActivatedRoute, forms_1.FormBuilder])
    ], TeacherContentCourseComponent);
    return TeacherContentCourseComponent;
}());
exports.TeacherContentCourseComponent = TeacherContentCourseComponent;
//# sourceMappingURL=content-course.component.js.map