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
var DataService = (function () {
    function DataService() {
    }
    DataService.prototype.SetRecipe = function (recipe) {
        this._currentRecipe = recipe;
    };
    DataService.prototype.SetIngredient = function (ingredient) {
        this._currentIngredient = ingredient;
    };
    DataService.prototype.SetRecipes = function (recipes) {
        this._recipes = recipes;
    };
    DataService.prototype.SetIngridients = function (ingredients) {
        this._ingredients = ingredients;
    };
    DataService.prototype.SetRecipesIngredients = function (recipesIngredients) {
        console.log('set: ', recipesIngredients);
        this._recipesIngredients = recipesIngredients;
    };
    DataService.prototype.GetRecipe = function () {
        return this._currentRecipe;
    };
    DataService.prototype.GetIngredient = function () {
        return this._currentIngredient;
    };
    DataService.prototype.GetRecipes = function () {
        return this._recipes;
    };
    DataService.prototype.GetIngredients = function () {
        return this._ingredients;
    };
    DataService.prototype.GetRecipeById = function (id) {
        return this._filterById(this._recipes, id);
    };
    DataService.prototype.GetIngredientById = function (id) {
        return this._filterById(this._ingredients, id);
    };
    DataService.prototype.GetRecipeIngredients = function (recipeId) {
        var _this = this;
        if (this._recipesIngredients == null) {
            return null;
        }
        var result = this._recipesIngredients.filter(function (x) { return x.recipeId == recipeId; });
        result.forEach(function (element) {
            element.name = element.name = _this.GetIngredientById(element.ingredientId).name;
        });
        return result;
    };
    DataService.prototype._filterById = function (entities, id) {
        if (entities === null) {
            return null;
        }
        var res = entities.filter(function (x) { return x.id == id; });
        if (res.length > 0) {
            return res[0];
        }
        return null;
    };
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map