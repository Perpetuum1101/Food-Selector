"use strict";
var router_1 = require('@angular/router');
var recipes_component_1 = require('./components/recipes.component');
var ingredients_component_1 = require('./components/ingredients.component');
var details_component_1 = require('./components/details.component');
var selector_component_1 = require('./components/selector.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/select',
        pathMatch: 'full'
    },
    { path: 'select', component: selector_component_1.SelectorComponent },
    { path: 'list', component: recipes_component_1.RecipesComponent },
    { path: 'ingredients', component: ingredients_component_1.IngredientsComponent },
    { path: 'details', component: details_component_1.DetailComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map