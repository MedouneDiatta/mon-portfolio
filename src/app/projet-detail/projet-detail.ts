import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projet-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projet-detail.html',
  styleUrl: './projet-detail.css',
})
export class ProjetDetail implements OnInit {
  // Variable qui contiendra le projet trouvé à afficher
  projetTrouve: any;

  // Liste temporaire des projets (la même que tu as sur l'accueil, à adapter si tu l'as mise dans un service)
  listeProjets = [
    { id: 1, titre: 'Application Web Angular', description: 'Création dun portfolio dynamique en binôme.', technos: ['Angular', 'TypeScript', 'Bootstrap'], lienGithub: 'https://github.com/MedouneDiatta/mon-portfolio' },
    { id: 2, titre: 'Site E-commerce', description: 'Développement dun site de vente en ligne.', technos: ['HTML', 'CSS', 'JavaScript'], lienGithub: '' }
  ];

  // Injection de ActivatedRoute pour lire les paramètres de l'URL
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // 1. On récupère l'ID présent dans l'URL (ex: /projet/1 donne id = "1")
    const idParam = this.route.snapshot.paramMap.get('id');
    
    if (idParam) {
      const idNumber = Number(idParam);
      // 2. On cherche dans notre tableau le projet qui correspond à cet ID
      this.projetTrouve = this.listeProjets.find(p => p.id === idNumber);
    }
  }
}