import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
// Importation de ta vraie liste de projets depuis ton fichier data
import { LISTE_PROJETS } from '../projet.data';

@Component({
  selector: 'app-projet-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projet-detail.html',
  styleUrl: './projet-detail.css',
})
export class ProjetDetail implements OnInit {
  // Variable qui contiendra le projet trouvé
  projetTrouve: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // 1. On récupère l'ID présent dans l'URL (ex: /projet/1 pour KOIF BOOK, /projet/2 pour Jàngukaay, etc.)
    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam) {
      const idNumber = Number(idParam);
      // 2. On cherche dans ton fichier LISTE_PROJETS le projet qui correspond à cet ID
      this.projetTrouve = LISTE_PROJETS.find(p => p.id === idNumber);
    }
  }
}