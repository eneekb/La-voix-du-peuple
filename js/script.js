// Récupération des éléments HTML
const generationButton = document.getElementById('generationButton');
const updateMapButton = document.getElementById('updateMapButton');

// Import des fonctions nécessaires
import {ChargerLaCarteInitiale} from './fonctions.js';
import { ajouterIndividusAuTableauDePopulation } from './fonctionspeuple.js';
import { mettrelacarteajour } from './fonctions.js';
import { initialiserLeTaleauDesEmplacements } from './fonctionsemplacements.js';

// Import des variables nécessaires
import { canvas } from './fonctions.js';


// Déclaration des variables globales
export const largeurCarte = canvas.width;
export const hauteurCarte = canvas.height;
export let tableauDePopulationRouge = [];
export let tableauDesEmplacements = [];


ChargerLaCarteInitiale();

tableauDesEmplacements = initialiserLeTaleauDesEmplacements();


// Événements des boutons (!!la rédaction des 2 boutons n'est pas la même pour pouvoir les appeler au clic)
generationButton.addEventListener('click', function() { ajouterIndividusAuTableauDePopulation(tableauDePopulationRouge, 1000000);});
updateMapButton.addEventListener('click', mettrelacarteajour);


