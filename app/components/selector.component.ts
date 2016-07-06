import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { Recipe } from '../entities/recipe';
import { RouteParams, Router } from '@angular/router-deprecated';

@Component({
    selector: 'selector',
    templateUrl: './app/templates/selector.html'
})
export class SelectorComponent implements OnInit {
    public CurrentRecipe : Recipe;

    constructor(
        private _dataService: DataService,
        private routeParams: RouteParams
    ) { }

    ngOnInit() { 
        this.CurrentRecipe = this._dataService.GetRandomRecipe();
        console.log('selector recipe', this.CurrentRecipe);
    }
}