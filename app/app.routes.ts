import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NewNoteComponent } from './new_note.component';
import { NotesListComponent } from './notes_list.component';
import { CategoriesListComponent } from './categories_list.component';
import { NewCategoryComponent } from './new_category.component';


//Array of paths
export const routes: Routes = [
//path= simple object
{ path: '', redirectTo: 'notes_list', pathMatch: 'full' },
{ path: 'notes_list', component: NotesListComponent },
{ path: 'new_note', component: NewNoteComponent },
{ path: 'categories_list', component:CategoriesListComponent },
{ path: 'new_category', component:NewCategoryComponent },
];
