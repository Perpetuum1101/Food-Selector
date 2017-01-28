import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {IEntity} from "../entities/ientity";
import {Recipe, RecipeDTO} from "../entities/recipe";
import {Ingredient, IngredientDTO, RecipeIngredient, RecipeIngredientDTO} from "../entities/ingredient";

import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class HttpService {
    constructor(private _http: Http) { }
    temp: any;

    private _buildUrl(method: string, id: number) {
        var bookId = '573a1f5bd49a9d0300e3d242/';
        var baseUrl = 'https://api.fieldbook.com/v1/';
        var url = baseUrl + bookId + method;
        if (id == null) {
            return url;
        }

        return url + "/" + id;
    }

    private _buildOptions(content: boolean) {
        var creds = 'Basic ' + btoa('key-1:drbVrkWsuh8Vp06lEbGw');
        var headers = new Headers();
        headers.append('Accept', 'application/json');
        if (content) {
            headers.append('Content-Type', 'application/json');
        }
        headers.append('Authorization', creds);

        var options = new RequestOptions({ headers: headers });
        return options;
    }

    private _mapFromIngredientDTO(ing: IngredientDTO) {
        var i = new Ingredient();
        i.id = +ing.id.split(" ")[1];
        i.name = ing.name;

        return i;
    }

    private _mapFromIngredientsDTOs(ings: IngredientDTO[]) {
        var ingredients: Ingredient[] = [];

        ings.forEach(element => {
            var r = this._mapFromIngredientDTO(element);
            ingredients.push(r);
        });

        return ingredients;
    }

    private _mapFromRecipeIngridientsDTO(recIng: RecipeIngredientDTO){
        var ri = new RecipeIngredient();
        ri.amount = recIng.amount;
        ri.id = +recIng.id.split(" ")[1];
        ri.ingredientId = +recIng.ingridient[0].id.split(" ")[1];
        ri.recipeId = +recIng.recipe[0].id.split(" ")[1]; 

        return ri;
    }

    private _mapFromRecipeIngridientsDTOs(recIngs: RecipeIngredientDTO[]) {
         var result: RecipeIngredient[] = [];

        recIngs.forEach(element => {
            var r = this._mapFromRecipeIngridientsDTO(element);
            result.push(r);
        });

        return result;
    }

    private _mapFromRecipeDTO(rec: RecipeDTO) {
        var r = new Recipe();
        r.id = +rec.id.split(" ")[1];
        r.showed = rec.showed == 1;
        r.text = rec.text;
        r.title = rec.title;

        return r;
    }

    private _mapFromRecipeDTOs(recs: RecipeDTO[]) {
        var recipes: Recipe[] = [];
        recs.forEach(element => {
            var r = this._mapFromRecipeDTO(element);
            recipes.push(r);
        });

        return recipes;
    }

    private _mapToRecipeDTO(rec: Recipe) {
        var dto = new RecipeDTO();
        dto.showed = rec.showed ? 1 : 0;
        dto.text = rec.text;
        dto.title = rec.title;

        return dto;
    }

    private _mapToIngredientDTO(ing: Ingredient){
        var dto = new IngredientDTO();
        dto.name = ing.name;

        return dto;
    }

    private _postOrPatch(entity: IEntity, url: string, body: string, options: RequestOptions){
        if (entity.id) {
            return this._http.patch(url, body, options).map(res => res.json());
        }
        else {
            return this._http.post(url, body, options).map(res => res.json());
        }
    }

    getAllRecipes(): Observable<Recipe[]> {
        var url = this._buildUrl("recipes", null);
        var options = this._buildOptions(false);

        return this._http.get(url, options).map(res => this._mapFromRecipeDTOs(res.json()));
    }

    saveOrUpdateRecipe(recipe: Recipe) {

        var url = this._buildUrl("recipes", recipe.id);
        var options = this._buildOptions(true);

        var dto = this._mapToRecipeDTO(recipe);
        dto.date = new Date().toJSON().slice(0, 10);
        var body = JSON.stringify(dto);

        return this._postOrPatch(recipe, url, body, options);
    }

    saveOrUpdateIngredient(ingredient: Ingredient){
        var url = this._buildUrl("ingredients", ingredient.id);
        var options = this._buildOptions(true);

        var dto = this._mapToIngredientDTO(ingredient);
        var body = JSON.stringify(dto);

        return this._postOrPatch(ingredient, url, body, options);
    }

    remove(method: string, id: number){
        var url = this._buildUrl(method, id);
        var options = this._buildOptions(false);
        return this._http.delete(url, options);
    }

    getAllIngredients(): Observable<Ingredient[]> {
        var url = this._buildUrl("ingredients", null);
        var options = this._buildOptions(false);

        return this._http.get(url, options).map(res => this._mapFromIngredientsDTOs(res.json()));
    }

    getAllRecipesIngredients(): Observable<RecipeIngredient[]>{
        var url = this._buildUrl("recipes_ingredients", null);
        var options = this._buildOptions(false);

        return this._http.get(url, options).map(res => this._mapFromRecipeIngridientsDTOs(res.json()));
    } 
}