import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Competence {
  nom: string;
  niveau: string;
}

interface Membre {
  nom: string;
  role: string;
  competences: Competence[];
  taches: string[];
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {
  membres: Membre[] = [
    {
      nom: 'Abdourahmane Diouf',
      role: 'Développement de l\'architecture Angular, gestion du routage, implémentation des formulaires (ngModel) et création des composants partagés (Footer).',
      competences: [
        { nom: 'HTML / CSS', niveau: 'Intermédiaire' },
        { nom: 'JavaScript', niveau: 'Intermédiaire' },
        { nom: 'Angular', niveau: 'Débutant / Intermédiaire' },
        { nom: 'Git & GitHub', niveau: 'Intermédiaire' },
        { nom: 'Langage C', niveau: 'Débutant' }
      ],
      taches: [
        'Conception de la barre de navigation (Navbar)',
        'Création du Footer commun aux différentes pages',
        'Implémentation du formulaire de contact avec validation',
        'Mise en forme et organisation de l\'interface (CSS)'
      ]
    },
    {
      nom: 'Médoune Diatta',
      role: 'Conception du design UI/UX, intégration des animations, développement des pages d\'accueil et de détail, et configuration du déploiement Firebase.',
      competences: [
        { nom: 'HTML / CSS', niveau: 'Intermédiaire' },
        { nom: 'JavaScript', niveau: 'Intermédiaire' },
        { nom: 'Angular', niveau: 'Débutant / Intermédiaire' },
        { nom: 'Git & GitHub', niveau: 'Intermédiaire' },
        { nom: 'Firebase Hosting', niveau: 'Débutant' }
      ],
      taches: [
        'Création de la page d\'accueil avec affichage dynamique',
        'Développement de la page de détail des projets',
        'Ajout d\'animations et d\'effets visuels (typing)',
        'Configuration et déploiement du site sur Firebase'
      ]
    }
  ];
}
