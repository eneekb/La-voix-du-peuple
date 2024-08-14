//MOFIFIER LES PIXELS D'UNE IMAGE


import Jimp from 'jimp';

/**
 * Charge une image et crée un tableau des pixels avec leurs couleurs.
 * @param {string} imagePath - Chemin vers l'image à analyser.
 * @returns {Array} - Tableau des pixels avec leurs coordonnées (x, y) et leurs couleurs (r, g, b, a).
 */
export async function obtenirPixels(imagePath) {
  const image = await Jimp.read(imagePath);
  const pixels = [];

  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
    const r = this.bitmap.data[idx];
    const g = this.bitmap.data[idx + 1];
    const b = this.bitmap.data[idx + 2];
    const a = this.bitmap.data[idx + 3];

    pixels.push({ x, y, couleur: { r, g, b, a } });
  });

  return pixels;
  
}

/**
 * Modifie les couleurs des pixels spécifiés dans l'image.
 * @param {string} imagePath - Chemin vers l'image.
 * @param {Array} pixelsToModify - Liste des pixels à modifier avec leurs nouvelles couleurs.
 * @returns {Promise<Jimp>} - Image modifiée.
 */
export async function modifierPixels(imagePath, pixelsToModify) {
    const image = await Jimp.read(imagePath);
  
    pixelsToModify.forEach(({ x, y, couleur }) => {
      image.setPixelColor(Jimp.rgbaToInt(couleur.r, couleur.g, couleur.b, couleur.a), x, y);
    });
  
    // Enregistrer les modifications apportées à l'image
    await image.writeAsync(imagePath);
  }

 
  
   