"use strict";
var new_note_component_1 = require("./new_note.component");
var notes_list_component_1 = require("./notes_list.component");
var categories_list_component_1 = require("./categories_list.component");
var new_category_component_1 = require("./new_category.component");
//Array of paths
exports.routes = [
    //path= simple object
    { path: '', redirectTo: 'notes_list', pathMatch: 'full' },
    { path: 'notes_list', component: notes_list_component_1.NotesListComponent },
    { path: 'new_note', component: new_note_component_1.NewNoteComponent },
    { path: 'categories_list', component: categories_list_component_1.CategoriesListComponent },
    { path: 'new_category', component: new_category_component_1.NewCategoryComponent },
];
//# sourceMappingURL=app.routes.js.map