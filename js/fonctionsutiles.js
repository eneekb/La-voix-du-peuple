// Attendre un certain temps
export function attendre(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// Générer un nbre aléatoire pondéré
export function genererNombreAleatoirePondere(max) {
    const rand = Math.random();
    const signe = Math.random() < 0.5 ? -1 : 1;
    return signe * Math.floor(Math.pow(rand, 2) * max);
}

// Remplir un tableau avec les données d'un autre tableau (permet de contourner le problème des tableaux exportées qui ne peuvent plus être réassignés)
export function mettreAJourTableau(tableauCible, tableauSource) {
    tableauCible.length = 0; // Vider le tableau cible
    tableauCible.push(...tableauSource); // Remplir avec les nouvelles données
}
