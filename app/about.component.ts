import { Component } from '@angular/core';
import { AppComponent } from './app.component';

@Component({
    selector : 'about',
    template : `
    <div class="well well-lg">
        <div class="row">
            Réalisation de l'app <b>Notepad</b> dans le cadre du cours d'Application et service web (2I4090).<br><br>
            Cette dernière permet:<br>
            <p style="margin-left: 25px;">
              - de lister les notes;<br>
              - d’ajouter une note liée à une catégorie;<br>
              - d’effacer une note;<br>
              - de modifier une note;<br>
              - de lister les catégories;<br>
              - de modifier une catégorie;<br>
              - d'effacer une catégorie.<br>
            </p>

            Chaque note comprend un titre, un contenu et une catégorie.<br>
            Toute édition ou création de note/catégorie se fait dans l'onglet correspondant de la navbar.
        </div>
    </div>
    `
})

export class AboutComponent {
}
