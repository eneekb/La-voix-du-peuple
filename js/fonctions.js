export const canvas = document.getElementById('cartedumonde');
const ctx = canvas.getContext('2d');

//Import des variables nécessaires
import { tableauDePopulationRouge } from './script.js';
import { tableauDeCoordonnees } from './script.js';

// Charger la carte initiale
export function ChargerLaCarteInitiale() {
    const img = new Image();
    img.src = "images/carte0.png";
    img.onload = function() {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
}

// Modifier certains pixels de l'image
export function ModifierPixels() {
    
    // Obtenir les données de l'image
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    console.log(data)

    // Tire un nbre entier aléatoire et le mets dans la variable nbrealeatoire
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let nbrealeatoire = getRandomInt(0, data.length/4);
    console.log(nbrealeatoire)
    
    // Colorer un pixel aléatoire en rouge
    data[nbrealeatoire*4] = 255;
    data[nbrealeatoire*4+1] = 0;
    data[nbrealeatoire*4+2] = 0;


    // for (let i = 0; i < data.length; i += 4) {
    //     // Change les pixels au centre du canvas en rouge
    //     if (data[i] = 255 && data[i + 1] > 200 && data[i + 2] > 200) {
    //         data[i] = 255;     // Rouge
    //         data[i + 1] = 0;   // Vert
    //         data[i + 2] = 0;   // Bleu
    //     }
    // }

    
    // Mettre à jour le canvas avec les nouvelles données de l'image
    ctx.putImageData(imageData, 0, 0);

}   



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







// // Mettre la carte à jour en fonction du nombre d'individus par emplacement
// export function mettrelacarteajour() {
//     console.log("fonction mettrelacarteajour");
//     console.time('temps d éxécution');
    
//     // Obtenir les données de l'image
//     const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//     const data = imageData.data;
    
//     // Parcourir le tableau de population et incrémenter le nombre d'individus pour chaque coordonnée
//     tableauDePopulationRouge.forEach((individu) => {
//         const x = individu.coordx;
//         const y = individu.coordy;

//         // Trouver l'entrée correspondante dans le tableau de coordonnées
//         const caseDuTableauDeCoordonnees = tableauDeCoordonnees.find(coord => coord.x === x && coord.y === y);

//         if (caseDuTableauDeCoordonnees) {
//             caseDuTableauDeCoordonnees.nbrouge += 1;

//             // Calculer l'index (position) du pixel dans le tableau de données de l'image
//             const index = (y * canvas.width + x) * 4;  // 4 car RGBA


//                 // Déterminer la couleur en fonction du nombre d'individus
//                 if (caseDuTableauDeCoordonnees.nbrouge === 1) {
//                     // Rouge clair
//                     data[index] = 255;      // Rouge
//                     data[index + 1] = 0;  // Vert
//                     data[index + 2] = 0;  // Bleu
//                 } else if (caseDuTableauDeCoordonnees.nbrouge >= 2 && caseDuTableauDeCoordonnees.nbrouge <= 4) {
//                     // Rouge moyen
//                     data[index] = 255;      // Rouge
//                     data[index + 1] = 100;  // Vert
//                     data[index + 2] = 100;  // Bleu
//                 } else if (caseDuTableauDeCoordonnees.nbrouge >= 5) {
//                     // Rouge foncé
//                     data[index] = 200;      // Rouge
//                     data[index + 1] = 0;    // Vert
//                     data[index + 2] = 0;    // Bleu
//                 }
//         }
//     });

//     // Mettre à jour le canvas avec les nouvelles données de l'image
//     ctx.putImageData(imageData, 0, 0);

//     console.timeEnd('temps d éxécution')
//     console.log("Mise à jour de la carte terminée.");
// }

// // Mettre la carte à jour en dessinant directement sur le canvas
// export function mettrelacarteajour() {
//     console.log("fonction mettrelacarteajour");
    
//     // Parcourir le tableau de population et incrémenter le nombre d'individus pour chaque coordonnée
//     tableauDePopulationRouge.forEach((individu) => {
//         let x = individu.coordx;
//         let y = individu.coordy;

//         // Trouver l'entrée correspondante dans le tableau de coordonnées
//         const caseDuTableauDeCoordonnees = tableauDeCoordonnees.find(coord => coord.x === x && coord.y === y);

//         if (caseDuTableauDeCoordonnees) {
//             caseDuTableauDeCoordonnees.nbrouge += 1;

//             // Déterminer la couleur en fonction du nombre d'individus
//             let couleur;
//             if (caseDuTableauDeCoordonnees.nbrouge === 1) {
//                 // Rouge clair
//                 couleur = 'rgb(255, 127, 127)';
//             } else if (caseDuTableauDeCoordonnees.nbrouge >= 2 && caseDuTableauDeCoordonnees.nbrouge <= 2) {
//                 // Rouge moyen
//                 couleur = 'rgb(255, 0, 0)';
//             } else if (caseDuTableauDeCoordonnees.nbrouge >= 3) {
//                 // Rouge foncé
//                 couleur = 'rgb(127, 0, 0)';
//             }

//             // Dessiner le pixel directement sur le canvas
//             ctx.fillStyle = couleur;
//             ctx.fillRect(x, y, 1, 1);  // Dessiner un carré de 1x1 pixel
//         }
//     });

//     console.log("Mise à jour de la carte terminée.");
// }





//Remplir le tableau de coordonnées (pour chaque coordonnée, le tableau donne le nombre d'individu de chaque couleur )
export function remplirTableauDeCoordonnees() {
    //Crée un tableau avec des objets dant les caractéristiques sont x,y et le nombre d'individus de chaque couleur
    for (let i = 0; i < canvas.width*canvas.height; i++) {
        const obj = {
            x: i-Math.floor(i/canvas.width)*canvas.width,
            y: Math.floor(i/canvas.width),
            nbrouge: 0,
            nbbleu: 0,
            nbvert: 0,
            nbrose: 0,
            nbjaune: 0,
            nbviolet: 0
        };
        // Ajout de l'objet au tableau
    tableauDeCoordonnees.push(obj);
    }
}