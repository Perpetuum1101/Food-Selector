import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecipesComponent} from './components/recipes.component';
import {IngredientsComponent} from './components/ingredients.component'
import {DetailComponent} from './components/details.component';
import {SelectorComponent} from './components/selector.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/select',
    pathMatch: 'full'
  },
  { path: 'select', component: SelectorComponent },
  { path: 'list', component: RecipesComponent },
  { path: 'ingredients', component: IngredientsComponent },
  { path: 'details', component: DetailComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);