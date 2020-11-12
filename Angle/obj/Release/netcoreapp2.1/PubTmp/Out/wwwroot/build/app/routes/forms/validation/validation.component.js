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
exports.ValidationComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ng2_validation_1 = require("ng2-validation");
var ValidationComponent = /** @class */ (function () {
    function ValidationComponent(fb) {
        this.blackList = ['bad@email.com', 'some@mail.com', 'wrong@email.co'];
        var password = new forms_1.FormControl('', forms_1.Validators.required);
        var certainPassword = new forms_1.FormControl('', ng2_validation_1.CustomValidators.equalTo(password));
        // Model Driven validation
        this.valForm = fb.group({
            'sometext': [null, forms_1.Validators.required],
            'checkbox': [null, forms_1.Validators.required],
            'radio': ['', forms_1.Validators.required],
            'select': [null, forms_1.Validators.required],
            'digits': [null, forms_1.Validators.pattern('^[0-9]+$')],
            'minlen': [null, forms_1.Validators.minLength(6)],
            'maxlen': [null, forms_1.Validators.maxLength(10)],
            'email': [null, ng2_validation_1.CustomValidators.email],
            'url': [null, ng2_validation_1.CustomValidators.url],
            'date': [null, ng2_validation_1.CustomValidators.date],
            'number': [null, forms_1.Validators.compose([forms_1.Validators.required, ng2_validation_1.CustomValidators.number])],
            'alphanum': [null, forms_1.Validators.pattern('^[a-zA-Z0-9]+$')],
            'minvalue': [null, ng2_validation_1.CustomValidators.min(6)],
            'maxvalue': [null, ng2_validation_1.CustomValidators.max(10)],
            'minwords': [null, this.minWords(6)],
            'maxwords': [null, this.maxWords(10)],
            'minmaxlen': [null, ng2_validation_1.CustomValidators.rangeLength([6, 10])],
            'range': [null, ng2_validation_1.CustomValidators.range([10, 20])],
            'rangewords': [null, forms_1.Validators.compose([this.minWords(6), this.maxWords(10)])],
            'email_bl': [null, this.checkBlackList(this.blackList)],
            'passwordGroup': fb.group({
                password: password,
                confirmPassword: certainPassword
            })
        });
    }
    ValidationComponent.prototype.submitForm = function ($ev, value) {
        $ev.preventDefault();
        for (var c in this.valForm.controls) {
            this.valForm.controls[c].markAsTouched();
        }
        if (this.valForm.valid) {
            console.log('Valid!');
        }
        console.log(value);
    };
    ValidationComponent.prototype.minWords = function (checkValue) {
        return (function (control) {
            return (control.value || '').split(' ').length >= checkValue ? null : { 'minWords': control.value };
        });
    };
    ValidationComponent.prototype.maxWords = function (checkValue) {
        return (function (control) {
            return (control.value || '').split(' ').length <= checkValue ? null : { 'maxWords': control.value };
        });
    };
    ValidationComponent.prototype.checkBlackList = function (list) {
        return (function (control) {
            return list.indexOf(control.value) < 0 ? null : { 'blacklist': control.value };
        });
    };
    ValidationComponent.prototype.ngOnInit = function () {
    };
    ValidationComponent = __decorate([
        core_1.Component({
            selector: 'app-validation',
            templateUrl: './validation.component.html',
            styleUrls: ['./validation.component.scss']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder])
    ], ValidationComponent);
    return ValidationComponent;
}());
exports.ValidationComponent = ValidationComponent;
//# sourceMappingURL=validation.component.js.map