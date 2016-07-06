import { Injectable } from '@angular/core';
import { Recipe } from '../entities/recipe';

@Injectable()
export class DataService {
    private _currentRecipe : Recipe;
    private _recipes : Recipe[];
    
    constructor() { }

    private _filter(showed: boolean){
        return this._recipes.filter(x => x.showed == showed);
    }
    
    SetRecipe(recipe: Recipe){
        this._currentRecipe = recipe;
        console.log('setting recipe', this._currentRecipe);
    }

    SetRecipes(recipes: Recipe[]){
        this._recipes = recipes;
    }
    
    GetRecipe(){
        console.log('retrieving recipe', this._currentRecipe);
        return this._currentRecipe;
    }

    GetRecipes(){
        return this._recipes;
    }

    GetRecipeById(id: number){
        var res = this._recipes.filter(x => x.id == id);
        if(res.length > 0){
            return res[0];
        }

        return null;
    }

    GetRandomRecipe(){
        var notShowed = this._filter(false);
        var index = Math.floor(Math.random()*notShowed.length);
        return notShowed[index];
    }
}