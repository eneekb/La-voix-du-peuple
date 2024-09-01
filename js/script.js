// Récupération des éléments HTML
const generationButton = document.getElementById('generationButton');
const updateMapButton = document.getElementById('updateMapButton');
const createIndividuButton = document.getElementById('createIndividuButton');
const startSimulation10Button = document.getElementById('startSimulation10Button');
const startSimulation100Button = document.getElementById('startSimulation100Button');
const startSimulation1000Button = document.getElementById('startSimulation1000Button');
const startSimulation10000Button = document.getElementById('startSimulation10000Button');
const startSimulation100000Button = document.getElementById('startSimulation100000Button');



// Déclaration des variables globales
export const largeurCarte = canvas.width;
export const hauteurCarte = canvas.height;
export let tableauDePopulationRouge = [];
export let tableauDesEmplacements = [];

// Import des fonctions nécessaires
import { ajouterIndividusAuTableauDePopulation } from './fonctionspeuple.js';
import { mettrelacarteajour } from './fonctions.js';
import { lancerSimulation } from './fonctions.js';
import { demarrageDuJeu } from './fonctionsdemarrage.js';
import { demanderCoordonneesIndividu } from './fonctionspeuple.js';

// Import des variables nécessaires
import { canvas } from './fonctions.js';


demarrageDuJeu();


// Événements des boutons
generationButton.addEventListener('click', function() { ajouterIndividusAuTableauDePopulation(tableauDePopulationRouge, 50);});

updateMapButton.addEventListener('click', mettrelacarteajour);

createIndividuButton.addEventListener('click', function() { demanderCoordonneesIndividu(tableauDePopulationRouge);
});

startSimulation10Button.addEventListener('click', function() {
    lancerSimulation(1, 10, 10); // Nbre de répétitions, tps d'attente, nbre d'individus à chaque répétition
});

startSimulation100Button.addEventListener('click', function() {
    lancerSimulation(1, 10, 100); // Nbre de répétitions, tps d'attente , nbre d'individus à chaque répétition
});

startSimulation1000Button.addEventListener('click', function() {
    lancerSimulation(20, 10, 1000); // Nbre de répétitions, tps d'attente , nbre d'individus à chaque répétition
});

startSimulation10000Button.addEventListener('click', function() {
    lancerSimulation(20, 10, 10000); // Nbre de répétitions, tps d'attente , nbre d'individus à chaque répétition
});

startSimulation100000Button.addEventListener('click', function() {
    lancerSimulation(10, 10, 100000); // Nbre de répétitions, tps d'attente , nbre d'individus à chaque répétition
});












