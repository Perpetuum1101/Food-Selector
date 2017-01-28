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
var ButtonComponent = (function () {
    function ButtonComponent() {
        this.disabled = false;
        this.type = "button";
        this.icon = "leaf";
    }
    ButtonComponent.prototype.onClick = function () {
        if (this.click) {
            this.click();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Function)
    ], ButtonComponent.prototype, "click", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ButtonComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ButtonComponent.prototype, "icon", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ButtonComponent.prototype, "disabled", void 0);
    ButtonComponent = __decorate([
        core_1.Component({
            selector: 'l-button',
            templateUrl: 'app/lib/templates/button.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ButtonComponent);
    return ButtonComponent;
}());
exports.ButtonComponent = ButtonComponent;
//# sourceMappingURL=button.component.js.map