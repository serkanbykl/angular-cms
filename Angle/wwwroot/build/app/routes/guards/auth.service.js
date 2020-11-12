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
exports.AuthGuardService = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var operators_1 = require("rxjs/operators");
var account_service_1 = require("../pages/services/account.service");
var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(acc, router) {
        this.acc = acc;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.acc.isLoggedIn.pipe(operators_1.take(1), operators_1.map(function (loginStatus) {
            var destination = state.url;
            var id = route.params.id;
            switch (destination) {
                case "/login": {
                    if (!loginStatus) {
                        return true;
                    }
                    else {
                        _this.router.navigate(['/home']);
                    }
                }
                case "/register": {
                    if (!loginStatus) {
                        return true;
                    }
                    else {
                        _this.router.navigate(['/home']);
                    }
                }
                case "/student/list-course":
                case '/student/course/' + id:
                case "/student/reg-course":
                case '/student/course/content/' + id:
                    {
                        if (localStorage.getItem("userRole") === "Student") {
                            return true;
                        }
                        else {
                            _this.router.navigate(['/home']);
                        }
                    }
                case "/teacher/my-courses":
                    {
                        if (localStorage.getItem("userRole") === "Teacher") {
                            return true;
                        }
                        else {
                            _this.router.navigate(['/home']);
                        }
                    }
                case "/admin/list-teacher":
                case "/admin/add-teacher":
                case '/admin/teacher/' + id:
                case "/admin/list-course":
                case "/admin/add-course":
                case '/admin/course/' + id:
                case "/admin/list-student":
                case '/admin/student/' + id:
                    {
                        if (localStorage.getItem("userRole") === "Admin") {
                            return true;
                        }
                        else {
                            _this.router.navigate(['/home']);
                        }
                    }
                default:
                    return false;
            }
        }));
    };
    AuthGuardService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [account_service_1.AccountService,
            router_1.Router])
    ], AuthGuardService);
    return AuthGuardService;
}());
exports.AuthGuardService = AuthGuardService;
//# sourceMappingURL=auth.service.js.map