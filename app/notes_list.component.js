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
var note_service_1 = require("./note.service");
var category_service_1 = require("./category.service");
var NotesListComponent = (function () {
    function NotesListComponent(noteService, categoryService) {
        this.noteService = noteService;
        this.categoryService = categoryService;
        this.createNewNote = true;
        this.message = "";
    }
    NotesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.noteService.getNotes().subscribe(function (data) { _this.notes = JSON.parse(data); }, function (err) { return console.log(err); }, function () { return console.log('notes charged'); });
        this.categoryService.getCategories().subscribe(function (data) { _this.categories = JSON.parse(data); }, function (err) { return console.log(err); }, function () { return console.log('categories charged'); });
    };
    NotesListComponent.prototype.saveNote = function (note) {
        var _this = this;
        if (note.id > 0) {
            this.noteService.updateNote(note).subscribe(function (data) { return _this.successMessage("upnote"); }, function (err) { return _this.failureMessage(); });
            //Stop displaying note editor
            note.edit = false;
            this.message = "Modification enregistrée";
        }
        else {
            this.notes.push(note);
            this.noteService.newNote(note).subscribe(function (data) { return _this.successMessage("newnote"); }, function (err) { return _this.failureMessage(); });
            //Stop displaying note editor
            this.createNewNote = true;
            this.message = "Nouvelle catégorie enregistrée";
        }
    };
    NotesListComponent.prototype.editNote = function (note) {
        note.edit = true;
    };
    NotesListComponent.prototype.deleteNote = function (note) {
        var _this = this;
        this.noteService.deleteNote(note).subscribe(function (data) { return _this.successMessage("delnote"); }, function (err) { return _this.failureMessage(); });
        var index = this.notes.findIndex(function (n) { return (n === note); });
        if (index != -1) {
            this.notes.splice(index, 1);
        }
    };
    NotesListComponent.prototype.successMessage = function (type) {
        this.result = "alert alert-success";
        if (type == "upnote") {
            this.message = "Modification enregistrée";
        }
        else if (type == "delnote") {
            this.message = "Catégorie supprimée";
        }
        else {
            this.message = "Nouvelle catégorie enregistrée";
        }
    };
    NotesListComponent.prototype.failureMessage = function () {
        this.result = "alert alert-danger";
        this.message = "Erreur";
    };
    return NotesListComponent;
}());
NotesListComponent = __decorate([
    core_1.Component({
        selector: 'notes_list',
        templateUrl: 'app/templates/notes_list.component.html',
        providers: [note_service_1.NoteService, category_service_1.CategoryService],
    }),
    __metadata("design:paramtypes", [note_service_1.NoteService, category_service_1.CategoryService])
], NotesListComponent);
exports.NotesListComponent = NotesListComponent;
//# sourceMappingURL=notes_list.component.js.map