import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NewNoteComponent } from './new_note.component';


//Array of paths
export const routes: Routes = [
//path= simple object
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', component: AppComponent },
{ path: 'newnote', component: NewNoteComponent },
];
