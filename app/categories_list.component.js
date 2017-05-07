"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var CategoriesListComponent = (function () {
    function CategoriesListComponent() {
        this.categories = [{
                "id": 1,
                "name": "remarque",
                "edit": false
            }, {
                "id": 2,
                "name": "todo",
                "edit": false
            }, {
                "id": 3,
                "name": "nePasOublier",
                "edit": false
            }, {
                "id": 4,
                "name": "autre",
                "edit": false
            }];
        this.createNewCat = true;
        this.message = "";
    }
    //Method for set the boolean category.edit to true for the correct category when clicking
    CategoriesListComponent.prototype.editCategory = function (category) {
        category.edit = true;
    };
    //Method to save category in DB
    CategoriesListComponent.prototype.saveCat = function (category) {
        this.categories.push(category);
        this.createNewCat = true;
        this.message = "Catégorie ajoutée";
    };
    return CategoriesListComponent;
}());
CategoriesListComponent = __decorate([
    core_1.Component({
        selector: 'categories_list',
        templateUrl: 'app/templates/categories_list.component.html',
    })
], CategoriesListComponent);
exports.CategoriesListComponent = CategoriesListComponent;
//# sourceMappingURL=categories_list.component.js.map