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
exports.DetailTeacherComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var teacher_service_1 = require("../../services/teacher.service");
var DetailTeacherComponent = /** @class */ (function () {
    function DetailTeacherComponent(teacherservice, route, fb, router) {
        var _this = this;
        this.teacherservice = teacherservice;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.id = this.route.snapshot.params['id'];
        var id = new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.minLength(2)]);
        var username = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(2)]);
        var password = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(2)]);
        var name = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(2)]);
        var educationDetail = new forms_1.FormControl('');
        var personalDetail = new forms_1.FormControl('');
        var check = new forms_1.FormControl(false, forms_1.Validators.requiredTrue);
        this.teacherservice.getTeacherById(this.id.toString()).subscribe(function (result) { return _this.setData(result); });
        this.updateForm = fb.group({
            'id': id,
            'username': username,
            'password': password,
            'educationDetail': educationDetail,
            'personalDetail': personalDetail,
            'name': name
        });
        this.deleteForm = fb.group({
            'id': id,
            'check': check
        });
    }
    DetailTeacherComponent.prototype.setData = function (data) {
        this.teacher = data;
        this.updateForm.controls['id'].setValue(this.teacher.id);
        this.updateForm.controls['name'].setValue(this.teacher.name);
        this.updateForm.controls['username'].setValue(this.teacher.userName);
        this.updateForm.controls['password'].setValue(this.teacher.password);
        this.updateForm.controls['educationDetail'].setValue(this.teacher.educationDetail);
        this.updateForm.controls['personalDetail'].setValue(this.teacher.personalDetail);
        this.deleteForm.controls['id'].setValue(this.teacher.id);
    };
    DetailTeacherComponent.prototype.onUpdate = function ($ev, value) {
        var _this = this;
        $ev.preventDefault();
        for (var c in this.updateForm.controls) {
            this.updateForm.controls[c].markAsTouched();
        }
        if (this.updateForm.valid) {
            console.log('Valid!');
            var editTeacher = value;
            editTeacher.id.toString();
            this.teacherservice.updateTeacher(editTeacher.id, editTeacher).subscribe(function (result) {
                console.log('Teacher Updated');
                _this.upMessage = "";
                _this.upMessage = "Teacher Updated";
                _this.teacherservice.clearCache();
                _this.teacherservice.getTeacherById(_this.id.toString()).subscribe(function (result) { return _this.setData(result); });
            }, function (error) { return console.log('Could Not Update Teacher'); });
        }
    };
    DetailTeacherComponent.prototype.onDelete = function (value) {
        var _this = this;
        if (this.deleteForm.valid) {
            (value.id).toString();
            this.teacherservice.deleteTeacher(value.id).subscribe(function (result) {
                _this.delMessage = "";
                _this.delMessage = "Deleted Successfully.";
            }, function (error) {
                _this.delMessage = "";
                _this.delMessage = "Error!";
            });
        }
    };
    DetailTeacherComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DetailTeacherComponent.prototype, "teacher", void 0);
    DetailTeacherComponent = __decorate([
        core_1.Component({
            selector: 'app-detail-teacher',
            templateUrl: './detail-teacher.component.html',
            styleUrls: ['./detail-teacher.component.css']
        }),
        __metadata("design:paramtypes", [teacher_service_1.TeacherService, router_1.ActivatedRoute, forms_1.FormBuilder, router_1.Router])
    ], DetailTeacherComponent);
    return DetailTeacherComponent;
}());
exports.DetailTeacherComponent = DetailTeacherComponent;
//# sourceMappingURL=detail-teacher.component.js.map