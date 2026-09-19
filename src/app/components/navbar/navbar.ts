import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top modern-navbar">
      <div class="container py-2">
        <!-- Logo avec un effet stylisé -->
        <a class="navbar-brand fw-bold brand-logo" routerLink="/">
          <span class="text-warning">~/</span>portfolio
        </a>
        
        <!-- Bouton hamburger moderne -->
        <button 
          class="navbar-toggler custom-toggler border-0 shadow-none" 
          type="button" 
          (click)="toggleNavbar()">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Menu de navigation -->
        <div class="collapse navbar-collapse" [ngClass]="{'show': isNavbarOpen}" id="navbarNav">
          <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            <li class="nav-item">
              <a class="nav-link px-3 rounded-pill" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="closeNavbar()">Accueil</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-3 rounded-pill" routerLink="/about" routerLinkActive="active" (click)="closeNavbar()">À propos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-3 rounded-pill" href="#services" (click)="closeNavbar()">Services</a>
            </li>
            <li class="nav-item ms-lg-2 mt-2 mt-lg-0">
              <a class="btn btn-warning px-4 py-2 rounded-pill fw-semibold text-dark btn-contact shadow-sm" routerLink="/contact" (click)="closeNavbar()">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    /* Effet Verre Dépoli (Glassmorphism) collé en haut */
    .modern-navbar {
      background: rgba(15, 23, 42, 0.85); /* Fond sombre bleuté semi-transparent */
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      transition: all 0.3s ease;
    }

    /* Style du Logo façon console de dev */
    .brand-logo {
      font-family: monospace;
      font-size: 1.25rem;
      letter-spacing: -0.5px;
      color: #ffffff !important;
    }

    /* Liens de navigation avec des pilules au survol */
    .navbar-nav .nav-link {
      color: #94a3b8 !important; /* Gris clair élégant */
      font-weight: 500;
      font-size: 0.95rem;
      transition: all 0.25s ease-in-out;
    }

    .navbar-nav .nav-link:hover, 
    .navbar-nav .nav-link.active {
      color: #ffffff !important;
      background-color: rgba(255, 255, 255, 0.06);
    }

    /* Bouton Contact mis en valeur en mode "CTA" */
    .btn-contact {
      font-size: 0.95rem;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .btn-contact:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(255, 193, 7, 0.3) !important;
    }

    /* Ajustement du bouton hamburger mobile */
    .custom-toggler:focus {
      box-shadow: none;
    }
  `]
})
export class NavbarComponent {
  isNavbarOpen = false;

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  closeNavbar() {
    this.isNavbarOpen = false;
  }
}