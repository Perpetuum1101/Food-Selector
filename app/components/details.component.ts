import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../services/http.service';
import { DataService } from '../services/data.service';
import { Recipe } from '../entities/recipe';
import { RouteParams, Router } from '@angular/router-deprecated';
import { Ingredient, RecipeIngredient } from '../entities/ingredient';

@Component({
    templateUrl: './app/templates/details.html'
})

export class DetailComponent implements OnInit {

    public CurrentRecipe: Recipe;
    public Ingredients: Recipe
    private _isNewRecipe: boolean;
    private _noErrors: boolean;

    constructor(
        private _httpService: HttpService,
        private _dataService: DataService,
        private _router: Router,
        private routeParams: RouteParams) { }

    ngOnInit() {
        var rec = this._dataService.GetRecipe();
        var recIngredients = this._dataService.GetRecipesIngredients(rec.id);
        if (recIngredients == null) {
            this._httpService.getAllRecipesIngredients().subscribe(
                data => {
                    this._dataService.SetRecipesIngredients(data);
                },
                error => console.log('error: ', error),
                () => console.log("finished!")
            );
        }

        console.log('recipe', rec);
        if (rec) {
            this.CurrentRecipe = rec;
            this._isNewRecipe = false;
        }
        else {
            this._isNewRecipe = true;
            this.CurrentRecipe = new Recipe();
        }
    }

    save() {
        this._httpService.saveOrUpdateRecipe(this.CurrentRecipe).subscribe(
            data => {
                this._noErrors = true;
                console.log(data);
            },
            error => console.log('error: ', error),
            () => {
                console.log("finished!");
                if (this._noErrors) {
                    this._router.navigate(['RecipeList']);
                }
            }
        );
    }

    back() {
        this._router.navigate(['RecipeList']);
    }

    onSubmit(form: any): void {
        console.log('you submitted value:', form);
    }
}