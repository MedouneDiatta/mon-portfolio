import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common'; // Nécessaire pour [ngClass] ou les conditions

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div class="container">
        <a class="navbar-brand fw-bold" routerLink="/">Mon Portfolio</a>
        
        <!-- Bouton hamburger cliquable qui appelle la fonction toggleNavbar() -->
        <button 
          class="navbar-toggler" 
          type="button" 
          (click)="toggleNavbar()">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- On applique la classe 'show' dynamiquement selon l'état -->
        <div class="collapse navbar-collapse" [ngClass]="{'show': isNavbarOpen}" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="closeNavbar()">Accueil</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/about" routerLinkActive="active" (click)="closeNavbar()">À propos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/contact" routerLinkActive="active" (click)="closeNavbar()">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent {
  isNavbarOpen = false;

  // Ouvre ou ferme le menu au clic sur le bouton hamburger
  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  // Ferme automatiquement le menu lorsqu'on clique sur un lien (très pratique sur mobile)
  closeNavbar() {
    this.isNavbarOpen = false;
  }
}