// Récupération des éléments HTML
const generationButton = document.getElementById('generationButton');
const updateMapButton = document.getElementById('updateMapButton');
const startSimulationButton = document.getElementById('startSimulationButton');

// Déclaration des variables globales
export const largeurCarte = canvas.width;
export const hauteurCarte = canvas.height;
export let tableauDePopulationRouge = [];
export let tableauDesEmplacements = [];

// Import des fonctions nécessaires
import {ChargerLaCarteInitiale} from './fonctions.js';
import { ajouterIndividusAuTableauDePopulation } from './fonctionspeuple.js';
import { mettrelacarteajour } from './fonctions.js';
import { initialiserLeTaleauDesEmplacements } from './fonctionsemplacements.js';
import { lancerSimulation } from './fonctions.js';

// Import des variables nécessaires
import { canvas } from './fonctions.js';

// Lancement du jeu
ChargerLaCarteInitiale();
tableauDesEmplacements = initialiserLeTaleauDesEmplacements();


// Événements des boutons (!!la rédaction des 2 boutons n'est pas la même pour pouvoir les appeler au clic)
generationButton.addEventListener('click', function() { ajouterIndividusAuTableauDePopulation(tableauDePopulationRouge, 50);});
updateMapButton.addEventListener('click', mettrelacarteajour);
startSimulationButton.addEventListener('click', function() {
    lancerSimulation(1, 10, 1000000); // Nbre de répétitions, tps d'attente entre les répétitions, nbre d'individus à chaque répétition
});














