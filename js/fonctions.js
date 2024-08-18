const canvas = document.getElementById('cartedumonde');
const ctx = canvas.getContext('2d');

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
    data[nbrealeatoire*4] = 255
    data[nbrealeatoire*4+1] = 0
    data[nbrealeatoire*4+2] = 0


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
