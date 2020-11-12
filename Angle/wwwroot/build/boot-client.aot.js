"use strict";
/*!
 *
 * Angle - Bootstrap Admin Template
 *
 * Version: 4.2
 * Author: @themicon_co
 * Website: http://themicon.co
 * License: https://wrapbootstrap.com/help/licenses
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app/app.module");
require("./modernizr.js"); // 'npm run modernizr' to create this file
core_1.enableProdMode();
var a = platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
a.then(function () { window.appBootstrap && window.appBootstrap(); });
//# sourceMappingURL=boot-client.aot.js.map