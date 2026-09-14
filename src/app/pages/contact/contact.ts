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
        
        <!-- COLONNE GAUCHE : Le formulaire de contact -->
        <div class="col-md-6">
          <!-- On utilise #contactForm="ngForm" pour suivre l'état global du formulaire -->
          <form (ngSubmit)="onSubmit(contactForm)" #contactForm="ngForm" class="p-4 bg-white rounded shadow-sm border">
            
            <!-- Champ : Nom -->
            <div class="mb-3">
              <label class="form-label fw-semibold">Nom</label>
              <input 
                type="text" 
                class="form-control" 
                [(ngModel)]="formData.name" 
                name="name" 
                required 
                minlength="2"
                [pattern]="namePattern"
                #nameField="ngModel"
                placeholder="Votre nom">
              
              <!-- Messages d'erreur dynamiques pour le nom -->
              <div *ngIf="nameField.invalid && (nameField.dirty || nameField.touched || contactForm.submitted)" class="text-danger small mt-1">
                <div *ngIf="nameField.errors?.['required']">Le nom est obligatoire.</div>
                <div *ngIf="nameField.errors?.['minlength']">Le nom doit contenir au moins 2 caractères.</div>
                <div *ngIf="nameField.errors?.['pattern']">Le nom ne doit pas contenir de chiffres ou de caractères spéciaux.</div>
              </div>
            </div>
            
            <!-- Champ : Email -->
            <div class="mb-3">
              <label class="form-label fw-semibold">Email</label>
              <input 
                type="email" 
                class="form-control" 
                [(ngModel)]="formData.email" 
                name="email" 
                required 
                email
                #emailField="ngModel"
                placeholder="votre&#64;email.com">
              
              <!-- Messages d'erreur dynamiques pour l'email -->
              <div *ngIf="emailField.invalid && (emailField.dirty || emailField.touched || contactForm.submitted)" class="text-danger small mt-1">
                <div *ngIf="emailField.errors?.['required']">L'email est obligatoire.</div>
                <div *ngIf="emailField.errors?.['email']">Veuillez entrer une adresse email </div>
              </div>
            </div>
            
            <!-- Champ : Message -->
            <div class="mb-3">
              <label class="form-label fw-semibold">Message</label>
              <textarea 
                class="form-control" 
                rows="4" 
                [(ngModel)]="formData.message" 
                name="message" 
                required 
                minlength="10"
                #messageField="ngModel"
                placeholder="Votre message"></textarea>
              
              <!-- Messages d'erreur dynamiques pour le message -->
              <div *ngIf="messageField.invalid && (messageField.dirty || messageField.touched || contactForm.submitted)" class="text-danger small mt-1">
                <div *ngIf="messageField.errors?.['required']">Le message est obligatoire.</div>
                <div *ngIf="messageField.errors?.['minlength']">Votre message est trop court (10 caractères minimum).</div>
              </div>
            </div>
            
            <!-- Bouton d'envoi : Désactivé si le formulaire n'est pas valide -->
            <button type="submit" class="btn btn-primary w-100">
              Envoyer le message
            </button>
          </form>
        </div>

        <!-- COLONNE DROITE : Informations complémentaires -->
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
              <p class="mb-2"> <strong>Basé à :</strong> Thies, Sénégal</p>
              <p class="mb-2">✉️ <strong>Email :</strong> medoune&#64;exemple.com</p>
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

  // Regex (Expression régulière) pour autoriser uniquement les lettres, espaces, tirets et accents (pour les prénoms/noms)
  namePattern = '^[a-zA-ZÀ-ÿ\\s-]+$';

  // Fonction déclenchée lors de la soumission
  onSubmit(form: any) {
    // On vérifie si tout est valide avant d'exécuter l'action
    if (form.valid) {
      alert(`Merci ${this.formData.name} ! Votre message a bien été validé et envoyé.`);
      // Réinitialisation du formulaire et des états de validation
      form.resetForm();
      this.formData = { name: '', email: '', message: '' };
    } else {
      alert('Veuillez corriger les erreurs dans le formulaire avant de l\'envoyer.');
    }
  }
}