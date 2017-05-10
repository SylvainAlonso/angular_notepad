"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AboutComponent = (function () {
    function AboutComponent() {
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        selector: 'about',
        template: "\n    <div class=\"well well-lg\">\n        <div class=\"row\">\n            R\u00E9alisation de l'app <b>Notepad</b> dans le cadre du cours d'Application et service web (2I4090).<br><br>\n            Cette derni\u00E8re permet:<br>\n            <p style=\"margin-left: 25px;\">\n              - de lister les notes;<br>\n              - d\u2019ajouter une note li\u00E9e \u00E0 une cat\u00E9gorie;<br>\n              - d\u2019effacer une note;<br>\n              - de modifier une note;<br>\n              - de lister les cat\u00E9gories;<br>\n              - de modifier une cat\u00E9gorie;<br>\n              - d'effacer une cat\u00E9gorie.<br>\n            </p>\n\n            Chaque note comprend un titre, un contenu et une cat\u00E9gorie.<br>\n            Toute \u00E9dition ou cr\u00E9ation de note/cat\u00E9gorie se fait dans l'onglet correspondant de la navbar.\n        </div>\n    </div>\n    "
    })
], AboutComponent);
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map