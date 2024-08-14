//AFFICHER UNE IMAGE DANS CHROME

import path from 'path';
import { exec } from 'child_process';


/**
 * Ouvre une image dans le navigateur.
 * @param {string} imagePath - Chemin vers l'image à ouvrir.
 */
function ouvrirImageDansNavigateur(imagePath) {
  // Convertir le chemin relatif en chemin absolu
  const cheminAbsolu = path.resolve(imagePath);

  // Ouvrir l'image dans Chrome
  const commande = `start chrome "${cheminAbsolu}"`;

  // Exécuter la commande
  exec(commande, (err) => {
    if (err) {
      console.error('Erreur lors de l\'ouverture de l\'image dans le navigateur:', err);
    } else {
      console.log('L\'image a été ouverte dans le navigateur.');
    }
  });
}
export { ouvrirImageDansNavigateur };
