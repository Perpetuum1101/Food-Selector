import { Component, OnInit, Input } from '@angular/core';
import { Ingredient, RecipeIngredient } from '../entities/ingredient';
import { DataService } from '../services/data.service';

@Component({
    selector: 'recipe-ngredient',
    templateUrl: '../templates/recipe-ingredient.html',
})
export class RecipeIngredientComponent implements OnInit {
    currentIngredient: Ingredient;
    ingredients: Ingredient[];

    @Input() Ingredient: RecipeIngredient;
    constructor(private _dataService: DataService) { }

    ngOnInit() { 
        this.ingredients = this._dataService.GetIngredients();
    }
}