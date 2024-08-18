// Récupération des éléments HTML
const modifyButton = document.getElementById('modifyButton');
const generationButton = document.getElementById('generationButton');

// Import des fonctions nécessaires
import {ChargerLaCarteInitiale} from './fonctions.js';
import {ModifierPixels} from './fonctions.js';
import { genererIndividu } from './fonctionspeuple.js';
import { ajouterIndividusAuTableauDePopulation } from './fonctionspeuple.js';


// Déclaration des variables globales
let tableauDePopulationRouge = [];


ChargerLaCarteInitiale();



// Événements des boutons (!!la rédaction des 2 boutons n'est pas la même pour pouvoir les appeler au clic)
modifyButton.addEventListener('click', ModifierPixels);
generationButton.addEventListener('click', function() { ajouterIndividusAuTableauDePopulation(tableauDePopulationRouge, 2);});




