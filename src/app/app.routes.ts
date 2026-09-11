import { Routes } from '@angular/router';
import { Accueil } from './accueil/accueil';
import { ProjetDetail } from './projet-detail/projet-detail';

export const routes: Routes = [
  { path: '', component: Accueil },
  { path: 'projet/:id', component: ProjetDetail },
];