import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { HttpService } from '../services/http.service';
import { Recipe } from '../entities/recipe';
import { RouteParams, Router } from '@angular/router-deprecated';

@Component({
    selector: 'selector',
    templateUrl: './app/templates/selector.html'
})
export class SelectorComponent implements OnInit {
    public CurrentRecipe: Recipe;
    public ResetRecipes: boolean;

    constructor(
        private _dataService: DataService,
        private routeParams: RouteParams,
        private _http: HttpService
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

    private _setCurrentRandomRecipe(recipes: Recipe[]) {
        var notShowed = recipes.filter(x => x.showed == false);
        console.log('not showed:', notShowed.length);
        
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

    private _randomRecipe() {
        var recipes = this._dataService.GetRecipes();
        if (recipes == null) {
            this._http.getAllRecipes().subscribe(
                data => {
                    this._dataService.SetRecipes(data);
                    this._setCurrentRandomRecipe(data);
                },
                error => console.log('error: ', error),
                () => console.log("Finished"));
        }
        else {
            this._setCurrentRandomRecipe(recipes);
        }
    }
}