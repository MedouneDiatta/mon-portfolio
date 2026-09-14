import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // <-- Import indispensable pour le bouton de contact
import { LISTE_PROJETS } from '../projet.data';
import { Card } from '../card/card';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule, RouterLink, Card], // <-- Ajout de RouterLink ici
  templateUrl: './accueil.html',
  styleUrl: './accueil.css'
})
export class Accueil implements OnInit, OnDestroy {
  listeProjets = LISTE_PROJETS;

  // Nouveaux mots qui s'affichent après "Je suis Medoune DIATTA"
  motsAanimer: string[] = [
    'Développeur Web Full-Stack', 
    'Passionné par le code', 
    'Créateur de solutions web'
  ];
  motActuel = '';

  private wordIndex = 0;
  private letterIndex = 0;
  private estEnTrainDeSupprimer = false;
  private timer: any;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.lancerAnimation();
  }

  ngOnDestroy() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  lancerAnimation() {
    const motComplet = this.motsAanimer[this.wordIndex];

    if (!this.estEnTrainDeSupprimer) {
      // Écriture lettre par lettre
      if (this.letterIndex <= motComplet.length) {
        this.motActuel = motComplet.substring(0, this.letterIndex);
        this.letterIndex++;
        this.cdr.detectChanges();
        this.timer = setTimeout(() => this.lancerAnimation(), 100);
      } else {
        // Pause avant l'effacement
        this.estEnTrainDeSupprimer = true;
        this.timer = setTimeout(() => this.lancerAnimation(), 2000);
      }
    } else {
      // Effacement lettre par lettre
      if (this.letterIndex > 0) {
        this.letterIndex--;
        this.motActuel = motComplet.substring(0, this.letterIndex);
        this.cdr.detectChanges();
        this.timer = setTimeout(() => this.lancerAnimation(), 60);
      } else {
        // Passage au mot suivant
        this.estEnTrainDeSupprimer = false;
        this.wordIndex = (this.wordIndex + 1) % this.motsAanimer.length;
        this.timer = setTimeout(() => this.lancerAnimation(), 300);
      }
    }
  }
}