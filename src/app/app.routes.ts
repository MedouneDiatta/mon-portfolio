import { Routes } from '@angular/router';
import { Accueil } from './accueil/accueil';
import { ProjetDetail } from './projet-detail/projet-detail';
import { AboutComponent } from './pages/about/about';
import { ContactComponent } from './pages/contact/contact';

export const routes: Routes = [
  // Page d'accueil par défaut (ton travail)
  { path: '', component: Accueil },

  // Page À propos (récupérée du travail du binôme)
  { path: 'about', component: AboutComponent },

  // Page de détail d'un projet avec son identifiant
  { path: 'projet/:id', component: ProjetDetail },

  // Page Contact avec le formulaire requis par le cahier des charges
  { path: 'contact', component: ContactComponent },

  // Route de secours si une URL est introuvable (Wildcard)
  { path: '**', redirectTo: '', pathMatch: 'full' }
];