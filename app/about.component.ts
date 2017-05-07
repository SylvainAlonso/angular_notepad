import { Component } from '@angular/core';
import { AppComponent } from './app.component';

@Component({
    selector : 'about',
    template : `
    <div class="well well-lg">
        <div class="row">
            Réalisation de l'app Notepad dans le cadre du cours d'Application et service web (2I4090).<br><br>
            Cette dernière offre la possibilité de stocker des notes en base de données via l'API Symphony. <br>
            Toute édition ou création de note/catégorie se fait dans l'onglet correspondant de la navbar.         
        </div>
    </div>
    `
})

export class AboutComponent {
}
