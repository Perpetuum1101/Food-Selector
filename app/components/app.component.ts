import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../services/http.service';
import { DataService } from '../services/data.service';
import {RecipesComponent} from './recipes.component';
import {IngredientsComponent} from './ingredients.component'
import {DetailComponent} from './details.component';
import {SelectorComponent} from './selector.component';
import { Recipe } from '../entities/recipe';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
    selector: 'my-app',
    templateUrl: './app/templates/app.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [HttpService, DataService]
})

@RouteConfig([
    { path: '/select', name: 'RecipeSelector', component: SelectorComponent, useAsDefault: true },
    { path: '/list', name: 'RecipeList', component: RecipesComponent },
    { path: '/ingredients', name: 'IngredientsList', component: IngredientsComponent },
    { path: '/details', name: 'RecipeDetails', component: DetailComponent }
])

export class AppComponent implements OnInit {
    public Title: string;
    public Recipes: Recipe[];

    constructor() {
        console.log("app constructor call...");
    }

    ngOnInit() {
        console.log("app init call...")
        this.Title = "Food Selector";
    }
}