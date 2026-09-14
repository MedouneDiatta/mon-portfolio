import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Conteneur principal avec un espacement vertical -->
    <div class="container py-5">
      
      <!-- Titre principal de la page -->
      <h1 class="mb-4 text-primary text-center">Contactez-moi</h1>
      
      <!-- Ligne Bootstrap pour organiser les colonnes -->
      <div class="row justify-content-center align-items-start g-4">
        
        <!-- COLONNE GAUCHE : Le formulaire de contact (prend la moitié de l'espace sur moyen/grand écran) -->
        <div class="col-md-6">
          <form (ngSubmit)="onSubmit()" class="p-4 bg-white rounded shadow-sm border">
            
            <!-- Champ : Nom -->
            <div class="mb-3">
              <label class="form-label fw-semibold">Nom</label>
              <input type="text" class="form-control" [(ngModel)]="formData.name" name="name" required placeholder="Votre nom">
            </div>
            
            <!-- Champ : Email -->
            <div class="mb-3">
              <label class="form-label fw-semibold">Email</label>
              <input type="email" class="form-control" [(ngModel)]="formData.email" name="email" required placeholder="votre&#64;email.com">
            </div>
            
            <!-- Champ : Message -->
            <div class="mb-3">
              <label class="form-label fw-semibold">Message</label>
              <textarea class="form-control" rows="4" [(ngModel)]="formData.message" name="message" required placeholder="Votre message..."></textarea>
            </div>
            
            <!-- Bouton d'envoi -->
            <button type="submit" class="btn btn-primary w-100">Envoyer le message</button>
          </form>
        </div>

        <!-- COLONNE DROITE : Informations complémentaires / Réseaux -->
        <div class="col-md-6">
          <div class="p-4 bg-light rounded shadow-sm border h-100">
            <h3 class="text-secondary mb-3">Parlons de vos projets !</h3>
            <p class="text-muted">
              Je suis actuellement à la recherche de nouvelles opportunités ou de projets passionnants. 
              N'hésitez pas à m'envoyer un message via le formulaire, je vous répondrai dans les plus brefs délais.
            </p>
            
            <hr class="my-4">
            
            <!-- Coordonnées -->
            <div class="contact-info">
              <p class="mb-2">📍 <strong>Basé à :</strong> Thies Sénégal</p>
              <p class="mb-2">✉️ <strong>Email :</strong> diattamedounesambiane&#64;gmail.com</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  `
})
export class ContactComponent {
  // Objet pour stocker les données du formulaire
  formData = { name: '', email: '', message: '' };

  // Fonction déclenchée lors de la soumission
  onSubmit() {
    alert(`Merci ${this.formData.name} ! Message envoyé (simulation).`);
    // Réinitialisation du formulaire après envoi
    this.formData = { name: '', email: '', message: '' };
  }
}