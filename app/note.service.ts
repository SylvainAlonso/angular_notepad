import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class NoteService {
    constructor(private http: Http) { }

    private noteUrl = 'http://localhost/my_project/web/app_dev.php/note/API/notes';

    getNotes() {
        return this.http.get(this.noteUrl)
            .map((res: Response) => res.json());
    }

    getNote(id: Number) {
        return this.http.get(this.noteUrl + id)
            .map((res: Response) => JSON.parse(res.json()));
    }

    newNote(note: any) {
        return this.http.post(this.noteUrl, this.serialize(note));
    }

    updateNote(note: any) {
        return this.http.put(this.noteUrl + "/" + note.id, this.serialize(note));
    }

    deleteNote(note: any) {
        return this.http.delete(this.noteUrl + "/" + note.id);
    }

    private serialize(note: any) {
        return JSON.stringify({
            'title': note.title,
            'content': note.content,
            'categorie': note.categorie.id,
        });
    }
}
