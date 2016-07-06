import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../services/http.service';
import { DataService } from '../services/data.service';
import {TestComponent} from './test.component';
import {RecipesComponent} from './recipes.component';
import {DetailComponent} from './details.component';
import {SelectorComponent} from './selector.component';
import { Recipe } from '../entities/recipe';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
    selector: 'my-app',
    templateUrl: './app/templates/app.html',
    directives: [TestComponent, RecipesComponent, DetailComponent, ROUTER_DIRECTIVES],
    providers: [HttpService, DataService]
})

@RouteConfig([
    { path: '/list', name: 'RecipeList', component: RecipesComponent, useAsDefault: true },
    { path: '/test', name: 'Test', component: TestComponent },
    { path: '/details', name: 'RecipeDetails', component: DetailComponent },
    { path: '/select', name: 'RecipeSelector', component: SelectorComponent }
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