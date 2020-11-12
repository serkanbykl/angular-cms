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
exports.TeamviewerComponent = void 0;
var core_1 = require("@angular/core");
var colors_service_1 = require("../../../shared/colors/colors.service");
var TeamviewerComponent = /** @class */ (function () {
    function TeamviewerComponent(colors) {
        this.colors = colors;
        this.sparkOptionsInfo = {
            type: 'pie',
            sliceColors: [this.colors.byName('gray-lighter'), this.colors.byName('info')],
            height: 24
        };
        this.sparkOptionsWarning = {
            type: 'pie',
            sliceColors: [this.colors.byName('gray-lighter'), this.colors.byName('warning')],
            height: 24
        };
        this.sparkOptionsSuccess = {
            type: 'pie',
            sliceColors: [this.colors.byName('gray-lighter'), this.colors.byName('success')],
            height: 24
        };
        this.sparkOptionsDanger = {
            type: 'pie',
            sliceColors: [this.colors.byName('gray-lighter'), this.colors.byName('danger')],
            height: 24
        };
    }
    TeamviewerComponent.prototype.ngOnInit = function () {
    };
    TeamviewerComponent = __decorate([
        core_1.Component({
            selector: 'app-teamviewer',
            templateUrl: './teamviewer.component.html',
            styleUrls: ['./teamviewer.component.scss']
        }),
        __metadata("design:paramtypes", [colors_service_1.ColorsService])
    ], TeamviewerComponent);
    return TeamviewerComponent;
}());
exports.TeamviewerComponent = TeamviewerComponent;
//# sourceMappingURL=teamviewer.component.js.map