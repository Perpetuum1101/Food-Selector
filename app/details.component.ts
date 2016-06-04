import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from './services/http.service';
import { Recipe } from './recipe';

@Component({
    selector: 'details-content',
    templateUrl: './app/templates/details.html'
})
export class DetailComponent implements OnInit {
    @Input()
    newRecipe: Recipe;
    
    @Input()
    Recipes: Recipe[];
    
    constructor(private _httpService: HttpService) { }

    ngOnInit() {
        this.newRecipe = new Recipe();
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