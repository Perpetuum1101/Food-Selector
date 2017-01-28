import { Injectable } from '@angular/core';
import { IEntity } from '../entities/ientity';
import { Recipe } from '../entities/recipe';
import { Ingredient, RecipeIngredient } from '../entities/ingredient';
import { DataService } from './data.service';
import { HttpService } from './http.service';

@Injectable()
export class InitService {

    constructor(
        private _httpService: HttpService,
        private _dataService: DataService
    ) { }


    public initRecipes(onSuccess: Function) {
        return this._httpService.getAllRecipes().subscribe(
            data => {
                this._dataService.SetRecipes(data);
                this.initIngredients(onSuccess);
            },
            error => {
                console.log('error: ', error);
            },
            () => console.log("Finished")
        );
    }

    public initRecipeIngredients(onSuccess: Function) {
        this._httpService.getAllRecipesIngredients().subscribe(
            recIngredients => {
                this._dataService.SetRecipesIngredients(recIngredients);
                onSuccess();
            },
            error => console.log('error: ', error),
            () => console.log('finished'));
    }

    public initIngredients(onSuccess: Function) {
        this._httpService.getAllIngredients().subscribe(
            data => {
                this._dataService.SetIngridients(data);
                this.initRecipeIngredients(onSuccess);
            },
            error => console.log('error: ', error),
            () => console.log('finished')
        );
    }
}