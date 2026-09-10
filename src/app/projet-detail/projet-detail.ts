import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Projet } from '../projet.model';
import { LISTE_PROJETS } from '../projet.data';

@Component({
  selector: 'app-projet-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projet-detail.html',
  styleUrl: './projet-detail.css',
})
export class ProjetDetail implements OnInit {
  projetTrouve: Projet | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // On récupère l'ID depuis l'URL
    const idParam = this.route.snapshot.paramMap.get('id');
    
    if (idParam) {
      const idNumber = Number(idParam);
      //  On cherche le projet correspondant dans nos données statiques
      this.projetTrouve = LISTE_PROJETS.find(p => p.id === idNumber);
    }
  }
}