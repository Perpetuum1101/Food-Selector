import { Component, OnInit } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';
import { Recipe } from '../entities/recipe';
import { HttpService } from '../services/http.service';
import { DataService } from '../services/data.service';
import {ListComponent} from './list.component';
import {ListModel, ListItem, ColumnType} from '../entities/listModel';

@Component({
    selector: 'recipes',
    templateUrl: './app/templates/recipes.html',
    directives: [ListComponent]
})
export class RecipesComponent implements OnInit {
    private listModel: ListModel;

    constructor(
        private _httpService: HttpService,
        private _dataService: DataService,
        private _router: Router) { }

    ngOnInit() {
        this.initList();
    }

    private _initListModel(data: Recipe[]) {
        this.listModel = new ListModel();
        this.listModel.headers = ['Id', 'Title', 'Showed', 'Actions'];
        this.listModel.items = []
        data.forEach(element => {
            this.listModel.items.push([
                new ListItem(element.id.toString()),
                new ListItem(element.title),
                new ListItem(element.showed ? 'ok' : 'remove', ColumnType.Icon)]);
        });
        this.listModel.deleteCallback = this.onDelete.bind(this);
        this.listModel.editCallback = this.onSelect.bind(this);
    }

    private _getRecipes() {
        this._httpService.getAllRecipes().subscribe(
            data => {
                this._dataService.SetRecipes(data);
                this._initListModel(data);
            },
            error => console.log('error: ', error),
            () => console.log("Finished")
        );
    }

    private _refreshList(){
        this.listModel = null;
        this._getRecipes();
    }

    initList() {
        var recipes = this._dataService.GetRecipes();
        if (recipes == null) {
            this._getRecipes();
        }
        else {
            this._initListModel(recipes);
        }
    }

    onSelect(id: number) {
        var recipe = this._dataService.GetRecipeById(id);
        this._dataService.SetRecipe(recipe);
        this._router.navigate(['RecipeDetails']);
    }

    onDelete(id: number) {
        this.listModel = null;
        this._httpService.remove('recipes', id).subscribe(
            data => console.log(data),
            error => console.log('error: ', error),
            () => {
                console.log("Finished");
                this._refreshList();
            });
    }
}