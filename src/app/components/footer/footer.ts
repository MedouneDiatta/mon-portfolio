import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer style="background-color: #212529; color: #ffffff; padding: 25px 0; margin-top: auto; border-top: 1px solid #444;">
      <div style="max-width: 1140px; margin: 0 auto; padding: 0 15px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px;">
        
        <!-- Texte de gauche -->
        <div>
          <p style="margin: 0; font-size: 14px;">&copy; 2026 - Projet Technologie Web 3</p>
          <p style="margin: 5px 0 0 0; font-size: 13px; color: #adb5bd;">
            Réalisé par Medoune Diatta (L1 Informatique)
          </p>
        </div>

        <!-- Liens réseaux simples -->
        <div style="display: flex; gap: 15px; font-size: 14px;">
          <a href="https://github.com" target="_blank" style="color: #adb5bd; text-decoration: none;">GitHub</a>
          <a href="https://gitlab.com" target="_blank" style="color: #adb5bd; text-decoration: none;">GitLab</a>
          <a href="https://linkedin.com" target="_blank" style="color: #adb5bd; text-decoration: none;">LinkedIn</a>
          <a href="https://instagram.com" target="_blank" style="color: #adb5bd; text-decoration: none;">Instagram</a>
          <a href="https://tiktok.com" target="_blank" style="color: #adb5bd; text-decoration: none;">TikTok</a>
        </div>

      </div>
    </footer>
  `
})
export class FooterComponent {}