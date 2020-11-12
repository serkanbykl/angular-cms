"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EcommerceModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var shared_module_1 = require("../../shared/shared.module");
var orders_component_1 = require("./orders/orders.component");
var orderview_component_1 = require("./orderview/orderview.component");
var products_component_1 = require("./products/products.component");
var productview_component_1 = require("./productview/productview.component");
var checkout_component_1 = require("./checkout/checkout.component");
var routes = [
    { path: 'orders', component: orders_component_1.OrdersComponent },
    { path: 'orderview', component: orderview_component_1.OrderviewComponent },
    { path: 'products', component: products_component_1.ProductsComponent },
    { path: 'productview', component: productview_component_1.ProductviewComponent },
    { path: 'checkout', component: checkout_component_1.CheckoutComponent }
];
var EcommerceModule = /** @class */ (function () {
    function EcommerceModule() {
    }
    EcommerceModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule.forChild(routes)
            ],
            declarations: [
                orders_component_1.OrdersComponent,
                orderview_component_1.OrderviewComponent,
                products_component_1.ProductsComponent,
                productview_component_1.ProductviewComponent,
                checkout_component_1.CheckoutComponent
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], EcommerceModule);
    return EcommerceModule;
}());
exports.EcommerceModule = EcommerceModule;
//# sourceMappingURL=ecommerce.module.js.map