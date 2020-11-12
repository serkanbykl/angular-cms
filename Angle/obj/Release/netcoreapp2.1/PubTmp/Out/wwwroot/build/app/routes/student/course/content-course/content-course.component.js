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
exports.StudentContentCourseComponent = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var course_service_1 = require("../../services/course.service");
var StudentContentCourseComponent = /** @class */ (function () {
    function StudentContentCourseComponent(courseservice, route) {
        this.courseservice = courseservice;
        this.route = route;
        this.cid = this.route.snapshot.params['cid'];
    }
    StudentContentCourseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.courseservice.clearCache();
        this.courseservice.getContent(localStorage.id, this.cid).subscribe(function (res) {
            _this.contents = res;
        }, function (err) {
            _this.message = "Content Not Found.";
            _this.contents = "";
        });
    };
    StudentContentCourseComponent = __decorate([
        core_1.Component({
            selector: 'app-content-course',
            templateUrl: './content-course.component.html',
            styleUrls: ['./content-course.component.css']
        }),
        __metadata("design:paramtypes", [course_service_1.CourseService, router_1.ActivatedRoute])
    ], StudentContentCourseComponent);
    return StudentContentCourseComponent;
}());
exports.StudentContentCourseComponent = StudentContentCourseComponent;
//# sourceMappingURL=content-course.component.js.map