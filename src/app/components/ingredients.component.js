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
var ingredient_1 = require('../entities/ingredient');
var http_service_1 = require('../services/http.service');
var data_service_1 = require('../services/data.service');
var init_service_1 = require('../services/init.service');
var listModel_1 = require('../entities/listModel');
var IngredientsComponent = (function () {
    function IngredientsComponent(_httpService, _dataService, _initService, _router) {
        this._httpService = _httpService;
        this._dataService = _dataService;
        this._initService = _initService;
        this._router = _router;
    }
    IngredientsComponent.prototype.ngOnInit = function () {
        this.CurrentIngredient = new ingredient_1.Ingredient();
        this.initList();
    };
    IngredientsComponent.prototype._initListModel = function () {
        var _this = this;
        var ingredients = this._dataService.GetIngredients();
        this.listModel = new listModel_1.ListModel();
        this.listModel.headers = ['Id', 'Name'];
        this.listModel.items = [];
        ingredients.forEach(function (element) {
            _this.listModel.items.push([
                new listModel_1.ListItem(element.id.toString()),
                new listModel_1.ListItem(element.name)]);
        });
        this.listModel.deleteCallback = this.onDelete.bind(this);
        this.listModel.editCallback = this.onSelect.bind(this);
    };
    IngredientsComponent.prototype._getIngredients = function () {
        this._initService.initRecipes(this._initListModel.bind(this));
    };
    IngredientsComponent.prototype._refreshList = function () {
        this.listModel = null;
        this._getIngredients();
    };
    IngredientsComponent.prototype.initList = function () {
        var ingredients = this._dataService.GetIngredients();
        if (ingredients == null) {
            this._initService.initRecipes(this._initListModel.bind(this));
        }
        else {
            this._initListModel();
        }
    };
    IngredientsComponent.prototype.onSelect = function (id) {
        var ing = this._dataService.GetIngredientById(id);
        if (ing) {
            this.CurrentIngredient = ing;
        }
        else {
            this.CurrentIngredient = new ingredient_1.Ingredient();
        }
        document.getElementById("open-ingredient-modal").click();
    };
    IngredientsComponent.prototype.onDelete = function (id) {
        var _this = this;
        this.listModel = null;
        this._httpService.remove("ingredients", id).subscribe(function (data) { return console.log(data); }, function (error) { return console.log('error: ', error); }, function () {
            console.log("Finished");
            _this._refreshList();
        });
    };
    IngredientsComponent.prototype.save = function () {
        var _this = this;
        this._httpService.saveOrUpdateIngredient(this.CurrentIngredient).subscribe(function (data) {
            console.log(data);
        }, function (error) { return console.log('error: ', error); }, function () {
            console.log("finished!");
            document.getElementById("close-ingredient-modal").click();
            _this._refreshList();
        });
    };
    IngredientsComponent = __decorate([
        core_1.Component({
            selector: 'ingredients',
            templateUrl: './app/templates/ingredients.html'
        }), 
        __metadata('design:paramtypes', [http_service_1.HttpService, data_service_1.DataService, init_service_1.InitService, router_1.Router])
    ], IngredientsComponent);
    return IngredientsComponent;
}());
exports.IngredientsComponent = IngredientsComponent;
//# sourceMappingURL=ingredients.component.js.map