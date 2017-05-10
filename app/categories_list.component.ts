import { Component, OnInit} from '@angular/core';

import { CategoryService } from './category.service';
import { Category } from './category'

@Component({
    selector : 'categories_list',
    templateUrl : 'app/templates/categories_list.component.html',
    providers: [CategoryService],
})

export class CategoriesListComponent {

  categories: any[];;
  createNewCat: boolean = true;
  message: string ="";
  result: string ="";

  constructor(private categoryService : CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(
      data => { this.categories = JSON.parse(data); },
      err => console.log(err),
      () => console.log('categories charged')
    );
  }

  //Method for set the boolean category.edit to true for the correct category when clicking
  editCat(category:any){
      category.edit = true;
  }

  //Method to save category in DB
  saveCat(cat:any){
    if(cat.id >0){
      this.categoryService.updateCategory(cat).subscribe(
        data => this.successMessage("upcat"),
        err => this.failureMessage(),
      );
      //Stop displaying category editor
      cat.edit = false;
    }else{
      this.categories.push(cat);
      //Add note in DB
      this.categoryService.newCategory(cat).subscribe(
        data => this.successMessage("newcat"),
        err => this.failureMessage(),
      );
      //Stop displaying category editor
      this.createNewCat = true;
      this.message="Nouvelle catégorie enregistrée";
    }
  }

  deleteCat(cat:any){
    this.categoryService.deleteCategory(cat).subscribe(
      data => this.successMessage("delcat"),
      err => this.failureMessage(),
    );

    let index = this.categories.findIndex((n) => (n === cat));
      if (index != -1) {
         this.categories.splice(index, 1);
      }
  }

  successMessage(type:any){
    this.result= "alert alert-success";
    if(type == "upcat"){
      this.message="Modification enregistrée";
    }
    else if(type == "delcat"){
      this.message="Catégorie supprimée";
    }else{
      this.message="Nouvelle catégorie enregistrée";
    }

  }

  failureMessage(){
    this.result= "alert alert-danger";
    this.message="Erreur";
  }
}
