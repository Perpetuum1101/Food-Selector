import { Injectable } from '@angular/core';
import { IEntity } from '../entities/ientity';
import { Recipe } from '../entities/recipe';
import { Ingredient, RecipeIngredient } from '../entities/ingredient';

@Injectable()
export class DataService {
    private _currentRecipe: Recipe;
    private _currentIngredient: Ingredient;
    private _recipes: Recipe[];
    private _recipesIngredients: RecipeIngredient[];
    private _ingredients: Ingredient[];

    SetRecipe(recipe: Recipe) {
        this._currentRecipe = recipe;
    }

    SetIngredient(ingredient: Ingredient) {
        this._currentIngredient = ingredient;
    }

    SetRecipes(recipes: Recipe[]) {
        this._recipes = recipes;
    }

    SetIngridients(ingredients: Ingredient[]) {
        this._ingredients = ingredients;
    }

    SetRecipesIngredients(recipesIngredients: RecipeIngredient[]) {
        console.log('set: ', recipesIngredients);
        this._recipesIngredients = recipesIngredients;
    }

    GetRecipe() {
        return this._currentRecipe;
    }

    GetIngredient() {
        return this._currentIngredient;
    }

    GetRecipes() {
        return this._recipes;
    }

    GetIngredients() {
        return this._ingredients;
    }

    GetRecipeById(id: number) {
        return this._filterById(this._recipes, id) as Recipe;
    }

    GetIngredientById(id: number) {
        return this._filterById(this._ingredients, id) as Ingredient;
    }

    GetRecipeIngredients(recipeId: number) {
        if (this._recipesIngredients == null) {
            return null;
        }

        var result = this._recipesIngredients.filter(x => x.recipeId == recipeId)
        result.forEach(element => {
            element.name = element.name = this.GetIngredientById(element.ingredientId).name;
        });

        return result;
    }

    private _filterById(entities: IEntity[], id: number) {
        if (entities === null) {
            return null;
        }

        var res = entities.filter(x => x.id == id);
        if (res.length > 0) {
            return res[0];
        }

        return null;
    }
}