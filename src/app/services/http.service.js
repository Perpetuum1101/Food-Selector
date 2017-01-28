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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var recipe_1 = require("../entities/recipe");
var ingredient_1 = require("../entities/ingredient");
var http_2 = require('@angular/http');
var HttpService = (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype._buildUrl = function (method, id) {
        var bookId = '573a1f5bd49a9d0300e3d242/';
        var baseUrl = 'https://api.fieldbook.com/v1/';
        var url = baseUrl + bookId + method;
        if (id == null) {
            return url;
        }
        return url + "/" + id;
    };
    HttpService.prototype._buildOptions = function (content) {
        var creds = 'Basic ' + btoa('key-1:drbVrkWsuh8Vp06lEbGw');
        var headers = new http_2.Headers();
        headers.append('Accept', 'application/json');
        if (content) {
            headers.append('Content-Type', 'application/json');
        }
        headers.append('Authorization', creds);
        var options = new http_2.RequestOptions({ headers: headers });
        return options;
    };
    HttpService.prototype._mapFromIngredientDTO = function (ing) {
        var i = new ingredient_1.Ingredient();
        i.id = +ing.id.split(" ")[1];
        i.name = ing.name;
        return i;
    };
    HttpService.prototype._mapFromIngredientsDTOs = function (ings) {
        var _this = this;
        var ingredients = [];
        ings.forEach(function (element) {
            var r = _this._mapFromIngredientDTO(element);
            ingredients.push(r);
        });
        return ingredients;
    };
    HttpService.prototype._mapFromRecipeIngridientsDTO = function (recIng) {
        var ri = new ingredient_1.RecipeIngredient();
        ri.amount = recIng.amount;
        ri.id = +recIng.id.split(" ")[1];
        ri.ingredientId = +recIng.ingridient[0].id.split(" ")[1];
        ri.recipeId = +recIng.recipe[0].id.split(" ")[1];
        return ri;
    };
    HttpService.prototype._mapFromRecipeIngridientsDTOs = function (recIngs) {
        var _this = this;
        var result = [];
        recIngs.forEach(function (element) {
            var r = _this._mapFromRecipeIngridientsDTO(element);
            result.push(r);
        });
        return result;
    };
    HttpService.prototype._mapFromRecipeDTO = function (rec) {
        var r = new recipe_1.Recipe();
        r.id = +rec.id.split(" ")[1];
        r.showed = rec.showed == 1;
        r.text = rec.text;
        r.title = rec.title;
        return r;
    };
    HttpService.prototype._mapFromRecipeDTOs = function (recs) {
        var _this = this;
        var recipes = [];
        recs.forEach(function (element) {
            var r = _this._mapFromRecipeDTO(element);
            recipes.push(r);
        });
        return recipes;
    };
    HttpService.prototype._mapToRecipeDTO = function (rec) {
        var dto = new recipe_1.RecipeDTO();
        dto.showed = rec.showed ? 1 : 0;
        dto.text = rec.text;
        dto.title = rec.title;
        return dto;
    };
    HttpService.prototype._mapToIngredientDTO = function (ing) {
        var dto = new ingredient_1.IngredientDTO();
        dto.name = ing.name;
        return dto;
    };
    HttpService.prototype._postOrPatch = function (entity, url, body, options) {
        if (entity.id) {
            return this._http.patch(url, body, options).map(function (res) { return res.json(); });
        }
        else {
            return this._http.post(url, body, options).map(function (res) { return res.json(); });
        }
    };
    HttpService.prototype.getAllRecipes = function () {
        var _this = this;
        var url = this._buildUrl("recipes", null);
        var options = this._buildOptions(false);
        return this._http.get(url, options).map(function (res) { return _this._mapFromRecipeDTOs(res.json()); });
    };
    HttpService.prototype.saveOrUpdateRecipe = function (recipe) {
        var url = this._buildUrl("recipes", recipe.id);
        var options = this._buildOptions(true);
        var dto = this._mapToRecipeDTO(recipe);
        dto.date = new Date().toJSON().slice(0, 10);
        var body = JSON.stringify(dto);
        return this._postOrPatch(recipe, url, body, options);
    };
    HttpService.prototype.saveOrUpdateIngredient = function (ingredient) {
        var url = this._buildUrl("ingredients", ingredient.id);
        var options = this._buildOptions(true);
        var dto = this._mapToIngredientDTO(ingredient);
        var body = JSON.stringify(dto);
        return this._postOrPatch(ingredient, url, body, options);
    };
    HttpService.prototype.remove = function (method, id) {
        var url = this._buildUrl(method, id);
        var options = this._buildOptions(false);
        return this._http.delete(url, options);
    };
    HttpService.prototype.getAllIngredients = function () {
        var _this = this;
        var url = this._buildUrl("ingredients", null);
        var options = this._buildOptions(false);
        return this._http.get(url, options).map(function (res) { return _this._mapFromIngredientsDTOs(res.json()); });
    };
    HttpService.prototype.getAllRecipesIngredients = function () {
        var _this = this;
        var url = this._buildUrl("recipes_ingredients", null);
        var options = this._buildOptions(false);
        return this._http.get(url, options).map(function (res) { return _this._mapFromRecipeIngridientsDTOs(res.json()); });
    };
    HttpService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
//# sourceMappingURL=http.service.js.map