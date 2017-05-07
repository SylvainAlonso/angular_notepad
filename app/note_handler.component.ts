import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector : 'note-handler',
    templateUrl : 'app/templates/note_handler.component.html',
})

export class NoteHandlerComponent implements OnInit{

  @Input() note:any;
  @Input() categories:any;
  @Output() saveNoteEvent: EventEmitter<any> = new EventEmitter();

  ngOnInit(){

  }

  emitNote(){
    this.saveNoteEvent.emit(this.note);
  }

  checkContent(){
    if(this.note && this.note.title && this.note.content && this.note.title.length >= 4 && this.note.content.length > 0){
      return false;
    }
    return true;
  }

}
