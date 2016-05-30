import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from './services/http.service';
import {TAB_DIRECTIVES} from 'ng2-bootstrap/components/tabs';
import {TestComponent} from './test.component';

@Component({
    selector: 'my-app',
    templateUrl: './app/templates/app.html',
    directives: [TAB_DIRECTIVES, TestComponent],
    providers: [HttpService]
})
export class AppComponent implements OnInit {
    public Title: string;
    
    ngOnInit() {
        this.Title = "Food Selector";
    }
}