"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablesModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ng2_table_1 = require("ng2-table/ng2-table");
var ag_grid_angular_1 = require("ag-grid-angular");
var ngx_datatable_1 = require("@swimlane/ngx-datatable");
var shared_module_1 = require("../../shared/shared.module");
var standard_component_1 = require("./standard/standard.component");
var extended_component_1 = require("./extended/extended.component");
var datatable_component_1 = require("./datatable/datatable.component");
var angulargrid_component_1 = require("./angulargrid/angulargrid.component");
var ngxdatatable_component_1 = require("./ngxdatatable/ngxdatatable.component");
var routes = [
    { path: 'standard', component: standard_component_1.StandardComponent },
    { path: 'extended', component: extended_component_1.ExtendedComponent },
    { path: 'datatable', component: datatable_component_1.DatatableComponent },
    { path: 'aggrid', component: angulargrid_component_1.AngulargridComponent },
    { path: 'ngxdatatable', component: ngxdatatable_component_1.NgxdatatableComponent }
];
var TablesModule = /** @class */ (function () {
    function TablesModule() {
    }
    TablesModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule.forChild(routes),
                ng2_table_1.Ng2TableModule,
                ag_grid_angular_1.AgGridModule.withComponents([angulargrid_component_1.AngulargridComponent]),
                ngx_datatable_1.NgxDatatableModule
            ],
            declarations: [
                standard_component_1.StandardComponent,
                extended_component_1.ExtendedComponent,
                datatable_component_1.DatatableComponent,
                angulargrid_component_1.AngulargridComponent,
                ngxdatatable_component_1.NgxdatatableComponent
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], TablesModule);
    return TablesModule;
}());
exports.TablesModule = TablesModule;
//# sourceMappingURL=tables.module.js.map