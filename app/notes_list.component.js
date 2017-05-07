"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var NotesListComponent = (function () {
    function NotesListComponent() {
        this.notes = [{
                "title": "première note",
                "content": "test",
                "date": "22/03",
                "id": 1,
                "edit": false,
                "category": {
                    "id": 1,
                    "name": "remarque"
                }
            }, {
                "title": "Seconde note",
                "content": "test numéro 2",
                "date": "22/04",
                "id": 2,
                "edit": false,
                "category": {
                    "id": 2,
                    "name": "to do"
                }
            }
        ];
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
        this.createNewNote = true;
        this.message = "";
    }
    NotesListComponent.prototype.editNote = function (note) {
        note.edit = true;
    };
    NotesListComponent.prototype.saveNote = function (note) {
        if (note.id > 0) {
            //Stop displaying note editor
            note.edit = false;
            this.message = "Modification enregistrée";
        }
        else {
            this.notes.push(note);
            //Stop displaying note editor
            this.createNewNote = true;
            this.message = "Nouvelle catégorie enregistrée";
        }
    };
    NotesListComponent.prototype.deleteNote = function (note) {
        var index = this.notes.findIndex(function (n) { return (n === note); });
        if (index != -1) {
            this.notes.splice(index, 1);
        }
    };
    return NotesListComponent;
}());
NotesListComponent = __decorate([
    core_1.Component({
        selector: 'notes_list',
        templateUrl: 'app/templates/notes_list.component.html',
    })
], NotesListComponent);
exports.NotesListComponent = NotesListComponent;
//# sourceMappingURL=notes_list.component.js.map