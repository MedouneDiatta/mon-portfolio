// =======================================
// Composant Services : Gère l'affichage des prestations proposées
// =======================================

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
  // Aucune logique complexe nécessaire pour l'instant, c'est un composant d'affichage
}