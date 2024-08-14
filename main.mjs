//import des fonctions
import { ouvrirImageDansNavigateur } from './src/afficherimage.mjs';
import { obtenirPixels, modifierPixels } from './src/modifpxl.mjs';

ouvrirImageDansNavigateur('carte1.png')

const pixels = await obtenirPixels('carte1.png');
 
// Afficher les premiers pixels pour vérifier le résultat
console.log('Les premiers pixels de l\'image:', pixels.slice(0, 10));
 



await modifierPixels('carte1.png', [{ x: 5, y: 0, couleur: { r: 255, g: 0, b: 0, a: 255 } }]);

// Réouvrir l'image pour voir les changements
ouvrirImageDansNavigateur('carte1.png');

// Afficher les premiers pixels de l'image modifiée
const pixelsModifies = await obtenirPixels('carte1.png');
console.log('Les premiers pixels de l\'image modifiée:', pixelsModifies.slice(0, 10));
