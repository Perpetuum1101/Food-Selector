import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app/templates/app.html'
})

export class AppComponent implements OnInit {
    public Title: string;

    constructor() {
        console.log("app constructor call...");
    }

    ngOnInit() {
        console.log("app init call...")
        this.Title = "Food Selector";
    }
}