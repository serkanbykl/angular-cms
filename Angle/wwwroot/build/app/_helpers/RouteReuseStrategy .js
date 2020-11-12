"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomReuseStrategy = void 0;
var CustomReuseStrategy = /** @class */ (function () {
    function CustomReuseStrategy() {
        this.handlers = {};
    }
    CustomReuseStrategy.prototype.shouldDetach = function (route) {
        //console.debug('CustomReuseStrategy:shouldDetach', route);
        return !!route.data && !!route.data.shouldDetach;
    };
    CustomReuseStrategy.prototype.store = function (route, handle) {
        //console.debug('CustomReuseStrategy:store', route, handle);
        this.handlers[route.routeConfig.path] = handle;
    };
    CustomReuseStrategy.prototype.shouldAttach = function (route) {
        //console.debug('CustomReuseStrategy:shouldAttach', route);
        return !!route.routeConfig && !!this.handlers[route.routeConfig.path];
    };
    CustomReuseStrategy.prototype.retrieve = function (route) {
        //console.debug('CustomReuseStrategy:retrieve', route);
        if (!route.routeConfig) {
            return null;
        }
        return this.handlers[route.routeConfig.path];
    };
    CustomReuseStrategy.prototype.shouldReuseRoute = function (future, curr) {
        //console.debug('CustomReuseStrategy:shouldReuseRoute', future, curr);
        return future.routeConfig === curr.routeConfig;
    };
    return CustomReuseStrategy;
}());
exports.CustomReuseStrategy = CustomReuseStrategy;
//# sourceMappingURL=RouteReuseStrategy .js.map