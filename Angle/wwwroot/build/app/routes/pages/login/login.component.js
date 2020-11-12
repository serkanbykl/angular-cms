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
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var settings_service_1 = require("../../../core/settings/settings.service");
var forms_1 = require("@angular/forms");
var account_service_1 = require("../services/account.service");
var router_1 = require("@angular/router");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(settings, fb, acc, router, route) {
        this.settings = settings;
        this.fb = fb;
        this.acc = acc;
        this.router = router;
        this.route = route;
    }
    LoginComponent.prototype.submitForm = function () {
        var _this = this;
        console.log('Valid!');
        var userLogin = this.loginForm.value;
        this.acc.login(userLogin.username, userLogin.password).subscribe(function (result) {
            var token = result.token;
            console.log(token);
            console.log(result.userRole);
            console.log("User Logged In Successfully");
            _this.invalidLogin = false;
            _this.router.navigate(['/home']).then(function () { window.location.reload(); });
        }, function (error) {
            _this.invalidLogin = true;
            _this.errorMessage = "Please Check the Login Credentials - Invalid Username / Password was entered";
            console.log(_this.errorMessage);
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.username = new forms_1.FormControl('', [forms_1.Validators.required]);
        this.password = new forms_1.FormControl('', [forms_1.Validators.required]);
        this.loginForm = this.fb.group({
            "username": this.username,
            "password": this.password
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        }),
        __metadata("design:paramtypes", [settings_service_1.SettingsService, forms_1.FormBuilder, account_service_1.AccountService, router_1.Router, router_1.ActivatedRoute])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map