// Fonction pour attendre un certain temps
export function attendre(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

