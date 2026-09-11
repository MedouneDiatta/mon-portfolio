import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common'; // Pour les directives de base (optionnel mais recommandé)
import { RouterOutlet, RouterLink } from '@angular/router'; // On ajoute RouterLink ici !

// On importe notre interface et notre liste de projets
import { Projet } from './projet.model';
import { LISTE_PROJETS } from './projet.data';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [CommonModule, RouterOutlet, RouterLink], //  On les déclare tous les deux dans les imports
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mon-portfolio');
  listeProjets: Projet[] = LISTE_PROJETS;
}