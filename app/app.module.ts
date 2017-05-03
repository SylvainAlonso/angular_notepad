import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { routes } from './app.routes';
import { AppComponent }  from './app.component';
import {NewNoteComponent} from './new_note.component';

//Decorator to make the class a module
@NgModule({
  //Import other modules which are using here
  imports:      [BrowserModule, HttpModule, RouterModule.forRoot(routes) ],
  //Property to declare what the module contains
  declarations: [ AppComponent, NewNoteComponent],
  //Bootstrap property because of that it is the module on which we boot
  bootstrap:    [ AppComponent ]
})
export class AppModule { }