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
var NoteHandlerComponent = (function () {
    function NoteHandlerComponent() {
        this.saveNoteEvent = new core_1.EventEmitter();
    }
    NoteHandlerComponent.prototype.ngOnInit = function () {
    };
    NoteHandlerComponent.prototype.emitNote = function () {
        this.saveNoteEvent.emit(this.note);
    };
    NoteHandlerComponent.prototype.checkContent = function () {
        if (this.note && this.note.title && this.note.content && this.note.title.length >= 4 && this.note.content.length > 0) {
            return false;
        }
        return true;
    };
    return NoteHandlerComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], NoteHandlerComponent.prototype, "note", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], NoteHandlerComponent.prototype, "categories", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], NoteHandlerComponent.prototype, "saveNoteEvent", void 0);
NoteHandlerComponent = __decorate([
    core_1.Component({
        selector: 'note-handler',
        templateUrl: 'app/templates/note_handler.component.html',
    })
], NoteHandlerComponent);
exports.NoteHandlerComponent = NoteHandlerComponent;
//# sourceMappingURL=note_handler.component.js.map