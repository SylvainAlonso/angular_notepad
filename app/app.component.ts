import { Component } from '@angular/core';

//Decorator to make the class a component
@Component({
  //Allows to use this component in an other component (like a tag)
  selector: 'my-app',
  //where the graphical representation of the component is
  template:`
  <div class="container-fluid">
    <div class="row">
        <nav class="navbar navbar-default" style="background-color: #BBD2E1;">
            <b><a class="navbar-brand" >Notepad Application</a></b>
            <a class="navbar-brand" routerLink="/notes_list">Home</a>
            <a class="navbar-brand" routerLink="/new_note">Nouvelle note</a>
        </nav>
    </div>
    <router-outlet></router-outlet>
</div>`
})

export class AppComponent  { }
