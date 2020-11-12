"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartsModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ng2_charts_1 = require("ng2-charts/ng2-charts");
var shared_module_1 = require("../../shared/shared.module");
var chartjs_component_1 = require("./chartjs/chartjs.component");
var flot_component_1 = require("./flot/flot.component");
var radial_component_1 = require("./radial/radial.component");
var routes = [
    { path: 'flot', component: flot_component_1.FlotComponent },
    { path: 'radial', component: radial_component_1.RadialComponent },
    { path: 'chartjs', component: chartjs_component_1.ChartjsComponent }
];
var ChartsModule = /** @class */ (function () {
    function ChartsModule() {
    }
    ChartsModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule.forChild(routes),
                ng2_charts_1.ChartsModule
            ],
            declarations: [
                flot_component_1.FlotComponent,
                radial_component_1.RadialComponent,
                chartjs_component_1.ChartjsComponent
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], ChartsModule);
    return ChartsModule;
}());
exports.ChartsModule = ChartsModule;
//# sourceMappingURL=charts.module.js.map