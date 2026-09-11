import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="container py-5">
      <h1 class="mb-4 text-primary">À propos de nous</h1>
      <p class="lead">Découvrez les membres du binôme et nos compétences.</p>
      
      <div class="row mt-4">
        <div class="col-md-6 mb-4">
          <div class="card h-100 shadow-sm border-primary">
            <div class="card-body">
              <h3 class="card-title text-primary">Medoune Diatta</h3>
              <p class="card-text">Étudiant en L1 Informatique. Passionné par le développement web et l'architecture des applications.</p>
              <h6>Compétences :</h6>
              <ul class="list-unstyled">
                <li>✅ Angular & TypeScript</li>
                <li>✅ Git & GitHub</li>
                <li>✅ Services & Routing</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="col-md-6 mb-4">
          <div class="card h-100 shadow-sm border-primary">
            <div class="card-body">
              <h3 class="card-title text-primary">[Ton Nom]</h3>
              <p class="card-text">Étudiant en L1 Informatique. Spécialisé dans l'intégration UI, le design responsive et les composants Angular.</p>
              <h6>Compétences :</h6>
              <ul class="list-unstyled">
                <li>✅ HTML / CSS / Bootstrap</li>
                <li>✅ Composants & Directives</li>
                <li>✅ Data Binding</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-4 p-4 bg-light rounded shadow-sm">
        <h4 class="text-primary">Objectif du projet</h4>
        <p>Ce site vitrine statique a été réalisé dans le cadre du cours de Technologie Web 3. Il démontre notre maîtrise des composants, du data binding, des services et du routage dans Angular.</p>
      </div>
    </div>
  `
})
export class AboutComponent {}