import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from './services/http.service';
import { Recipe } from './recipe';

@Component({
    selector: 'test-content',
    templateUrl: './app/templates/test-content.html'
})

export class TestComponent implements OnInit {
    public Recipes: Recipe[];
    @Input()
    newRecipe: Recipe;

    ngOnInit() {
        this.newRecipe = new Recipe();
    }

    constructor(private _httpService: HttpService) { }

    getData(data: Recipe[]) {
        this.Recipes = data;
        console.log(this.Recipes);
    }

    onTestGet() {
        this._httpService.getAllRecipes().subscribe(
            data => this.getData(data),
            error => console.log('error: ', error),
            () => console.log("Finished")
        );
    }

    onTestPost() {
        this._httpService.addRecipe(this.newRecipe).subscribe(
            data => console.log(data),
            error => console.log('error: ', error),
            () => console.log("Finished")
        );
    }

    onTestUpdate() {
        this._httpService.updateRecipe(this.newRecipe, this.Recipes[0].id).subscribe(
            data => console.log(data),
            error => console.log('error: ', error),
            () => console.log("Finished")
        );
    }

    onTestDelete(item: Recipe) {
        this._httpService.deleteRecipe(item.id).subscribe(
            data => console.log(data),
            error => console.log('error: ', error),
            () => {
                console.log("Finished");
                var index = this.Recipes.indexOf(item);
                this.Recipes.splice(index, 1);
            });
    }

}