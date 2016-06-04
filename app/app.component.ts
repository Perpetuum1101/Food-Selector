import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from './services/http.service';
import {TAB_DIRECTIVES} from 'ng2-bootstrap/components/tabs';
import {TestComponent} from './test.component';
import {ListComponent} from './list.component';
import {DetailComponent} from './details.component';
import { Recipe } from './recipe';

@Component({
    selector: 'my-app',
    templateUrl: './app/templates/app.html',
    directives: [TAB_DIRECTIVES, TestComponent, ListComponent, DetailComponent],
    providers: [HttpService]
})
export class AppComponent implements OnInit {
    public Title: string;
    public Recipes: Recipe[];

    ngOnInit() {
        this.Title = "Food Selector";
    }
}