//=======================================
//Modele de données : interface "Projet"
//=======================================

//En typeScript, une interface sert de contrat
//elle définit la structure exacte qu'un projet doit respecter

export interface Projet{
    id:number;//identifiant unique
    titre:string;
    description:string;
    technos:string[];//tableau de texte contenant les technologie
    lienGithub?:string;//le ? singifie que le lien est optionnel
}