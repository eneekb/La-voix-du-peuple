import { prenomsMasculinsFrancais, prenomsFemininsFrancais, nomFrancais } from './lists/listsnomsfrancais.js';

// Définition de la classe Individu
class Individu {
    constructor(prenom, nom, genre, age, coordonnees) {
        this.prenom = prenom;
        this.nom = nom;
        this.genre = genre;
        this.age = age;
        this.coordonnees = coordonnees;
    }
    sePresenter() {
        return `Je suis ${this.prenom} ${this.nom}, un ${this.genre === 'M' ? 'homme' : 'femme'} de ${this.age} ans, situé à (${this.coordonnees.x}, ${this.coordonnees.y}).`;
    }
}


// Générer un individu et ses caractéristiques de façon aléatoire
export function genererIndividu() {
    // Générer un genre aléatoire
    const genres = ["M", "F"];
    const genre = genres[Math.floor(Math.random() * genres.length)];
    
    // Sélectionner un prénom en fonction du genre
    let prenom;
    if (genre === "M") {
        prenom = prenomsMasculinsFrancais[Math.floor(Math.random() * prenomsMasculinsFrancais.length)];
    } else {
        prenom = prenomsFemininsFrancais[Math.floor(Math.random() * prenomsFemininsFrancais.length)];
    }

    // Sélectionner un nom de famille
    const nom = nomFrancais[Math.floor(Math.random() * nomFrancais.length)];

    // Générer un âge aléatoire entre 0 et 70
    const age = Math.floor(Math.random() * 71);
    
    // Générer des coordonnées aléatoires (ex: entre 0 et 800 pour x et entre 0 et 500 pour y)
    const coordonnees = {
        x: Math.floor(Math.random() * 801),
        y: Math.floor(Math.random() * 501)
    };

    
    // Créer une instance d'Individu
    return new Individu(prenom, nom, genre, age, coordonnees);
}

export function ajouterIndividusAuTableauDePopulation(tableauDePopulation, nbreIndividus) {
    // Ajouter "nbreindividus" individus au tableau de population
        for (let i = 0; i < nbreIndividus; i++) {
    tableauDePopulation.push(genererIndividu());
    };

    // Afficher les individus
    tableauDePopulation.forEach(individu => {
    console.log(individu.sePresenter());
    });

    console.log(tableauDePopulation)
   
}
   



