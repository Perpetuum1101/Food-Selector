import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './components/app.component';
import {RecipesComponent} from './components/recipes.component';
import {IngredientsComponent} from './components/ingredients.component'
import {DetailComponent} from './components/details.component';
import {SelectorComponent} from './components/selector.component';

import { HttpService } from './services/http.service';
import { DataService } from './services/data.service';
import { InitService } from './services/init.service';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, routing],
    declarations: [AppComponent, RecipesComponent, IngredientsComponent, DetailComponent, SelectorComponent],
    providers: [HttpService, DataService, InitService],
    bootstrap: [AppComponent]
})
export class AppModule { }
