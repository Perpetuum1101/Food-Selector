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
var core_1 = require('@angular/core');
var InputComponent = (function () {
    function InputComponent() {
        this.modelChange = new core_1.EventEmitter();
        this.label = "no label";
        this.required = false;
    }
    InputComponent.prototype.onChange = function (newValue) {
        this.model = newValue;
        this.modelChange.emit(this.model);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], InputComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], InputComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], InputComponent.prototype, "model", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], InputComponent.prototype, "modelChange", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], InputComponent.prototype, "required", void 0);
    InputComponent = __decorate([
        core_1.Component({
            selector: 'l-input',
            templateUrl: 'app/lib/templates/input.html'
        }), 
        __metadata('design:paramtypes', [])
    ], InputComponent);
    return InputComponent;
}());
exports.InputComponent = InputComponent;
//# sourceMappingURL=input.component.js.map