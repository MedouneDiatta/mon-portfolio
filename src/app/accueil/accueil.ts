import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Projet } from '../projet.model';
import { LISTE_PROJETS } from '../projet.data';
import { Card } from '../card/card';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule, Card],
  templateUrl: './accueil.html',
  styleUrl: './accueil.css',
})
export class Accueil {
  listeProjets: Projet[] = LISTE_PROJETS;
}