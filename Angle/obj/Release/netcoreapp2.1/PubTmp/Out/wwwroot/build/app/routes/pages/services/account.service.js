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
exports.AccountService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var AccountService = /** @class */ (function () {
    function AccountService(http, router) {
        this.http = http;
        this.router = router;
        // API Url
        this.baseUrlLogin = "api/account/login";
        this.baseUrlRegister = "api/account/register";
        // Cookies
        this.loginStatus = new rxjs_1.BehaviorSubject(this.checkLoginStatus());
        this.UserName = new rxjs_1.BehaviorSubject(localStorage.getItem('username'));
        this.UserRole = new rxjs_1.BehaviorSubject(localStorage.getItem('userRole'));
    }
    // Register Method
    AccountService.prototype.register = function (username, password, educationdetail, personaldetail, name) {
        return this.http.post(this.baseUrlRegister, {
            username: username, password: password, educationdetail: educationdetail, personaldetail: personaldetail, name: name
        }).pipe(operators_1.map(function (result) {
            return result;
        }, function (error) {
            return error;
        }));
    };
    // Login Method
    AccountService.prototype.login = function (username, password) {
        var _this = this;
        // pipe() let you combine multiple functions into a single function. 
        // pipe() runs the composed functions in sequence.
        return this.http.post(this.baseUrlLogin, { username: username, password: password }).pipe(operators_1.map(function (result) {
            // login successful if there's a jwt token in the response
            if (result && result.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                _this.loginStatus.next(true);
                localStorage.setItem('loginStatus', '1');
                localStorage.setItem('jwt', result.token);
                localStorage.setItem('username', result.username);
                localStorage.setItem('expiration', result.expiration);
                localStorage.setItem('userRole', result.userRole);
                localStorage.setItem('id', result.id);
                _this.UserName.next(localStorage.getItem('username'));
                _this.UserRole.next(localStorage.getItem('userRole'));
            }
            return result;
        }));
    };
    // LogOut Method
    AccountService.prototype.logOut = function () {
        this.loginStatus.next(false);
        localStorage.removeItem('id');
        localStorage.setItem('loginStatus', "0");
        localStorage.removeItem('jwt');
        localStorage.removeItem('username');
        localStorage.removeItem('userRole');
        localStorage.removeItem('expiration');
        this.router.navigate(['/login']);
        console.log("Logout Successfuly");
    };
    AccountService.prototype.checkLoginStatus = function () {
        var loginCookie = localStorage.getItem("loginStatus");
        if (loginCookie == "1") {
            return true;
        }
        return false;
    };
    Object.defineProperty(AccountService.prototype, "isLoggedIn", {
        get: function () {
            return this.loginStatus.asObservable();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountService.prototype, "currentUserName", {
        get: function () {
            return this.UserName.asObservable();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountService.prototype, "currentUserRole", {
        get: function () {
            return this.UserRole.asObservable();
        },
        enumerable: false,
        configurable: true
    });
    AccountService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], AccountService);
    return AccountService;
}());
exports.AccountService = AccountService;
//# sourceMappingURL=account.service.js.map