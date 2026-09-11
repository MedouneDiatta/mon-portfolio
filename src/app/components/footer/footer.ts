import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-dark text-white text-center py-4 mt-auto">
      <div class="container">
        <p class="mb-1">&copy; 2026 Mon Portfolio - Projet Technologie Web 3</p>
        <small class="text-muted">Réalisé par Medoune Diatta & [Ton Nom] - L1 Informatique</small>
      </div>
    </footer>
  `
})
export class FooterComponent {}