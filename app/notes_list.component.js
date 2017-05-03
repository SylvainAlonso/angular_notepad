"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
//import { FormGroup, FormControl } from '@angular/forms';
var NotesListComponent = (function () {
    function NotesListComponent() {
        this.notes = [{
                "title": "première note",
                "content": "test",
                "date": "22/03",
                "id": 1,
                "categorie": {
                    "id": 1,
                    "name": "remarque"
                }
            }, {
                "title": "Seconde note",
                "content": "test numéro 2",
                "date": "22/04",
                "id": 2,
                "categorie": {
                    "id": 2,
                    "name": "to do"
                }
            }
        ];
    }
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