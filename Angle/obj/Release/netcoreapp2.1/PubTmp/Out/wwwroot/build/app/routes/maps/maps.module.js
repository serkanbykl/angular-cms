"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapsModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var core_2 = require("@agm/core");
var shared_module_1 = require("../../shared/shared.module");
var google_component_1 = require("./google/google.component");
var vector_component_1 = require("./vector/vector.component");
var routes = [
    { path: 'google', component: google_component_1.GoogleComponent },
    { path: 'vector', component: vector_component_1.VectorComponent }
];
var MapsModule = /** @class */ (function () {
    function MapsModule() {
    }
    MapsModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule.forChild(routes),
                core_2.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyBNs42Rt_CyxAqdbIBK0a5Ut83QiauESPA'
                })
            ],
            declarations: [
                google_component_1.GoogleComponent,
                vector_component_1.VectorComponent
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], MapsModule);
    return MapsModule;
}());
exports.MapsModule = MapsModule;
//# sourceMappingURL=maps.module.js.map