import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="container py-5">
      
      <!-- En-tête -->
      <div class="text-center mb-5">
        <h1 class="display-5 text-primary fw-bold">À propos de nous</h1>
        <p class="lead mt-3 text-muted">
          Bienvenue sur <strong>DevPortfolio</strong>, notre portfolio réalisé dans le cadre de notre formation en 
          <strong>Licence 1 Informatique</strong>.
        </p>
        <p class="text-muted">
          Nous sommes <strong>Abdourahmane Diouf</strong> et <strong>Medoune S Diatta</strong>, deux étudiants passionnés 
          par l'informatique et le développement web, mettant en pratique le framework <strong>Angular</strong>.
        </p>
      </div>

      <!-- Cartes des membres du binôme -->
      <div class="row g-4 mb-5">
        
        <!-- Carte Abdourahmane -->
        <div class="col-md-6">
          <div class="card h-100 shadow-sm border">
            <div class="card-header bg-white border-bottom py-3">
              <h3 class="h5 mb-0 text-primary fw-bold">Abdourahmane Diouf</h3>
            </div>
            <div class="card-body">
              <p class="text-muted">Étudiant en <strong>Licence 1 Informatique</strong>, je m'intéresse particulièrement au développement web et à la conception d'interfaces modernes.</p>
              
              <h6 class="text-primary fw-bold mt-4">Mes tâches dans ce projet :</h6>
              <ul class="list-unstyled text-muted">
                <li>• Conception de la barre de navigation (Navbar)</li>
                <li>• Création du Footer commun aux différentes pages</li>
                <li>• Intégration et mise en forme avec Bootstrap</li>
                <li>• Création de la page À propos et organisation de l'interface</li>
              </ul>

              <h6 class="text-primary fw-bold mt-3">Compétences :</h6>
              <div class="d-flex flex-wrap gap-2">
                <span class="badge bg-light text-dark border">HTML / CSS</span>
                <span class="badge bg-light text-dark border">Bootstrap</span>
                <span class="badge bg-light text-dark border">JavaScript</span>
                <span class="badge bg-light text-dark border">Angular</span>
                <span class="badge bg-light text-dark border">Git & GitHub</span>
                <span class="badge bg-light text-dark border">Langage C</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Carte Médoune -->
        <div class="col-md-6">
          <div class="card h-100 shadow-sm border">
            <div class="card-header bg-white border-bottom py-3">
              <h3 class="h5 mb-0 text-primary fw-bold">Medoune S Diatta</h3>
            </div>
            <div class="card-body">
              <p class="text-muted">Étudiant en <strong>Licence 1 Informatique</strong>, je m'intéresse au développement web ainsi qu'à la programmation en général.</p>
              
              <h6 class="text-primary fw-bold mt-4">Mes tâches dans ce projet :</h6>
              <ul class="list-unstyled text-muted">
                <li>• Création de la page d'accueil</li>
                <li>• Affichage dynamique des éléments sous forme de cartes</li>
                <li>• Création de la page de détail</li>
                <li>• Gestion de l'identifiant dans l'URL avec le routage Angular</li>
                <li>• Structuration des données utilisées dans le portfolio</li>
              </ul>

              <h6 class="text-primary fw-bold mt-3">Compétences :</h6>
              <div class="d-flex flex-wrap gap-2">
                <span class="badge bg-light text-dark border">HTML / CSS</span>
                <span class="badge bg-light text-dark border">JavaScript</span>
                <span class="badge bg-light text-dark border">Angular</span>
                <span class="badge bg-light text-dark border">Bootstrap</span>
                <span class="badge bg-light text-dark border">Langage C</span>
                <span class="badge bg-light text-dark border">Git & GitHub</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section Travail en équipe et Objectif -->
      <div class="row">
        <div class="col-12">
          <div class="card shadow-sm bg-light border-0">
            <div class="card-body p-4 p-md-5">
              <h4 class="text-primary fw-bold mb-3">Notre travail en équipe</h4>
              <p class="text-muted">
                Ce projet est réalisé en <strong>binôme</strong>. Nous avons choisi de travailler sur un portfolio afin de présenter nos compétences, nos projets et notre parcours tout en mettant en pratique les notions fondamentales d'Angular.
              </p>
              <p class="text-muted">
                Pour faciliter notre collaboration, nous avons divisé le travail par fonctionnalité. <strong>Abdourahmane</strong> s'est principalement chargé de la navigation, du Footer, de Bootstrap et de la page À propos, tandis que <strong>Médoune</strong> s'est chargé de la page d'accueil et de la page de détail. Nous travaillons cependant sur <strong>le même projet</strong> et collaborons pour assurer la cohérence de l'ensemble du site.
              </p>
              
              <h4 class="text-primary fw-bold mb-3 mt-4">Notre objectif</h4>
              <p class="text-muted">
                Notre objectif est de continuer à développer nos compétences en informatique et en développement web afin de réaliser progressivement des projets plus complets et plus professionnels.
              </p>
              <p class="mb-0 fst-italic text-muted">
                « DevPortfolio représente donc à la fois notre travail académique, notre apprentissage et notre volonté de progresser dans le domaine de l'informatique. »
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  `,
  styles: [`
    .card {
      transition: transform 0.2s ease;
    }
    .card:hover {
      transform: translateY(-5px);
    }
  `]
})
export class AboutComponent {}