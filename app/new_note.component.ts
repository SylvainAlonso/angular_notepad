import { Component, Input, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import {NotesListComponent} from './notes_list.component';

@Component({
    selector : 'new-note',
    templateUrl : 'app/templates/new_note.component.html',
})

export class NewNoteComponent {

  notes : any[];

  categories = ['todo', 'remarque', 'ne pas oublier', 'autre'];

  createNewNote(note:any){
    this.notes.push(note);
  }
}
