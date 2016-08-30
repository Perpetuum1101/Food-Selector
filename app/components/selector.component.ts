import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { HttpService } from '../services/http.service';
import { InitService } from '../services/init.service';
import { Recipe } from '../entities/recipe';
import { Ingredient, RecipeIngredient } from '../entities/ingredient';
import { ActivatedRoute, Router } from '@angular/router';

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

    private _initData() {
        this._setCurrentRandomRecipe();
        this.Ingredients = this._dataService.GetRecipeIngredients(this.CurrentRecipe.id);
        this.DataInitialized = true;
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