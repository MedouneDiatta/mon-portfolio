import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="container py-5">
      <div class="row align-items-center g-5">

        <!-- Colonne gauche : Informations / Accroche professionnelle -->
        <div class="col-lg-6">
          <h2 class="fw-bold mb-3 text-primary">Travaillons ensemble !</h2>
          <p class="text-muted mb-4">
            Un projet, une question ou une opportunité de collaboration ? N'hésitez pas à nous envoyer un message. Nous vous répondrons rapidement.
          </p>

          <div class="d-flex flex-column gap-3 mb-4">
            <div class="d-flex align-items-start gap-3">
              <span class="badge bg-primary-subtle text-primary p-2 rounded-circle">
                <i class="bi bi-envelope-fill fs-5"></i>
              </span>
              <div class="d-flex flex-column">
                <span class="fw-medium">diattamedounesambiane@gmail.com</span>
                <span class="fw-medium">dioufabdourahmane864@gmail.com</span>
              </div>
            </div>
            <div class="d-flex align-items-center gap-3">
              <span class="badge bg-primary-subtle text-primary p-2 rounded-circle">
                <i class="bi bi-geo-alt-fill fs-5"></i>
              </span>
              <span class="fw-medium">Sénégal, Thiès</span>
            </div>
          </div>
        </div>

        <!-- Colonne droite : Le formulaire moderne et épuré -->
        <div class="col-lg-6">
          <div class="card shadow-sm border-0 p-4 rounded-4">
            <h3 class="h4 mb-4 fw-semibold">Envoyez-nous un message</h3>

            <form (ngSubmit)="onSubmit()">
              <div class="mb-3">
                <label class="form-label">Votre Nom</label>
                <input type="text" class="form-control" [(ngModel)]="formData.name" name="name" required placeholder="Ex : Maty Dieye">
              </div>

              <div class="mb-3">
                <label class="form-label">Votre Email</label>
                <input type="email" class="form-control" [(ngModel)]="formData.email" name="email" required placeholder="nom@example.com">
              </div>

              <div class="mb-3">
                <label class="form-label">Votre Message</label>
                <textarea class="form-control" rows="4" [(ngModel)]="formData.message" name="message" required placeholder="Écrivez votre message ici..."></textarea>
              </div>

              <button type="submit" class="btn btn-primary w-100 py-2 fw-semibold">Envoyer le message</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  `
})
export class ContactComponent {
  formData = { name: '', email: '', message: '' };

  onSubmit() {
    alert(`Merci ${this.formData.name} ! Message envoyé (simulation).`);
    this.formData = { name: '', email: '', message: '' };
  }
}
