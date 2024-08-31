import { largeurCarte } from "./script.js";
import { hauteurCarte } from "./script.js";
import { tableauDesEmplacements } from "./script.js";

// // Initialiser le tableau des emplacements
// export function initialiserLeTaleauDesEmplacements() {
//     console.time("initialiserLeTableauDesEmplacements");
//     // const tableauDesEmplacements = [];
//     let numeroEmplacement = 0;

//     // Créer un canvas temporaire pour charger l'image de la carte
//     const tempCanvas = document.createElement('canvas');
//     const tempCtx = tempCanvas.getContext('2d');
//     const img = new Image();
//     img.src = "images/carte0.png";
//     img.onload = function() {
//         // Ajuster la taille du canvas temporaire à la taille de l'image
//         tempCanvas.width = img.width;
//         tempCanvas.height = img.height;

//         // Dessiner l'image sur le canvas temporaire
//         tempCtx.drawImage(img, 0, 0);

//         // Initialiser chaque type dans le tableau des emplacements
//         for (let x = 0; x < largeurCarte; x++) {
//             for (let y = 0; y < hauteurCarte; y++) {
//                 // Récupérer les données de couleur du pixel correspondant à l'emplacement sur l'image
//                 const pixelData = tempCtx.getImageData(x, y, 1, 1).data;
//                 const couleur = `rgb(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]})`;

//                 // Déterminer le type en fonction de la couleur
//                 let type;
//                 if (couleur === 'rgb(135, 215, 255)') { // Bleu pour l'eau
//                     type = 'eau';
//                 } else if (couleur === 'rgb(0, 255, 0)') { // Vert pour la forêt
//                     type = 'forêt';
//                 } else if (couleur === 'rgb(255, 255, 255)') { // Blanc pour terrain libre
//                     type = 'terrain';
//                 } else {
//                     type = 'inconnu'; // Par défaut
//                 }

//                 // Créer un objet pour chaque emplacement
//                 const emplacement = {
//                     numero: numeroEmplacement,
//                     coordonnees: { x: x, y: y },
//                     type: type,
//                     scoreAttractivite: 0
//                 };

//                 // Ajouter l'objet au tableau
//                 tableauDesEmplacements.push(emplacement);

//                 // Incrémenter le numéro de l'emplacement
//                 numeroEmplacement++;
//             }
//         }
    

//     };

    
//     console.timeEnd("initialiserLeTableauDesEmplacements");
//     return tableauDesEmplacements;
// }

export async function initialiserLeTaleauDesEmplacements() {
    console.time("initialiserLeTableauDesEmplacements");
    let numeroEmplacement = 0;

    // Créer deux canvas temporaires pour charger les images de la carte et de l'attractivité
    const tempCanvasType = document.createElement('canvas');
    const tempCtxType = tempCanvasType.getContext('2d');
    const tempCanvasAttractivite = document.createElement('canvas');
    const tempCtxAttractivite = tempCanvasAttractivite.getContext('2d');

    const imgType = new Image();
    imgType.src = "images/carte0.png"; // Image pour déterminer les types d'emplacements

    const imgAttractivite = new Image();
    imgAttractivite.src = "images/carteattractivite.png"; // Image pour déterminer les scores d'attractivité

    // imgType.onload = function() {
    //     imgAttractivite.onload = function() {
    // Utiliser des promesses pour charger les images
    await new Promise((resolve) => {
        imgType.onload = resolve;
    });

    await new Promise((resolve) => {
        imgAttractivite.onload = resolve;
    });

    // À ce point, les deux images sont complètement chargées
            // Ajuster la taille des canvas temporaires à la taille des images
            tempCanvasType.width = imgType.width;
            tempCanvasType.height = imgType.height;
            tempCanvasAttractivite.width = imgAttractivite.width;
            tempCanvasAttractivite.height = imgAttractivite.height;

            // Dessiner les images sur les canvas temporaires
            tempCtxType.drawImage(imgType, 0, 0);
            tempCtxAttractivite.drawImage(imgAttractivite, 0, 0);

            // Initialiser chaque type dans le tableau des emplacements
            for (let y = 0; y < hauteurCarte; y++) {
                for (let x = 0; x < largeurCarte; x++) {
                    // Récupérer les données de couleur du pixel correspondant à l'emplacement sur l'image de type
                    const pixelDataType = tempCtxType.getImageData(x, y, 1, 1).data;
                    const couleur = `rgb(${pixelDataType[0]}, ${pixelDataType[1]}, ${pixelDataType[2]})`;

                    // Récupérer les données de couleur du pixel correspondant à l'emplacement sur l'image d'attractivité
                    const pixelDataAttractivite = tempCtxAttractivite.getImageData(x, y, 1, 1).data;
                    const rougeAttractivite = pixelDataAttractivite[0];  // Récupérer la composante rouge du pixel

                    // Déterminer le type en fonction de la couleur sur l'image carte0
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

                    // Calculer le score d'attractivité en fonction de la composante rouge sur l'image carteattractivité
                    let scoreAttractivite = rougeAttractivite/10;  // Plus le rouge est intense, plus le score est élevé

                    // Créer un objet pour chaque emplacement
                    const emplacement = {
                        numero: numeroEmplacement,
                        coordonnees: { x: x, y: y },
                        type: type,
                        scoreAttractivite: scoreAttractivite
                    };
// console.log(emplacement);

                    // Ajouter l'objet au tableau
                    tableauDesEmplacements.push(emplacement);
// console.log(tableauDesEmplacements.length);
                    // Incrémenter le numéro de l'emplacement
                    numeroEmplacement++;
                }
            }
            console.timeEnd("initialiserLeTableauDesEmplacements");
    return tableauDesEmplacements;
}

