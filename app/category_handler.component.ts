import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector : 'category-handler',
    templateUrl : 'app/templates/category_handler.component.html',
})

export class CategoryHandlerComponent implements OnInit {
  //Declaration of the input (content) in the child component using the decorator @Input()
  @Input() cat:any;
  //Creation of a custom event saveCatEvent to be able to communicate from the child to the parent (CategoriesListComponent)
  @Output() saveCatEvent: EventEmitter<any> = new EventEmitter();

  ngOnInit(){

  }

  //Event emitter that sends the object cat to te parent
  emitCat(){
    this.saveCatEvent.emit(this.cat);
  }

  //Disabled save button when the name does not contain at least 4 characters
  checkContent(){
    if(this.cat && this.cat.name && this.cat.name.length >= 4){
      return false;
    }
    return true;
  }
}
