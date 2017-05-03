"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
//Decorator to make the class a component
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        //Allows to use this component in an other component (like a tag)
        selector: 'my-app',
        //where the graphical representation of the component is
        template: "\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n        <nav class=\"navbar navbar-default\" style=\"background-color: #BBD2E1;\">\n            <b><a class=\"navbar-brand\" >Notepad Application</a></b>\n            <a class=\"navbar-brand\" routerLink=\"/notes_list\">Home</a>\n            <a class=\"navbar-brand\" routerLink=\"/new_note\">Nouvelle note</a>\n        </nav>\n    </div>\n    <router-outlet></router-outlet>\n</div>"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map