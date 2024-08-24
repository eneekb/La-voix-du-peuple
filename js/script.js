// Récupération des éléments HTML
const modifyButton = document.getElementById('modifyButton');
const generationButton = document.getElementById('generationButton');
const updateMapButton = document.getElementById('updateMapButton');


// Import des fonctions nécessaires
import {ChargerLaCarteInitiale} from './fonctions.js';
import {ModifierPixels} from './fonctions.js';
import { genererIndividu } from './fonctionspeuple.js';
import { ajouterIndividusAuTableauDePopulation } from './fonctionspeuple.js';
import { remplirTableauDeCoordonnees } from './fonctions.js'
import { mettrelacarteajour } from './fonctions.js';


// Déclaration des variables globales
export let tableauDePopulationRouge = [];
export let tableauDeCoordonnees = [];

//Premier remplissage du tableau de coordonnées
remplirTableauDeCoordonnees();

// Affichage du tableau
console.log("tableau de coordonnées:")
console.log(tableauDeCoordonnees);

// 


ChargerLaCarteInitiale();


// Événements des boutons (!!la rédaction des 2 boutons n'est pas la même pour pouvoir les appeler au clic)
modifyButton.addEventListener('click', ModifierPixels);
generationButton.addEventListener('click', function() { ajouterIndividusAuTableauDePopulation(tableauDePopulationRouge, 1000000);});
updateMapButton.addEventListener('click', mettrelacarteajour);


