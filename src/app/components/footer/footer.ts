import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  // Calculée automatiquement : plus besoin de changer l'année à la main
  anneeActuelle: number = new Date().getFullYear();
}