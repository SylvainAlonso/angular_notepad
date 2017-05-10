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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var NoteService = (function () {
    function NoteService(http) {
        this.http = http;
        this.noteUrl = 'http://localhost/my_project/web/app_dev.php/note/API/notes';
    }
    NoteService.prototype.getNotes = function () {
        return this.http.get(this.noteUrl)
            .map(function (res) { return res.json(); });
    };
    NoteService.prototype.getNote = function (id) {
        return this.http.get(this.noteUrl + id)
            .map(function (res) { return JSON.parse(res.json()); });
    };
    NoteService.prototype.newNote = function (note) {
        return this.http.post(this.noteUrl, this.serialize(note));
    };
    NoteService.prototype.updateNote = function (note) {
        return this.http.put(this.noteUrl + "/" + note.id, this.serialize(note));
    };
    NoteService.prototype.deleteNote = function (note) {
        return this.http.delete(this.noteUrl + "/" + note.id);
    };
    NoteService.prototype.serialize = function (note) {
        return JSON.stringify({
            'title': note.title,
            'content': note.content,
            'categorie': note.categorie.id,
        });
    };
    return NoteService;
}());
NoteService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], NoteService);
exports.NoteService = NoteService;
//# sourceMappingURL=note.service.js.map