// Récupération des éléments HTML
const modifyButton = document.getElementById('modifyButton');


// Import des fonctions nécessaires
import {ChargerLaCarteInitiale} from './fonctions.js';
import {ModifierPixels} from './fonctions.js';



ChargerLaCarteInitiale();



// Événements des boutons
modifyButton.addEventListener('click', ModifierPixels);

