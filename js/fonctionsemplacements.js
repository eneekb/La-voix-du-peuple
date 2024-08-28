import { largeurCarte } from "./script.js";
import { hauteurCarte } from "./script.js";
import { tableauDesEmplacements } from "./script.js";

// Initialiser le tableau des emplacements
export function initialiserLeTaleauDesEmplacements() {
    console.time("initialiserLeTableauDesEmplacements");
    // const tableauDesEmplacements = [];
    let numeroEmplacement = 0;

    // Créer un canvas temporaire pour charger l'image de la carte
    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');
    const img = new Image();
    img.src = "images/carte0.png";
    img.onload = function() {
        // Ajuster la taille du canvas temporaire à la taille de l'image
        tempCanvas.width = img.width;
        tempCanvas.height = img.height;

        // Dessiner l'image sur le canvas temporaire
        tempCtx.drawImage(img, 0, 0);

        // Initialiser chaque type dans le tableau des emplacements
        for (let x = 0; x < largeurCarte; x++) {
            for (let y = 0; y < hauteurCarte; y++) {
                // Récupérer les données de couleur du pixel correspondant à l'emplacement sur l'image
                const pixelData = tempCtx.getImageData(x, y, 1, 1).data;
                const couleur = `rgb(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]})`;

                // Déterminer le type en fonction de la couleur
                let type;
                if (couleur === 'rgb(135, 215, 255)') { // Bleu pour l'eau
                    type = 'eau';
                } else if (couleur === 'rgb(0, 255, 0)') { // Vert pour la forêt
                    type = 'forêt';
                } else if (couleur === 'rgb(255, 255, 255)') { // Blanc pour terrain libre
                    type = 'terrain';
                } else {
                    type = 'inconnu'; // Par défaut
                }

                // Créer un objet pour chaque emplacement
                const emplacement = {
                    numero: numeroEmplacement,
                    coordonnees: { x: x, y: y },
                    type: type,
                    scoreAttractivite: 0
                };

                // Ajouter l'objet au tableau
                tableauDesEmplacements.push(emplacement);

                // Incrémenter le numéro de l'emplacement
                numeroEmplacement++;
            }
        }
    

    };

    
    console.timeEnd("initialiserLeTableauDesEmplacements");
    return tableauDesEmplacements;
}


