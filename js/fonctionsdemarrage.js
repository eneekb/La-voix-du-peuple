// Imports
import { ChargerLaCarteInitiale } from './fonctions.js';
import { initialiserLeTaleauDesEmplacements } from './fonctionsemplacements.js';
import { tableauAttractivite1, tableauAttractivite2, tableauAttractivite3, tableauAttractivite4, tableauAttractivite5, tableauAttractivite6, tableauAttractivite7, tableauAttractivite8, tableauAttractivite9, tableauAttractivite10, tableauAttractivite11, tableauAttractivite12, tableauAttractivite13,tableauAttractivite14, tableauAttractivite15, tableauAttractivite16, tableauAttractivite17, tableauAttractivite18, tableauAttractivite19, tableauAttractivite20 } from './varglobales.js';
import { tableauDesEmplacements } from './script.js';
import { mettreAJourTableau } from './fonctionsutiles.js';

// Lancement du jeu
export async function demarrageDuJeu(){
    
    // Charger la carte initiale
    ChargerLaCarteInitiale();
    
    // Initialiser le tableau des emplacements
    const tableauDesEmplacements = await initialiserLeTaleauDesEmplacements();
    
    // Créer les tableaux d'attractivité
    creerTableauxAttractivite();
}


function creerTableauxAttractivite(){
    // Filtrer les emplacements sans eau tout en gardant le score d'attractivité
    const tableauDesEmplacementsSansEau = tableauDesEmplacements.filter(emplacement => emplacement.type !== 'eau');
    tableauDesEmplacementsSansEau.sort((a, b) => b.scoreAttractivite - a.scoreAttractivite);

    // Créer les tableaux d'attractivité
    const tailleSegment = Math.floor(tableauDesEmplacementsSansEau.length / 20);
    const segments = [];
    for (let i = 0; i < 20; i++) {
        segments[i] = tableauDesEmplacementsSansEau.slice(i * tailleSegment, (i + 1) * tailleSegment);
    }

    // Assigner les segments aux variables globales
    mettreAJourTableau(tableauAttractivite1, segments[0]);
    mettreAJourTableau(tableauAttractivite2, segments[1]);
    mettreAJourTableau(tableauAttractivite3, segments[2]);
    mettreAJourTableau(tableauAttractivite4, segments[3]);
    mettreAJourTableau(tableauAttractivite5, segments[4]);
    mettreAJourTableau(tableauAttractivite6, segments[5]);
    mettreAJourTableau(tableauAttractivite7, segments[6]);
    mettreAJourTableau(tableauAttractivite8, segments[7]);
    mettreAJourTableau(tableauAttractivite9, segments[8]);
    mettreAJourTableau(tableauAttractivite10, segments[9]);
    mettreAJourTableau(tableauAttractivite11, segments[10]);
    mettreAJourTableau(tableauAttractivite12, segments[11]);
    mettreAJourTableau(tableauAttractivite13, segments[12]);
    mettreAJourTableau(tableauAttractivite14, segments[13]);
    mettreAJourTableau(tableauAttractivite15, segments[14]);
    mettreAJourTableau(tableauAttractivite16, segments[15]);
    mettreAJourTableau(tableauAttractivite17, segments[16]);
    mettreAJourTableau(tableauAttractivite18, segments[17]);
    mettreAJourTableau(tableauAttractivite19, segments[18]);
    mettreAJourTableau(tableauAttractivite20, segments[19]);
};




