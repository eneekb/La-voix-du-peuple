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


// Mettre la carte à jour
export function mettrelacarteajour() {
    console.log("fonction mettrelacarteajour")
    // Obtenir les données de l'image
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    console.log(data);
    
    // Parcourir le tableau de population et récupérer les coordonnées de chaque individus
    tableauDePopulationRouge.forEach((individu) => {
        let x = individu.coordx;
        let y = individu.coordy;
    
       
        // Trouver dans le tableau de coordonnées les cases qui correspondent aux coordonnées des individus
        const caseDuTableauDeCoordonnees = tableauDeCoordonnees.find((individu) => {
        return individu.x === x && individu.y === y;
        });

        console.log(caseDuTableauDeCoordonnees);

        caseDuTableauDeCoordonnees.nbrouge +=1;

        console.log(caseDuTableauDeCoordonnees);
//a ce niveau, j'ai mis le nbre d'individu présent dans chaque case du tableaudecoordonnées



    // Colorer un pixel en rouge
    data[y*tableauDePopulationRouge.length+x+1] = 255;
    data[y*tableauDePopulationRouge.length+x+2] = 0;
    data[y*tableauDePopulationRouge.length+x+3] = 0;

    
    });




   

    // Mettre à jour le canvas avec les nouvelles données de l'image
    ctx.putImageData(imageData, 0, 0);


    

}





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