import { Component} from '@angular/core';
import { EditCategoryComponent } from './edit_category.component';

@Component({
    selector : 'categories_list',
    templateUrl : 'app/templates/categories_list.component.html',
})

export class CategoriesListComponent {
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

  createNewCat: boolean = true;
  message: string ="";

  //Method for set the boolean category.edit to true for the correct category when clicking
  editCat(category:any){
      category.edit = true;
  }

  //Method to save category in DB
  saveCat(cat:any){
    if(cat.id >0){
      //Stop displaying category editor
      cat.edit = false;
      this.message="Modification enregistrée";
    }else{
      this.categories.push(cat);
      //Stop displaying category editor
      this.createNewCat = true;
      this.message="Nouvelle catégorie enregistrée";
    }
  }

  deleteCat(cat:any){
    let index = this.categories.findIndex((n) => (n === cat));
      if (index != -1) {
         this.categories.splice(index, 1);
      }
  }


}
