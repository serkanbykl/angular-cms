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
exports.RegisterComponent = void 0;
var core_1 = require("@angular/core");
var settings_service_1 = require("../../../core/settings/settings.service");
var forms_1 = require("@angular/forms");
var ng2_validation_1 = require("ng2-validation");
var account_service_1 = require("../services/account.service");
var router_1 = require("@angular/router");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(settings, fb, acc, router) {
        this.settings = settings;
        this.acc = acc;
        this.router = router;
        this.errorList = [];
        var username = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(2)]);
        var password = new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(2)]));
        var certainPassword = new forms_1.FormControl('', [forms_1.Validators.required, ng2_validation_1.CustomValidators.equalTo(password)]);
        var name = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(2)]);
        var educationDetail = new forms_1.FormControl('');
        var personalDetail = new forms_1.FormControl('');
        this.passwordForm = fb.group({
            'password': password,
            'confirmPassword': certainPassword
        });
        this.valForm = fb.group({
            'accountagreed': [null, forms_1.Validators.required],
            'username': username,
            'passwordGroup': this.passwordForm,
            'name': name,
            'educationDetail': educationDetail,
            'personalDetail': personalDetail
        });
    }
    RegisterComponent.prototype.submitForm = function ($ev, value) {
        var _this = this;
        $ev.preventDefault();
        for (var c in this.valForm.controls) {
            this.valForm.controls[c].markAsTouched();
        }
        for (var c in this.passwordForm.controls) {
            this.passwordForm.controls[c].markAsTouched();
        }
        if (this.valForm.valid) {
            console.log('Valid!');
            var userDetails = value;
            this.acc.register(userDetails.username, userDetails.passwordGroup.password, userDetails.name, userDetails.educationDetail, userDetails.personalDetail).subscribe(function (result) {
                _this.message = "";
                _this.errorList = [];
                _this.message = "Registered Successfully.";
                _this.valForm.reset();
                _this.router.navigate(['/login']);
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
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.scss']
        }),
        __metadata("design:paramtypes", [settings_service_1.SettingsService, forms_1.FormBuilder, account_service_1.AccountService, router_1.Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map