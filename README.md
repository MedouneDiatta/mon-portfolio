# Mon Portfolio Angular - Projet Technologie Web 3

## Présentation du projet

Ce projet consiste en la réalisation d'un site web statique de type portfolio professionnel, développé avec le framework **Angular** (dernière version stable). Il s'inscrit dans le cadre de l'évaluation du cours de Technologie Web 3 en Licence 1 Informatique.

🌐 **Découvrez le site déployé en direct ici :** [https://medoune-portfolio.web.app/](https://medoune-portfolio.web.app/)

## Binôme et Répartition des rôles

Ce projet a été réalisé en collaboration par :

- **Abdourahmane Diouf**  
  _Rôle :_ Développement de l'architecture Angular, gestion du routage, implémentation des formulaires (ngModel) et création des composants partagés (Footer, Navbar).

- **Médoune Diatta**  
  _Rôle :_ Conception du design UI/UX, intégration des animations (effet machine à écrire), développement des pages d'accueil et de détail, et configuration du déploiement Firebase Hosting.

## Fonctionnalités principales

- **Page d'accueil :** Présentation dynamique d'une liste de projets sous forme de cartes, générée à partir d'un tableau de données statiques (`*ngFor`).
- **Page de détail :** Affichage du contenu complet d'un projet sélectionné via son identifiant dans l'URL (`/projet/:id`).
- **Page À propos :** Présentation détaillée du binôme, des compétences et des contributions de chacun.
- **Page Contact :** Formulaire interactif utilisant le data-binding bidirectionnel d'Angular (`[(ngModel)]`) avec validation.
- **Navigation fluide :** Barre de navigation et pied de page (footer) communs à toutes les vues, gérés par le routeur Angular.
- **Design :** Mise en page soignée, moderne et responsive (CSS personnalisé).

## Instructions pour lancer le projet en local

Assurez-vous d'avoir [Node.js](https://nodejs.org/) et [Angular CLI](https://angular.io/cli) installés sur votre machine.

1. **Cloner le dépôt GitHub :**
   ```bash
   git clone https://github.com/MedouneDiatta/mon-portfolio.git
   cd mon-portfolio
   ```
