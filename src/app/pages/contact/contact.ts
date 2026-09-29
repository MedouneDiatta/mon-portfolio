import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="container py-5">
      <h1 class="mb-4 text-primary">Nous contacter</h1>
      <div class="row justify-content-center">
        <div class="col-md-8">
          <form (ngSubmit)="onSubmit()" class="p-4 bg-white rounded shadow-sm border">
            <div class="mb-3">
              <label class="form-label">Nom</label>
              <input type="text" class="form-control" [(ngModel)]="formData.name" name="name" required placeholder="Votre nom">
            </div>
            <div class="mb-3">
              <label class="form-label">Email</label>
              <input type="email" class="form-control" [(ngModel)]="formData.email" name="email" required placeholder="votre@email.com">
            </div>
            <div class="mb-3">
              <label class="form-label">Message</label>
              <textarea class="form-control" rows="4" [(ngModel)]="formData.message" name="message" required placeholder="Votre message..."></textarea>
            </div>
            <button type="submit" class="btn btn-primary w-100">Envoyer</button>
          </form>
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