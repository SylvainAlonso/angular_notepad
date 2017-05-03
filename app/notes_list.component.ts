import { Component} from '@angular/core';
//import { FormGroup, FormControl } from '@angular/forms';

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
      "categorie" : {
          "id" : 1,
          "name" : "remarque"
      }
  }, {
      "title" : "Seconde note",
      "content" : "test numéro 2",
      "date" : "22/04",
      "id" : 2,
      "categorie" : {
          "id" : 2,
          "name" : "to do"
      }
    }
  ]
}
