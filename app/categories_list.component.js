"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var category_service_1 = require("./category.service");
var CategoriesListComponent = (function () {
    function CategoriesListComponent(categoryService) {
        this.categoryService = categoryService;
        this.createNewCat = true;
        this.message = "";
        this.result = "";
    }
    CategoriesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryService.getCategories().subscribe(function (data) { _this.categories = JSON.parse(data); }, function (err) { return console.log(err); }, function () { return console.log('categories charged'); });
    };
    //Method for set the boolean category.edit to true for the correct category when clicking
    CategoriesListComponent.prototype.editCat = function (category) {
        category.edit = true;
    };
    //Method to save category in DB
    CategoriesListComponent.prototype.saveCat = function (cat) {
        var _this = this;
        if (cat.id > 0) {
            this.categoryService.updateCategory(cat).subscribe(function (data) { return _this.successMessage("upcat"); }, function (err) { return _this.failureMessage(); });
            //Stop displaying category editor
            cat.edit = false;
        }
        else {
            this.categories.push(cat);
            //Add note in DB
            this.categoryService.newCategory(cat).subscribe(function (data) { return _this.successMessage("newcat"); }, function (err) { return _this.failureMessage(); });
            //Stop displaying category editor
            this.createNewCat = true;
            this.message = "Nouvelle catégorie enregistrée";
        }
    };
    CategoriesListComponent.prototype.deleteCat = function (cat) {
        var _this = this;
        this.categoryService.deleteCategory(cat).subscribe(function (data) { return _this.successMessage("delcat"); }, function (err) { return _this.failureMessage(); });
        var index = this.categories.findIndex(function (n) { return (n === cat); });
        if (index != -1) {
            this.categories.splice(index, 1);
        }
    };
    CategoriesListComponent.prototype.successMessage = function (type) {
        this.result = "alert alert-success";
        if (type == "upcat") {
            this.message = "Modification enregistrée";
        }
        else if (type == "delcat") {
            this.message = "Catégorie supprimée";
        }
        else {
            this.message = "Nouvelle catégorie enregistrée";
        }
    };
    CategoriesListComponent.prototype.failureMessage = function () {
        this.result = "alert alert-danger";
        this.message = "Erreur";
    };
    return CategoriesListComponent;
}());
CategoriesListComponent = __decorate([
    core_1.Component({
        selector: 'categories_list',
        templateUrl: 'app/templates/categories_list.component.html',
        providers: [category_service_1.CategoryService],
    }),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoriesListComponent);
exports.CategoriesListComponent = CategoriesListComponent;
//# sourceMappingURL=categories_list.component.js.map