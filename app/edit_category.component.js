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
var EditCategoryComponent = (function () {
    function EditCategoryComponent() {
        //Creation of a custom event saveCatEvent to be able to communicate from the child to the parent (CategoriesListComponent)
        this.saveCatEvent = new core_1.EventEmitter();
    }
    EditCategoryComponent.prototype.ngOnInit = function () {
    };
    //Event emitter that sends the object cat to te parent
    EditCategoryComponent.prototype.emitCat = function () {
        this.saveCatEvent.emit(this.cat);
    };
    //Disabled save button when the name does not contain at least 4 characters
    EditCategoryComponent.prototype.checkContent = function () {
        if (this.cat && this.cat.name && this.cat.name.length > 4) {
            return false;
        }
        return true;
    };
    return EditCategoryComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], EditCategoryComponent.prototype, "cat", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], EditCategoryComponent.prototype, "saveCatEvent", void 0);
EditCategoryComponent = __decorate([
    core_1.Component({
        selector: 'edit-category',
        templateUrl: 'app/templates/edit_category.component.html',
    })
], EditCategoryComponent);
exports.EditCategoryComponent = EditCategoryComponent;
//# sourceMappingURL=edit_category.component.js.map