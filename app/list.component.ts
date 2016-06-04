import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';
import { Recipe } from './recipe';

@Component({
    selector: 'list-content',
    templateUrl: './app/templates/list.html'
})
export class ListComponent implements OnInit {
    public Recipes: Recipe[];
    
    constructor(private _httpService: HttpService) { }

    ngOnInit() { 
        this._httpService.getAllRecipes().subscribe(
            data => this.Recipes = data,
            error => console.log('error: ', error),
            () => console.log("Finished")
        );
    }
}