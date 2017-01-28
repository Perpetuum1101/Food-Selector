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
var data_service_1 = require('./data.service');
var http_service_1 = require('./http.service');
var InitService = (function () {
    function InitService(_httpService, _dataService) {
        this._httpService = _httpService;
        this._dataService = _dataService;
    }
    InitService.prototype.initRecipes = function (onSuccess) {
        var _this = this;
        return this._httpService.getAllRecipes().subscribe(function (data) {
            _this._dataService.SetRecipes(data);
            _this.initIngredients(onSuccess);
        }, function (error) {
            console.log('error: ', error);
        }, function () { return console.log("Finished"); });
    };
    InitService.prototype.initRecipeIngredients = function (onSuccess) {
        var _this = this;
        this._httpService.getAllRecipesIngredients().subscribe(function (recIngredients) {
            _this._dataService.SetRecipesIngredients(recIngredients);
            onSuccess();
        }, function (error) { return console.log('error: ', error); }, function () { return console.log('finished'); });
    };
    InitService.prototype.initIngredients = function (onSuccess) {
        var _this = this;
        this._httpService.getAllIngredients().subscribe(function (data) {
            _this._dataService.SetIngridients(data);
            _this.initRecipeIngredients(onSuccess);
        }, function (error) { return console.log('error: ', error); }, function () { return console.log('finished'); });
    };
    InitService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_service_1.HttpService, data_service_1.DataService])
    ], InitService);
    return InitService;
}());
exports.InitService = InitService;
//# sourceMappingURL=init.service.js.map