"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_routes_1 = require("./app.routes");
var app_component_1 = require("./app.component");
var note_handler_component_1 = require("./note_handler.component");
var notes_list_component_1 = require("./notes_list.component");
var categories_list_component_1 = require("./categories_list.component");
var category_handler_component_1 = require("./category_handler.component");
var about_component_1 = require("./about.component");
//Decorator to make the class a module
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        //Import other modules which are using here
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, router_1.RouterModule.forRoot(app_routes_1.routes)],
        //Property to declare what the module contains
        declarations: [app_component_1.AppComponent, note_handler_component_1.NoteHandlerComponent, notes_list_component_1.NotesListComponent, categories_list_component_1.CategoriesListComponent, category_handler_component_1.CategoryHandlerComponent, about_component_1.AboutComponent],
        //Bootstrap property because of that it is the module on which we boot
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map