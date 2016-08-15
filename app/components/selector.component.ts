import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { HttpService } from '../services/http.service';
import { InitService } from '../services/init.service';
import { Recipe } from '../entities/recipe';
import { Ingredient, RecipeIngredient } from '../entities/ingredient';
import { RouteParams, Router } from '@angular/router-deprecated';

@Component({
    selector: 'selector',
    templateUrl: './app/templates/selector.html'
})
export class SelectorComponent implements OnInit {
    public CurrentRecipe: Recipe;
    public Ingredients: RecipeIngredient[];
    public ResetRecipes: boolean;
    public DataInitialized: boolean;

    constructor(
        private _dataService: DataService,
        private routeParams: RouteParams,
        private _http: HttpService,
        private _initService: InitService
    ) { }

    ngOnInit() {
        this._randomRecipe();
    }

    next() {
        this._randomRecipe();
    }

    reset() {
        this.ResetRecipes = false;
    }

    accept() {

    }

    private _setCurrentRandomRecipe() {
        var recipes = this._dataService.GetRecipes();
        var notShowed = recipes.filter(x => x.showed == false);

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
    }

    private _setCurrentIngredients() {
        var recIng = this._dataService.GetRecipesIngredients(this.CurrentRecipe.id);
        if (recIng != null) {
            this.Ingredients = [];
            recIng.forEach(element => {
                element.name = this._dataService.GetIngredientById(element.ingredientId).name;
                this.Ingredients.push(element);
            });
        }

        this.DataInitialized = true;
    }

    private _initData() {
        this._setCurrentRandomRecipe();
        this._setCurrentIngredients();
    }
    
    private _randomRecipe() {
        var recipes = this._dataService.GetRecipes();
        console.log('recipe present: ', (recipes != null));
        if (recipes == null) {
            this._initService.initRecipes(this._initData.bind(this));
        }
        else {
            this._initData();
        }
    }
}