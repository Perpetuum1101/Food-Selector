import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../entities/recipe';
import { HttpService } from '../services/http.service';
import { DataService } from '../services/data.service';
import { InitService } from '../services/init.service';
import { ListComponent } from './list.component';
import { ListModel, ListItem, ColumnType } from '../entities/listModel';

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
        private _router: Router,
        private _initService: InitService) { }

    ngOnInit() {
        this.initList();
    }

    private _initListModel() {
        var recipes = this._dataService.GetRecipes();
        this.listModel = new ListModel();
        this.listModel.headers = ['Id', 'Title', 'Showed', 'Actions'];
        this.listModel.items = []
        recipes.forEach(element => {
            this.listModel.items.push([
                new ListItem(element.id.toString()),
                new ListItem(element.title),
                new ListItem(element.showed ? 'ok' : 'remove', ColumnType.Icon)]);
        });
        this.listModel.deleteCallback = this.onDelete.bind(this);
        this.listModel.editCallback = this.onSelect.bind(this);
    }

    private _refreshList() {
        this.listModel = null;
        this._initService.initRecipes(this._initListModel.bind(this));
    }

    initList() {
        var recipes = this._dataService.GetRecipes();
        if (recipes == null) {
            this._initService.initRecipes(this._initListModel.bind(this));
        }
        else {
            this._initListModel();
        }
    }

    onSelect(id: number) {
        var recipe = this._dataService.GetRecipeById(id);
        this._dataService.SetRecipe(recipe);
        this._router.navigate(['/details']);
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