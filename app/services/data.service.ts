import { Injectable } from '@angular/core';
import { Recipe } from '../entities/recipe';

@Injectable()
export class DataService {
    private _currentRecipe: Recipe;
    private _recipes: Recipe[];

    SetRecipe(recipe: Recipe) {
        this._currentRecipe = recipe;
        console.log('setting recipe', this._currentRecipe);
    }

    SetRecipes(recipes: Recipe[]) {
        this._recipes = recipes;
    }

    GetRecipe() {
        console.log('retrieving recipe', this._currentRecipe);
        return this._currentRecipe;
    }

    GetRecipes() {
        return this._recipes;
    }

    GetRecipeById(id: number) {
        if (this._recipes === null) {
            return null;
        }
        var res = this._recipes.filter(x => x.id == id);
        if (res.length > 0) {
            return res[0];
        }

        return null;
    }
}