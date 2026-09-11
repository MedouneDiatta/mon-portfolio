import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LISTE_PROJETS } from '../projet.data';
import { Card } from '../card/card';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule, Card],
  templateUrl: './accueil.html',
  styleUrl: './accueil.css'
})
export class Accueil implements OnInit, OnDestroy {
  listeProjets = LISTE_PROJETS;

  motsAanimer: string[] = ['Développeur Web', 'Passionné', 'Créatif'];
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
      // Phase 1 : Écriture lettre par lettre de gauche à droite
      if (this.letterIndex <= motComplet.length) {
        this.motActuel = motComplet.substring(0, this.letterIndex);
        this.letterIndex++;
        this.cdr.detectChanges();
        this.timer = setTimeout(() => this.lancerAnimation(), 120);
      } else {
        // Le mot est entièrement écrit, on fait une pause de 2 secondes avant d'effacer
        this.estEnTrainDeSupprimer = true;
        this.timer = setTimeout(() => this.lancerAnimation(), 2000);
      }
    } else {
      // Phase 2 : Effacement lettre par lettre de droite à gauche
      if (this.letterIndex > 0) {
        this.letterIndex--;
        this.motActuel = motComplet.substring(0, this.letterIndex);
        this.cdr.detectChanges();
        this.timer = setTimeout(() => this.lancerAnimation(), 80); // Vitesse d'effacement un peu plus rapide
      } else {
        // Le mot est complètement effacé, on passe au mot suivant dans le tableau
        this.estEnTrainDeSupprimer = false;
        this.wordIndex = (this.wordIndex + 1) % this.motsAanimer.length;
        this.timer = setTimeout(() => this.lancerAnimation(), 400);
      }
    }
  }
}