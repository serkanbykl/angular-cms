"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var shared_module_1 = require("../../shared/shared.module");
var dashboardv1_component_1 = require("./dashboardv1/dashboardv1.component");
var dashboardv2_component_1 = require("./dashboardv2/dashboardv2.component");
var dashboardv3_component_1 = require("./dashboardv3/dashboardv3.component");
var routes = [
    { path: '', redirectTo: 'dashboard' },
    { path: 'v1', component: dashboardv1_component_1.Dashboardv1Component },
    { path: 'v2', component: dashboardv2_component_1.Dashboardv2Component },
    { path: 'v3', component: dashboardv3_component_1.Dashboardv3Component },
];
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule.forChild(routes)
            ],
            declarations: [
                dashboardv1_component_1.Dashboardv1Component,
                dashboardv2_component_1.Dashboardv2Component,
                dashboardv3_component_1.Dashboardv3Component
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map