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
var DropdownComponent = (function () {
    function DropdownComponent() {
        this.statesComplex = [
            { key: 1, value: 'Alabama' }, { key: 2, value: 'Alaska' }, { key: 3, value: 'Arizona' },
            { key: 4, value: 'Arkansas' }, { key: 5, value: 'California' },
            { key: 6, value: 'Colorado' }, { key: 7, value: 'Connecticut' },
            { key: 8, value: 'Delaware' }, { key: 9, value: 'Florida' },
            { key: 10, value: 'Georgia' }, { key: 11, value: 'Hawaii' },
            { key: 12, value: 'Idaho' }, { key: 13, value: 'Illinois' },
            { key: 14, value: 'Indiana' }, { key: 15, value: 'Iowa' },
            { key: 16, value: 'Kansas' }, { key: 17, value: 'Kentucky' },
            { key: 18, value: 'Louisiana' }, { key: 19, value: 'Maine' },
            { key: 21, value: 'Maryland' }, { key: 22, value: 'Massachusetts' },
            { key: 23, value: 'Michigan' }, { key: 24, value: 'Minnesota' },
            { key: 25, value: 'Mississippi' }, { key: 26, value: 'Missouri' },
            { key: 27, value: 'Montana' }, { key: 28, value: 'Nebraska' },
            { key: 29, value: 'Nevada' }, { key: 30, value: 'New Hampshire' },
            { key: 31, value: 'New Jersey' }, { key: 32, value: 'New Mexico' },
            { key: 33, value: 'New York' }, { key: 34, value: 'North Dakota' },
            { key: 35, value: 'North Carolina' }, { key: 36, value: 'Ohio' },
            { key: 37, value: 'Oklahoma' }, { key: 38, value: 'Oregon' },
            { key: 39, value: 'Pennsylvania' }, { key: 40, value: 'Rhode Island' },
            { key: 41, value: 'South Carolina' }, { key: 42, value: 'South Dakota' },
            { key: 43, value: 'Tennessee' }, { key: 44, value: 'Texas' },
            { key: 45, value: 'Utah' }, { key: 46, value: 'Vermont' },
            { key: 47, value: 'Virginia' }, { key: 48, value: 'Washington' },
            { key: 49, value: 'West Virginia' }, { key: 50, value: 'Wisconsin' },
            { key: 51, value: 'Wyoming' }];
        this.disabled = false;
    }
    DropdownComponent.prototype.onClick = function () {
        if (this.click) {
            this.click();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Function)
    ], DropdownComponent.prototype, "click", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DropdownComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DropdownComponent.prototype, "label", void 0);
    DropdownComponent = __decorate([
        core_1.Component({
            selector: 'l-dropdown',
            templateUrl: 'app/lib/templates/dropdown.html'
        }), 
        __metadata('design:paramtypes', [])
    ], DropdownComponent);
    return DropdownComponent;
}());
exports.DropdownComponent = DropdownComponent;
//# sourceMappingURL=autocomplete.component.js.map