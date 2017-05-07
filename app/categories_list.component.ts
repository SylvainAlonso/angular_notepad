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
  editCategory(category:any){
      category.edit = true;
  }

  //Method to save category in DB
  saveCat(category:any){
    this.categories.push(category);
    this.createNewCat =true;
    this.message="Catégorie ajoutée";
  }


}
