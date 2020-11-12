"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormsModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ngx_color_picker_1 = require("ngx-color-picker");
var ngx_select_ex_1 = require("ngx-select-ex");
var angular2_text_mask_1 = require("angular2-text-mask");
var ngx_chips_1 = require("ngx-chips");
var ng2_validation_1 = require("ng2-validation");
var ng2_file_upload_1 = require("ng2-file-upload");
var ng2_img_cropper_1 = require("ng2-img-cropper");
var shared_module_1 = require("../../shared/shared.module");
var standard_component_1 = require("./standard/standard.component");
var extended_component_1 = require("./extended/extended.component");
var validation_component_1 = require("./validation/validation.component");
var upload_component_1 = require("./upload/upload.component");
var cropper_component_1 = require("./cropper/cropper.component");
var routes = [
    { path: 'standard', component: standard_component_1.StandardComponent },
    { path: 'extended', component: extended_component_1.ExtendedComponent },
    { path: 'validation', component: validation_component_1.ValidationComponent },
    { path: 'upload', component: upload_component_1.UploadComponent },
    { path: 'cropper', component: cropper_component_1.CropperComponent }
];
var FormsModule = /** @class */ (function () {
    function FormsModule() {
    }
    FormsModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule.forChild(routes),
                ngx_select_ex_1.NgxSelectModule,
                ngx_color_picker_1.ColorPickerModule,
                angular2_text_mask_1.TextMaskModule,
                ngx_chips_1.TagInputModule,
                ng2_validation_1.CustomFormsModule,
                ng2_file_upload_1.FileUploadModule,
                ng2_img_cropper_1.ImageCropperModule
            ],
            providers: [ngx_color_picker_1.ColorPickerService],
            declarations: [
                standard_component_1.StandardComponent,
                extended_component_1.ExtendedComponent,
                validation_component_1.ValidationComponent,
                upload_component_1.UploadComponent,
                cropper_component_1.CropperComponent
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], FormsModule);
    return FormsModule;
}());
exports.FormsModule = FormsModule;
//# sourceMappingURL=forms.module.js.map