import { Routes } from '@angular/router';
import { ProjetDetail } from './projet-detail/projet-detail';
import { AboutComponent } from './pages/about/about';
import { ContactComponent } from './pages/contact/contact';

export const routes: Routes = [
  // 1. Par défaut, on redirige vers la page À propos
  { path: '', redirectTo: '/about', pathMatch: 'full' },

  // 2. Ta page À propos
  { path: 'about', component: AboutComponent },

  // 3. La page de détail de Medoune (avec l'ID dans l'URL)
  { path: 'projet/:id', component: ProjetDetail },

  // 4. La page Contact (exigence du PDF avec [(ngModel)])
  { path: 'contact', component: ContactComponent }
];