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
var data_service_1 = require('../services/data.service');
var http_service_1 = require('../services/http.service');
var init_service_1 = require('../services/init.service');
var SelectorComponent = (function () {
    function SelectorComponent(_dataService, _http, _initService) {
        this._dataService = _dataService;
        this._http = _http;
        this._initService = _initService;
    }
    SelectorComponent.prototype.ngOnInit = function () {
        this._randomRecipe();
    };
    SelectorComponent.prototype.next = function () {
        this._randomRecipe();
    };
    SelectorComponent.prototype.reset = function () {
        this.ResetRecipes = false;
    };
    SelectorComponent.prototype.accept = function () {
    };
    SelectorComponent.prototype._setCurrentRandomRecipe = function () {
        var recipes = this._dataService.GetRecipes();
        var notShowed = recipes.filter(function (x) { return x.showed == false; });
        if (notShowed.length == 0) {
            this.ResetRecipes = true;
            return;
        }
        if (notShowed.length == 1) {
            this.CurrentRecipe = notShowed[0];
            return;
        }
        var index = Math.floor(Math.random() * notShowed.length);
        this.CurrentRecipe = notShowed[index];
    };
    SelectorComponent.prototype._initData = function () {
        this._setCurrentRandomRecipe();
        this.Ingredients = this._dataService.GetRecipeIngredients(this.CurrentRecipe.id);
        this.DataInitialized = true;
    };
    SelectorComponent.prototype._randomRecipe = function () {
        var recipes = this._dataService.GetRecipes();
        console.log('recipe present: ', (recipes != null));
        if (recipes == null) {
            this._initService.initRecipes(this._initData.bind(this));
        }
        else {
            this._initData();
        }
    };
    SelectorComponent = __decorate([
        core_1.Component({
            selector: 'selector',
            templateUrl: './app/templates/selector.html'
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, http_service_1.HttpService, init_service_1.InitService])
    ], SelectorComponent);
    return SelectorComponent;
}());
exports.SelectorComponent = SelectorComponent;
//# sourceMappingURL=selector.component.js.map