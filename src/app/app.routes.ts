import { Routes } from '@angular/router';
// 1. On importe le composant de détail pour qu'Angular le reconnaisse
import { ProjetDetail } from './projet-detail/projet-detail';
import { App } from './app';

export const routes: Routes = [
    // route par defaut pourla page d'accueil
    {path: '', component:App},
    
  //  La route dynamique avec son ID
  { path: 'projet/:id', component: ProjetDetail }
];