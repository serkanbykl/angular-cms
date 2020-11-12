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
exports.DetailStudentComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var modal_1 = require("ngx-bootstrap/modal");
var student_service_1 = require("../../services/student.service");
var DetailStudentComponent = /** @class */ (function () {
    function DetailStudentComponent(studentservice, route, fb, modalservice) {
        var _this = this;
        this.studentservice = studentservice;
        this.route = route;
        this.fb = fb;
        this.modalservice = modalservice;
        this.studentCourses = [];
        this.id = this.route.snapshot.params['id'];
        var check = new forms_1.FormControl(false, forms_1.Validators.requiredTrue);
        this.studentservice.getStudentById(this.id.toString()).subscribe(function (result) {
            _this.student = result;
            _this.sid = _this.student.id;
        });
        this.deleteForm = fb.group({
            'check': check
        });
        var scid = new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.minLength(2)]);
        var cid = new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.minLength(2)]);
        var sid = new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.minLength(2)]);
        var fees = new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.minLength(2)]);
        this.updateForm = fb.group({
            'scid': scid,
            'fees': fees,
            'sid': sid,
            'cid': cid
        });
    }
    DetailStudentComponent.prototype.openModal = function (template, scid, cid, feesStudent) {
        this.updateForm.controls['scid'].setValue(scid);
        this.updateForm.controls['cid'].setValue(cid);
        this.updateForm.controls['sid'].setValue(this.id.toString());
        this.updateForm.controls['fees'].setValue(feesStudent);
        this.modalRef = this.modalservice.show(template);
    };
    DetailStudentComponent.prototype.onUpdate = function ($ev, value) {
        var _this = this;
        $ev.preventDefault();
        for (var c in this.updateForm.controls) {
            this.updateForm.controls[c].markAsTouched();
        }
        if (this.updateForm.valid) {
            console.log('Valid!');
            var editFees = value;
            this.studentservice.updateFees(editFees).subscribe(function (result) {
                _this.feesMessage = "";
                _this.feesMessage = "Updated!";
                _this.student_Courses();
            }, function (error) {
                _this.feesMessage = "";
                _this.feesMessage = "Error!";
            });
        }
    };
    DetailStudentComponent.prototype.student_Courses = function () {
        var _this = this;
        this.studentservice.clearCache();
        this.studentCourses$ = this.studentservice.getStudentCourses(this.id.toString());
        this.studentCourses$.subscribe(function (result) {
            _this.studentCourses = result;
        });
    };
    DetailStudentComponent.prototype.deleteStudent = function (id) {
        var _this = this;
        this.studentservice.deleteStudent(this.id.toString()).subscribe(function (result) {
            _this.delMessage = "";
            _this.delMessage = "Student Deleted.";
        }, function (error) {
            _this.delMessage = "";
            _this.delMessage = "Error. Please Try Again.";
        });
    };
    DetailStudentComponent.prototype.ngOnInit = function () {
        this.student_Courses();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DetailStudentComponent.prototype, "student", void 0);
    DetailStudentComponent = __decorate([
        core_1.Component({
            selector: 'app-detail-student',
            templateUrl: './detail-student.component.html',
            styleUrls: ['./detail-student.component.css']
        }),
        __metadata("design:paramtypes", [student_service_1.StudentService, router_1.ActivatedRoute, forms_1.FormBuilder, modal_1.BsModalService])
    ], DetailStudentComponent);
    return DetailStudentComponent;
}());
exports.DetailStudentComponent = DetailStudentComponent;
//# sourceMappingURL=detail-student.component.js.map