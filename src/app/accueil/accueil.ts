import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LISTE_PROJETS } from '../projet.data';
import { Card } from '../card/card';
import { Services } from '../pages/services/services';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule, RouterLink, Card, Services], // <-- Services est bien présent ici
  templateUrl: './accueil.html',
  styleUrl: './accueil.css'
})
export class Accueil implements OnInit, OnDestroy {
  listeProjets = LISTE_PROJETS;

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
    this.lancerAnimation(); // <-- Démarrage de l'effet machine à écrire
  }

  ngOnDestroy() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  lancerAnimation() {
    const motComplet = this.motsAanimer[this.wordIndex];

    if (!this.estEnTrainDeSupprimer) {
      if (this.letterIndex <= motComplet.length) {
        this.motActuel = motComplet.substring(0, this.letterIndex);
        this.letterIndex++;
        this.cdr.detectChanges();
        this.timer = setTimeout(() => this.lancerAnimation(), 100);
      } else {
        this.estEnTrainDeSupprimer = true;
        this.timer = setTimeout(() => this.lancerAnimation(), 2000);
      }
    } else {
      if (this.letterIndex > 0) {
        this.letterIndex--;
        this.motActuel = motComplet.substring(0, this.letterIndex);
        this.cdr.detectChanges();
        this.timer = setTimeout(() => this.lancerAnimation(), 60);
      } else {
        this.estEnTrainDeSupprimer = false;
        this.wordIndex = (this.wordIndex + 1) % this.motsAanimer.length;
        this.timer = setTimeout(() => this.lancerAnimation(), 300);
      }
    }
  }
}