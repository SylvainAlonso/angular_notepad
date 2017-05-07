"use strict";
var notes_list_component_1 = require("./notes_list.component");
var categories_list_component_1 = require("./categories_list.component");
var about_component_1 = require("./about.component");
//Array of paths
exports.routes = [
    //path= simple object
    { path: '', redirectTo: 'notes_list', pathMatch: 'full' },
    { path: 'notes_list', component: notes_list_component_1.NotesListComponent },
    { path: 'categories_list', component: categories_list_component_1.CategoriesListComponent },
    { path: 'about', component: about_component_1.AboutComponent },
];
//# sourceMappingURL=app.routes.js.map