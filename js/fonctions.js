export const canvas = document.getElementById('cartedumonde');
const ctx = canvas.getContext('2d');

//Import des variables nécessaires
import { tableauDePopulationRouge } from './script.js';

// Charger la carte initiale
export function ChargerLaCarteInitiale() {
    const img = new Image();
    img.src = "images/carte0.png";
    img.onload = function() {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
}

// Mettre à jour la carte
export function mettrelacarteajour() {
    console.log("fonction mettrelacarteajour");
    // Démarrer le chronométrage pour mesurer le temps d'exécution
    console.time('Temps d\'exécution de mettrelacarteajour');

    // Obtenir les données de l'image une seule fois
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    let pixelsModifies = 0;

    // Parcourir chaque individu dans la population
    tableauDePopulationRouge.forEach((individu) => {
        const x = individu.coordx;
        const y = individu.coordy;
        // console.log('ok')
        // // Vérification des coordonnées
        // if (x < 0 || x >= canvas.width || y < 0 || y >= canvas.height) {
        //     console.log(`Coordonnées invalides pour l'individu: x=${x}, y=${y}`);
        //     return;
        // }

        // Calculer l'index dans le tableau de données d'image
        const index = (y * canvas.width + x) * 4;
// console.log("index: " + index)
// console.log("rouge: " + data[index])
// console.log("vert: " + data[index + 1]) 
// console.log("bleu: " + data[index + 2]) 
        // Modifier les composantes RVB pour avoir du rouge de plus en plus foncé en fonction du nombre d'individus
        data[index] = Math.min(data[index] +200, 255);
        data[index + 1] = Math.max(data[index + 1] - 130, 0);
        data[index + 2] = Math.max(data[index + 2] - 130, 0);
// console.log("rouge après: " + data[index])
// console.log("vert après: " + data[index + 1])
// console.log("bleu après: " + data[index + 2])

        // Compter combien de pixels ont été modifiés
        if (data[index + 2] == 0) { 
            pixelsModifies++;
        }
    });

    // Mettre à jour le canvas avec les nouvelles données de l'image
    ctx.putImageData(imageData, 0, 0);

    console.log(`Nombre de pixels modifiés: ${pixelsModifies}`);
    console.log("Mise à jour de la carte terminée.");
    // Arrêter le chronométrage et afficher le temps d'exécution
    console.timeEnd('Temps d\'exécution de mettrelacarteajour');
}


