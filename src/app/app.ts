import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// 1. On importe notre interface et notre liste de projets qu'on a créées avant
import { Projet } from './projet.model';
import { LISTE_PROJETS } from './projet.data';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Le titre de ton application (avec un signal)
  protected readonly title = signal('mon-portfolio');

  // 2. On crée une propriété "listeProjets" qui contient tous tes projets.
  // C'est cette variable que ton fichier HTML va lire pour afficher les cartes !
  listeProjets: Projet[] = LISTE_PROJETS;
}