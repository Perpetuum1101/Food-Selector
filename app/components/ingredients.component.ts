import { Component, OnInit } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';
import { Ingredient } from '../entities/ingredient';
import { HttpService } from '../services/http.service';
import { DataService } from '../services/data.service';
import {ListComponent} from './list.component';
import {ListModel, ListItem, ColumnType} from '../entities/listModel';

@Component({
    selector: 'ingredients',
    templateUrl: './app/templates/ingredients.html',
    directives: [ListComponent]
})
export class IngredientsComponent implements OnInit {
    private listModel: ListModel;
    CurrentIngredient: Ingredient;

    constructor(
        private _httpService: HttpService,
        private _dataService: DataService,
        private _router: Router) { }

    ngOnInit() {
        this.CurrentIngredient = new Ingredient();
        this.initList();
    }

    private _initListModel(data: Ingredient[]) {
        this.listModel = new ListModel();
        this.listModel.headers = ['Id', 'Name'];
        this.listModel.items = []
        data.forEach(element => {
            this.listModel.items.push([
                new ListItem(element.id.toString()),
                new ListItem(element.name)]);
        });
        this.listModel.deleteCallback = this.onDelete.bind(this);
        this.listModel.editCallback = this.onSelect.bind(this);
    }

    private _getIngredients() {
        this._httpService.getAllIngredients().subscribe(
            data => {
                this._dataService.SetIngridients(data);
                this._initListModel(data);
            },
            error => console.log('error: ', error),
            () => console.log("Finished")
        );
    }

    private _refreshList() {
        this.listModel = null;
        this._getIngredients();
    }

    initList() {
        var ingredients = this._dataService.GetIngredients();
        if (ingredients == null) {
            this._getIngredients();
        }
        else {
            this._initListModel(ingredients);
        }
    }

    onSelect(id: number) {
        var ing = this._dataService.GetIngredientById(id);
        if (ing) {
            this.CurrentIngredient = ing;
        }
        else {
            this.CurrentIngredient = new Ingredient();
        }

        document.getElementById("open-ingredient-modal").click();
    }

    onDelete(id: number) {
        this.listModel = null;
        this._httpService.remove("ingredients", id).subscribe(
            data => console.log(data),
            error => console.log('error: ', error),
            () => {
                console.log("Finished");
                this._refreshList();
            });
    }

    save() {
        this._httpService.saveOrUpdateIngredient(this.CurrentIngredient).subscribe(
            data => {
                console.log(data);
            },
            error => console.log('error: ', error),
            () => {
                console.log("finished!");
                document.getElementById("close-ingredient-modal").click();
                this._refreshList();
            }
        );
    }
}