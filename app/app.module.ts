import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { routes } from './app.routes';
import { AppComponent }  from './app.component';
import { NewNoteComponent } from './new_note.component';
import { NotesListComponent } from './notes_list.component';
import { CategoriesListComponent } from './categories_list.component';
import { CategoryHandlerComponent } from './category_handler.component';

//Decorator to make the class a module
@NgModule({
  //Import other modules which are using here
  imports:      [BrowserModule, HttpModule, FormsModule, RouterModule.forRoot(routes) ],
  //Property to declare what the module contains
  declarations: [ AppComponent, NewNoteComponent, NotesListComponent, CategoriesListComponent, CategoryHandlerComponent],
  //Bootstrap property because of that it is the module on which we boot
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
