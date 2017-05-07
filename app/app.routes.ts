import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NotesListComponent } from './notes_list.component';
import { CategoriesListComponent } from './categories_list.component';
import { AboutComponent } from './about.component';



//Array of paths
export const routes: Routes = [
//path= simple object
{ path: '', redirectTo: 'notes_list', pathMatch: 'full' },
{ path: 'notes_list', component: NotesListComponent },
{ path: 'categories_list', component:CategoriesListComponent },
{ path: 'about', component:AboutComponent },

];
