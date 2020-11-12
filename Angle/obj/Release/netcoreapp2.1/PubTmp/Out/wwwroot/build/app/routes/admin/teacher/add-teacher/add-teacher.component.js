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
exports.AddTeacherComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var ng2_validation_1 = require("ng2-validation");
var settings_service_1 = require("../../../../core/settings/settings.service");
var teacher_service_1 = require("../../services/teacher.service");
var AddTeacherComponent = /** @class */ (function () {
    function AddTeacherComponent(settings, fb, teacherservice, router) {
        this.settings = settings;
        this.teacherservice = teacherservice;
        this.router = router;
        this.errorList = [];
        var username = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(2)]);
        var password = new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(2)]));
        var certainPassword = new forms_1.FormControl('', [forms_1.Validators.required, ng2_validation_1.CustomValidators.equalTo(password)]);
        var name = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(2)]);
        var educationDetail = new forms_1.FormControl(null);
        var personalDetail = new forms_1.FormControl(null);
        this.passwordForm = fb.group({
            'password': password,
            'confirmPassword': certainPassword
        });
        this.insertForm = fb.group({
            'username': username,
            'passwordGroup': this.passwordForm,
            'name': name,
            'educationDetail': educationDetail,
            'personalDetail': personalDetail
        });
    }
    AddTeacherComponent.prototype.submitForm = function ($ev, value) {
        var _this = this;
        $ev.preventDefault();
        for (var c in this.insertForm.controls) {
            this.insertForm.controls[c].markAsTouched();
        }
        for (var c in this.passwordForm.controls) {
            this.passwordForm.controls[c].markAsTouched();
        }
        if (this.insertForm.valid) {
            console.log('Valid!');
            var userDetails = value;
            this.teacherservice.register(userDetails.username, userDetails.passwordGroup.password, userDetails.educationDetail, userDetails.personalDetail, userDetails.name).subscribe(function (result) {
                _this.message = "";
                _this.errorList = [];
                _this.message = "Registered Successfully.";
                _this.insertForm.reset();
            }, function (error) {
                _this.errorList = [];
                _this.message = "";
                for (var i = 0; i < error.error.value.length; i++) {
                    _this.errorList.push(error.error.value[i]);
                    console.log(error.error.value[i]);
                }
                console.log("Sorry.. Can't Register.");
            });
        }
    };
    AddTeacherComponent.prototype.ngOnInit = function () {
    };
    AddTeacherComponent = __decorate([
        core_1.Component({
            selector: 'app-add-teacher',
            templateUrl: './add-teacher.component.html',
            styleUrls: ['./add-teacher.component.css']
        }),
        __metadata("design:paramtypes", [settings_service_1.SettingsService, forms_1.FormBuilder, teacher_service_1.TeacherService, router_1.Router])
    ], AddTeacherComponent);
    return AddTeacherComponent;
}());
exports.AddTeacherComponent = AddTeacherComponent;
//# sourceMappingURL=add-teacher.component.js.map