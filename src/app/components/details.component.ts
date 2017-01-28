import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../services/http.service';
import { DataService } from '../services/data.service';
import { Recipe } from '../entities/recipe';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredient, RecipeIngredient } from '../entities/ingredient';
import { RecipeIngredientComponent } from './recipe-ingredient.component';

@Component({
    templateUrl: '../templates/details.html',
})

export class DetailComponent implements OnInit {

    public CurrentRecipe: Recipe;
    public Ingredients: RecipeIngredient[];
    private _isNewRecipe: boolean;
    private _noErrors: boolean;

    constructor(
        private _httpService: HttpService,
        private _dataService: DataService,
        private _router: Router) { }

    ngOnInit() {
        var rec = this._dataService.GetRecipe();
   
        if (rec) {
            this.CurrentRecipe = rec;
            this.Ingredients = this._dataService.GetRecipeIngredients(rec.id);
            this._isNewRecipe = false;
        }
        else {
            this._isNewRecipe = true;
            this.CurrentRecipe = new Recipe();
            this.Ingredients = [];
        }

        if(this.Ingredients.length == 0){
            this.Ingredients.push(new RecipeIngredient());
        }
    }

    add(){
        this.Ingredients.push(new RecipeIngredient());
    }

    remove(id: number){
        this.Ingredients.splice(id, 1);
    }

    trackIngredients(index: number, ingredient: RecipeIngredient) { return ingredient.id; }

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
                    this._router.navigate(['/list']);
                }
            }
        );
    }

    back() {
        this._router.navigate(['/list']);
    }

    onSubmit(form: any): void {
        console.log('you submitted value:', form);
    }
}