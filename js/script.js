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
import {ChargerLaCarteInitiale} from './fonctions.js';
import { ajouterIndividusAuTableauDePopulation } from './fonctionspeuple.js';
import { mettrelacarteajour } from './fonctions.js';
import { initialiserLeTaleauDesEmplacements } from './fonctionsemplacements.js';
import { lancerSimulation } from './fonctions.js';

// Import des variables nécessaires
import { canvas } from './fonctions.js';


import { Individu } from './fonctionspeuple.js';

// Lancement du jeu
function lancementDuJeu(){
    // Charger la carte initiale
    ChargerLaCarteInitiale();
    // Initialiser le tableau des emplacements
    (async function main() {
        const tableauDesEmplacements = await initialiserLeTaleauDesEmplacements();
        // Ici, vous pouvez utiliser `tableauDesEmplacements` pour d'autres opérations qui nécessitent que le tableau soit fini pour se lancer

    })();
}
lancementDuJeu();

// Événements des boutons (!!la rédaction des 2 boutons n'est pas la même pour pouvoir les appeler au clic)
generationButton.addEventListener('click', function() { ajouterIndividusAuTableauDePopulation(tableauDePopulationRouge, 50);});
updateMapButton.addEventListener('click', mettrelacarteajour);
createIndividuButton.addEventListener('click', demanderCoordonneesIndividu);
startSimulation10Button.addEventListener('click', function() {
    lancerSimulation(1, 10, 10); // Nbre de répétitions, tps d'attente, nbre d'individus à chaque répétition
});
startSimulation100Button.addEventListener('click', function() {
    lancerSimulation(1, 10, 100); // Nbre de répétitions, tps d'attente , nbre d'individus à chaque répétition
});
startSimulation1000Button.addEventListener('click', function() {
    lancerSimulation(1, 10, 1000); // Nbre de répétitions, tps d'attente , nbre d'individus à chaque répétition
});
startSimulation10000Button.addEventListener('click', function() {
    lancerSimulation(1, 10, 10000); // Nbre de répétitions, tps d'attente , nbre d'individus à chaque répétition
});
startSimulation100000Button.addEventListener('click', function() {
    lancerSimulation(1, 10, 100000); // Nbre de répétitions, tps d'attente , nbre d'individus à chaque répétition
});







// Demander coordonnées au joueur et créer un individu correspondant
function demanderCoordonneesIndividu() {
    // Demander à l'utilisateur de saisir les coordonnées
    const coordx = parseInt(prompt("Entrez la coordonnée X pour un individu :"), 10);
    const coordy = parseInt(prompt("Entrez la coordonnée Y pour un individu :"), 10);

    // Vérifier que les coordonnées sont valides
    if (!isNaN(coordx) && !isNaN(coordy) && coordx >= 0 && coordx < largeurCarte && coordy >= 0 && coordy < hauteurCarte) {
        // Créer le premier individu
        const individu = new Individu("Seb", "Bruand", "M", 14, coordx, coordy);
        tableauDePopulationRouge.push(individu);  // Ajout au tableau de population rouge si nécessaire
    } else {
        alert("Coordonnées invalides. Veuillez réessayer.");
    }
}









