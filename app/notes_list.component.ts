import { Component} from '@angular/core';

import { Note } from './note';
import { Category } from './category';
import { NoteService } from './note.service';
import { CategoryService } from './category.service';

@Component({
    selector : 'notes_list',
    templateUrl : 'app/templates/notes_list.component.html',
    providers: [NoteService, CategoryService],
})

export class NotesListComponent {
  notes: any[];
  categories: any[];

  createNewNote: boolean = true;
  message: string ="";
  result: string ="";

  constructor(private noteService: NoteService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.noteService.getNotes().subscribe(
      data => { this.notes = JSON.parse(data); },
      err => console.log(err),
      () => console.log('notes charged')
    );

    this.categoryService.getCategories().subscribe(
      data => { this.categories = JSON.parse(data); },
      err => console.log(err),
      () => console.log('categories charged')
    );
  }

  saveNote(note:any){
    if(note.id >0){
      this.noteService.updateNote(note).subscribe(
        data => this.successMessage("upnote"),
        err => this.failureMessage(),
    );
      //Stop displaying note editor
      note.edit = false;
      this.message="Modification enregistrée";
    }else{
      this.notes.push(note);

      this.noteService.newNote(note).subscribe(
        data => this.successMessage("newnote"),
        err => this.failureMessage(),
      );
      //Stop displaying note editor
      this.createNewNote = true;
      this.message="Nouvelle note enregistrée";
    }
  }

  editNote(note:any){
    note.edit= true;
  }

  deleteNote(note:any){
    this.noteService.deleteNote(note).subscribe(
      data => this.successMessage("delnote"),
      err => this.failureMessage(),
    );

    let index = this.notes.findIndex((n) => (n === note));
    if (index != -1) {
      this.notes.splice(index, 1);
    }
  }

  successMessage(type:any){
    this.result= "alert alert-success";
    if(type == "upnote"){
      this.message="Modification enregistrée";
    }
    else if(type == "delnote"){
      this.message="Note supprimée";
    }else{
      this.message="Nouvelle note enregistrée";
    }

  }

  failureMessage(){
    this.result= "alert alert-danger";
    this.message="Erreur";
  }
}
