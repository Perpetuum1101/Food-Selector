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
var router_1 = require('@angular/router');
var http_service_1 = require('../services/http.service');
var data_service_1 = require('../services/data.service');
var init_service_1 = require('../services/init.service');
var listModel_1 = require('../entities/listModel');
var RecipesComponent = (function () {
    function RecipesComponent(_httpService, _dataService, _router, _initService) {
        this._httpService = _httpService;
        this._dataService = _dataService;
        this._router = _router;
        this._initService = _initService;
    }
    RecipesComponent.prototype.ngOnInit = function () {
        this.initList();
    };
    RecipesComponent.prototype._initListModel = function () {
        var _this = this;
        var recipes = this._dataService.GetRecipes();
        this.listModel = new listModel_1.ListModel();
        this.listModel.headers = ['Id', 'Title', 'Showed', 'Actions'];
        this.listModel.items = [];
        recipes.forEach(function (element) {
            _this.listModel.items.push([
                new listModel_1.ListItem(element.id.toString()),
                new listModel_1.ListItem(element.title),
                new listModel_1.ListItem(element.showed ? 'ok' : 'remove', listModel_1.ColumnType.Icon)]);
        });
        this.listModel.deleteCallback = this.onDelete.bind(this);
        this.listModel.editCallback = this.onSelect.bind(this);
    };
    RecipesComponent.prototype._refreshList = function () {
        this.listModel = null;
        this._initService.initRecipes(this._initListModel.bind(this));
    };
    RecipesComponent.prototype.initList = function () {
        var recipes = this._dataService.GetRecipes();
        if (recipes == null) {
            this._initService.initRecipes(this._initListModel.bind(this));
        }
        else {
            this._initListModel();
        }
    };
    RecipesComponent.prototype.onSelect = function (id) {
        var recipe = this._dataService.GetRecipeById(id);
        this._dataService.SetRecipe(recipe);
        this._router.navigate(['/details']);
    };
    RecipesComponent.prototype.onDelete = function (id) {
        var _this = this;
        this.listModel = null;
        this._httpService.remove('recipes', id).subscribe(function (data) { return console.log(data); }, function (error) { return console.log('error: ', error); }, function () {
            console.log("Finished");
            _this._refreshList();
        });
    };
    RecipesComponent = __decorate([
        core_1.Component({
            selector: 'recipes',
            templateUrl: './app/templates/recipes.html'
        }), 
        __metadata('design:paramtypes', [http_service_1.HttpService, data_service_1.DataService, router_1.Router, init_service_1.InitService])
    ], RecipesComponent);
    return RecipesComponent;
}());
exports.RecipesComponent = RecipesComponent;
//# sourceMappingURL=recipes.component.js.map