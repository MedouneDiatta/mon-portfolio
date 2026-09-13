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
  soumis: boolean = false;

  // Regex : uniquement lettres, espaces, tirets et apostrophes
  regexNom = /^[a-zA-ZÀ-ÿ\s'-]+$/;
  regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Vérifications en temps réel
  get nomValide(): boolean {
    return this.nom.length >= 2 && this.regexNom.test(this.nom);
  }

  get emailValide(): boolean {
    return this.regexEmail.test(this.email);
  }

  get messageValide(): boolean {
    return this.message.length >= 10;
  }

  get formulaireValide(): boolean {
    return this.nomValide && this.emailValide && this.messageValide;
  }

  onSubmit() {
    this.soumis = true;
    if (this.formulaireValide) {
      console.log('Formulaire envoyé:', { nom: this.nom, email: this.email, message: this.message });
      this.envoye = true;
      alert('Message envoyé avec succès ! (simulation)');
    } else {
      alert('Veuillez corriger les erreurs dans le formulaire.');
    }
  }
}
