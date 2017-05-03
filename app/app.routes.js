"use strict";
var app_component_1 = require("./app.component");
var new_note_component_1 = require("./new_note.component");
//Array of paths
exports.routes = [
    //path= simple object
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: app_component_1.AppComponent },
    { path: 'newnote', component: new_note_component_1.NewNoteComponent },
];
//# sourceMappingURL=app.routes.js.map