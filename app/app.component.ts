import { Component } from '@angular/core';

//Decorator to make the class a component
@Component({
  //Allows to use this component in an other component (like a tag)
  selector: 'my-app',
  //where the graphical representation of the component is
  templateUrl: `app/templates/app.component.html`,
})
export class AppComponent  {

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
