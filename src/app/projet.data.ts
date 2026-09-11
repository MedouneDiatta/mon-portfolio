// On importe l'interface Projet pour garantir la structure de nos données
import { Projet } from './projet.model';


// La liste de mes realisations

export const LISTE_PROJETS: Projet[] = [
  {
    id: 1,
    titre: "KOIF BOOK (Application pour coiffeurs)",
    description: "Plateforme dédiée aux professionnels de la coiffure pour la gestion des rendez-vous et la vitrine des prestations.",
    technos: ["JavaScript(js)", "HTML", "Bootstrap CSS","Git / GitHub"]
  },
  {
    id: 2,
    titre: "Projet Jàngukaay (Gestion d'étudiants en C)",
    description: "Application console modulaire en langage C avec gestion de base de données d'étudiants (structures, pointeurs, tableaux), analyses, tris multi-critères, et module filières.",
    technos: ["Langage C","Structures", "Makefile", "GitLab"]
  },
  {
    id: 3,
    titre: "Calculatrice Interactive",
    description: "Application de calculatrice fonctionnelle développée en JavaScript pur pour la manipulation du DOM et des événements.",
    technos: ["JavaScript (JS)", "HTML5", "CSS3","Git / GitHub"]
  },
  {
    id: 4,
    titre: "Application Météo",
    description: "Application web connectée à une API externe pour consulter la météo en temps réel de n'importe quelle ville.",
    technos: ["JavaScript(js)", "API Rest","HTML","CSS","Git / GitHub"]
  },
  {
    id: 5,
    titre: "Tableau Kanban (Gestion de tâches)",
    description: "Outil de productivité inspiré de Trello pour organiser et classer les tâches par colonnes d\'état.",
    technos: ["JavaScript", "HTML", "CSS","Git / GitHub"]
  },
  {
    id: 6,
    titre: "Mon Portfolio Personnel (Ce site)",
    description: "Application web développée en binôme avec Angular et Bootstrap pour présenter notre parcours et nos projets.",
    technos: ["Angular", "TypeScript", "Bootstrap", "Git / GitHub"]
  }
];