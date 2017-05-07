import { Component} from '@angular/core';

@Component({
    selector : 'notes_list',
    templateUrl : 'app/templates/notes_list.component.html',
})

export class NotesListComponent {

  notes = [{
      "title" : "première note",
      "content" : "test",
      "date" : "22/03",
      "id" : 1,
      "edit": false,
      "category" : {
          "id" : 1,
          "name" : "remarque"
      }
  }, {
      "title" : "Seconde note",
      "content" : "test numéro 2",
      "date" : "22/04",
      "id" : 2,
      "edit": false,
      "category" : {
          "id" : 2,
          "name" : "to do"
      }
    }
  ]
  categories = [{
        "id" : 1,
        "name" : "remarque",
        "edit": false
    }, {
        "id" : 2,
        "name" : "todo",
        "edit": false
    }, {
        "id" : 3,
        "name" : "nePasOublier",
        "edit": false
    }, {
        "id" : 4,
        "name" : "autre",
        "edit": false
  }]

  createNewNote: boolean = true;
  message: string ="";

  editNote(note:any){
    note.edit= true;
  }

  saveNote(note:any){
    if(note.id >0){
      //Stop displaying note editor
      note.edit = false;
      this.message="Modification enregistrée";
    }else{
      this.notes.push(note);
      //Stop displaying note editor
      this.createNewNote = true;
      this.message="Nouvelle catégorie enregistrée";
    }
  }

  deleteNote(note:any){
    let index = this.notes.findIndex((n) => (n === note));
    if (index != -1) {
      this.notes.splice(index, 1);
    }
  }
}
