// Fonction pour attendre un certain temps
export function attendre(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// Fonction pour générer un nbre aléatoire pondéré
export function genererNombreAleatoirePondere(max) {
    const rand = Math.random();
    const signe = Math.random() < 0.5 ? -1 : 1;
    return signe * Math.floor(Math.pow(rand, 2) * max);
}