import { Component, OnInit, Input } from '@angular/core';
import { Ingredient, RecipeIngredient } from '../entities/ingredient';

@Component({
    selector: 'recipe-ngredient',
    templateUrl: './app/templates/recipe-ingredient.html',
})
export class RecipeIngredientComponent implements OnInit {
    @Input() Ingredient: RecipeIngredient;
    constructor() { }

    ngOnInit() { }
}