import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  nom: string = '';
  email: string = '';
  message: string = '';
  envoye: boolean = false;

  onSubmit() {
    console.log('Formulaire envoyé:', { nom: this.nom, email: this.email, message: this.message });
    this.envoye = true;
  }
}
