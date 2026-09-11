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
  private timer: any;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.loop();
  }

  ngOnDestroy() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  loop() {
    this.timer = setTimeout(() => {
      if (this.wordIndex >= this.motsAanimer.length) {
        this.wordIndex = 0;
        this.letterIndex = 0;
        this.loop();
      } else if (this.letterIndex < this.motsAanimer[this.wordIndex].length) {
        this.motActuel += this.motsAanimer[this.wordIndex].charAt(this.letterIndex);
        this.letterIndex++;
        
        // On force Angular à rafraîchir la vue immédiatement pour chaque lettre
        this.cdr.detectChanges();
        
        this.loop();
      } else {
        this.timer = setTimeout(() => {
          this.motActuel = '';
          this.wordIndex++;
          this.letterIndex = 0;
          
          this.cdr.detectChanges();
          
          this.loop();
        }, 2000);
      }
    }, 120);
  }
}