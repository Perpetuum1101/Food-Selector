import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { ListComponent } from './components/list.component';
import { RecipeIngredientComponent } from './components/recipe-ingredient.component' 

import { AppComponent }  from './components/app.component';
import {RecipesComponent} from './components/recipes.component';
import {IngredientsComponent} from './components/ingredients.component'
import {DetailComponent} from './components/details.component';
import {SelectorComponent} from './components/selector.component';

import { HttpService } from './services/http.service';
import { DataService } from './services/data.service';
import { InitService } from './services/init.service';

import {ButtonComponent} from './lib/components/button.component';
import {InputComponent} from './lib/components/input.component';
import {CheckboxComponent} from './lib/components/checkbox.component';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, routing],
    declarations: [
        AppComponent, 
        ListComponent,
        RecipeIngredientComponent,
        RecipesComponent, 
        IngredientsComponent, 
        DetailComponent, 
        SelectorComponent,
        ButtonComponent,
        InputComponent,
        CheckboxComponent],
    providers: [HttpService, DataService, InitService],
    bootstrap: [AppComponent]
})
export class AppModule { }
