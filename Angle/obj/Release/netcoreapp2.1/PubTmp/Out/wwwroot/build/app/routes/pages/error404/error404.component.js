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
exports.Error404Component = void 0;
var core_1 = require("@angular/core");
var settings_service_1 = require("../../../core/settings/settings.service");
var Error404Component = /** @class */ (function () {
    function Error404Component(settings) {
        this.settings = settings;
    }
    Error404Component.prototype.ngOnInit = function () {
    };
    Error404Component = __decorate([
        core_1.Component({
            selector: 'app-error404',
            templateUrl: './error404.component.html',
            styleUrls: ['./error404.component.scss']
        }),
        __metadata("design:paramtypes", [settings_service_1.SettingsService])
    ], Error404Component);
    return Error404Component;
}());
exports.Error404Component = Error404Component;
//# sourceMappingURL=error404.component.js.map