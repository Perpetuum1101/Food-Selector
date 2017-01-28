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
var http_service_1 = require('../services/http.service');
var data_service_1 = require('../services/data.service');
var recipe_1 = require('../entities/recipe');
var router_1 = require('@angular/router');
var ingredient_1 = require('../entities/ingredient');
var DetailComponent = (function () {
    function DetailComponent(_httpService, _dataService, _router) {
        this._httpService = _httpService;
        this._dataService = _dataService;
        this._router = _router;
    }
    DetailComponent.prototype.ngOnInit = function () {
        var rec = this._dataService.GetRecipe();
        if (rec) {
            this.CurrentRecipe = rec;
            this.Ingredients = this._dataService.GetRecipeIngredients(rec.id);
            this._isNewRecipe = false;
        }
        else {
            this._isNewRecipe = true;
            this.CurrentRecipe = new recipe_1.Recipe();
            this.Ingredients = [];
        }
        if (this.Ingredients.length == 0) {
            this.Ingredients.push(new ingredient_1.RecipeIngredient());
        }
    };
    DetailComponent.prototype.add = function () {
        this.Ingredients.push(new ingredient_1.RecipeIngredient());
    };
    DetailComponent.prototype.remove = function (id) {
        this.Ingredients.splice(id, 1);
    };
    DetailComponent.prototype.trackIngredients = function (index, ingredient) { return ingredient.id; };
    DetailComponent.prototype.save = function () {
        var _this = this;
        this._httpService.saveOrUpdateRecipe(this.CurrentRecipe).subscribe(function (data) {
            _this._noErrors = true;
            console.log(data);
        }, function (error) { return console.log('error: ', error); }, function () {
            console.log("finished!");
            if (_this._noErrors) {
                _this._router.navigate(['/list']);
            }
        });
    };
    DetailComponent.prototype.back = function () {
        this._router.navigate(['/list']);
    };
    DetailComponent.prototype.onSubmit = function (form) {
        console.log('you submitted value:', form);
    };
    DetailComponent = __decorate([
        core_1.Component({
            templateUrl: './app/templates/details.html',
        }), 
        __metadata('design:paramtypes', [http_service_1.HttpService, data_service_1.DataService, router_1.Router])
    ], DetailComponent);
    return DetailComponent;
}());
exports.DetailComponent = DetailComponent;
//# sourceMappingURL=details.component.js.map