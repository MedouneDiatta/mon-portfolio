import { Projet } from "./projet.model";

export const LISTE_PROJETS: Projet[] = [
  {
    id: 1,
    titre: "KOIF BOOK (Application pour coiffeurs)",
    description: "Plateforme dédiée aux professionnels de la coiffure pour la gestion des rendez-vous et la vitrine des prestations.",
    technos: ["JavaScript(js)", "HTML", "Bootstrap CSS","Git / GitHub"],
    lienGithub:"https://github.com/MedouneDiatta/app-coiffure",
    image: "assets/logo3.png" // Sans le slash au début
  },
  {
    id: 2,
    titre: "Projet Jàngukaay (Gestion d'étudiants en C)",
    description: "Application console modulaire en langage C avec gestion de base de données d'étudiants (structures, pointeurs, tableaux), analyses, tris multi-critères, et module filières.",
    technos: ["Langage C","Structures", "Makefile", "GitLab"],
    lienGithub:"https://gitlab.com/MedouneDev/jangukaay",
    image: "assets/jangukaay.jpg" // Sans le slash au début
  },
  {
    id: 3,
    titre: "Calculatrice Interactive",
    description: "Application de calculatrice fonctionnelle développée en JavaScript pur pour la manipulation du DOM et des événements.",
    technos: ["JavaScript (JS)", "HTML5", "CSS3","Git / GitHub"],
    lienGithub:"https://github.com/MedouneDiatta/Calculatrice-js",
    image: "assets/calculatrice.jpg" // Sans le slash au début
  },
  {
    id: 4,
    titre: "Application Météo",
    description: "Application web connectée à une API externe pour consulter la météo en temps réel de n'importe quelle ville.",
    technos: ["JavaScript(js)", "API Rest","HTML","CSS","Git / GitHub"],
    lienGithub:"https://github.com/MedouneDiatta/app-meteo",
    image: "assets/meteo.jpg" // Sans le slash au début
  },
  {
    id: 5,
    titre: "Tableau Kanban (Gestion de tâches)",
    description: "Outil de productivité inspiré de Trello pour organiser et classer les tâches par colonnes d'état.",
    technos: ["JavaScript", "HTML", "CSS","Git / GitHub"],
    lienGithub:"https://github.com/MedouneDiatta/kanban-app",
    image: "assets/kanban.jpg" // Avec 'assets' (avec le s) et sans slash
  },
  {
    id: 6,
    titre: "Mon Portfolio Personnel (Ce site)",
    description: "Application web développée en binôme avec Angular et Bootstrap pour présenter notre parcours et nos projets.",
    technos: ["Angular", "TypeScript", "Bootstrap", "Git / GitHub"],
    lienGithub:"https://github.com/MedouneDiatta/mon-portfolio",
    image: "assets/porfolio.jpg" // Sans le slash au début
  }
];