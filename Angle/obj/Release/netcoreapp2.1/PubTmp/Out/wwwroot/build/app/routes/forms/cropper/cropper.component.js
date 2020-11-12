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
exports.CropperComponent = void 0;
var core_1 = require("@angular/core");
var ng2_img_cropper_1 = require("ng2-img-cropper");
var CropperComponent = /** @class */ (function () {
    function CropperComponent() {
        this.name = 'Angular2';
        this.cropperSettings = new ng2_img_cropper_1.CropperSettings();
        this.cropperSettings.noFileInput = true;
        this.cropperSettings.width = 200;
        this.cropperSettings.height = 200;
        this.cropperSettings.croppedWidth = 200;
        this.cropperSettings.croppedHeight = 200;
        this.cropperSettings.canvasWidth = 460;
        this.cropperSettings.canvasHeight = 400;
        this.cropperSettings.minWidth = 100;
        this.cropperSettings.minHeight = 100;
        this.cropperSettings.cropperDrawSettings.strokeColor = 'rgba(0,0,0,.25)';
        this.cropperSettings.cropperDrawSettings.strokeWidth = 2;
        this.cropperSettings.rounded = false;
        this.data1 = {};
    }
    CropperComponent.prototype.setRoundedMethod = function (value) {
        this.cropperSettings.rounded = value;
    };
    CropperComponent.prototype.cropped = function (bounds) {
        console.log(bounds);
    };
    CropperComponent.prototype.fileChangeListener = function ($event) {
        var image = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            image.src = loadEvent.target.result;
            that.cropper.setImage(image);
        };
        myReader.readAsDataURL(file);
    };
    CropperComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.ViewChild('cropper', undefined),
        __metadata("design:type", ng2_img_cropper_1.ImageCropperComponent)
    ], CropperComponent.prototype, "cropper", void 0);
    CropperComponent = __decorate([
        core_1.Component({
            selector: 'app-cropper',
            templateUrl: './cropper.component.html',
            styleUrls: ['./cropper.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], CropperComponent);
    return CropperComponent;
}());
exports.CropperComponent = CropperComponent;
//# sourceMappingURL=cropper.component.js.map