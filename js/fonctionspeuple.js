// Import des variables et fonctions
import { prenomsMasculinsFrancais, prenomsFemininsFrancais, nomFrancais } from './lists/listsnomsfrancais.js';
import { canvas } from './fonctions.js';


// Définition de la classe Individu
class Individu {
    constructor(prenom, nom, genre, age, coordx, coordy) {
        this.prenom = prenom;
        this.nom = nom;
        this.genre = genre;
        this.age = age;
        this.coordx = coordx;
        this.coordy = coordy;
    }
    sePresenter() {
        return `Je suis ${this.prenom} ${this.nom}, un ${this.genre === 'M' ? 'homme' : 'femme'} de ${this.age} ans, situé à (${this.coordx}, ${this.coordy}).`;
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
    
    // Générer des coordonnées aléatoires (ex: entre 0 et 1200 pour x et entre 0 et 800 pour y)
    const coordx = Math.floor(Math.random() * canvas.width + 1);
    const coordy = Math.floor(Math.random() * canvas.height + 1);
    

    
    // Créer une instance d'Individu
    return new Individu(prenom, nom, genre, age, coordx, coordy);
}

export function ajouterIndividusAuTableauDePopulation(tableauDePopulation, nbreIndividus) {
    console.time('Temps de génération des individus')
    // Ajouter "nbreindividus" individus au tableau de population
        for (let i = 0; i < nbreIndividus; i++) {
    tableauDePopulation.push(genererIndividu());
    };

    // Afficher les individus
    tableauDePopulation.forEach(individu => {
    // console.log(individu.sePresenter());
    });

    console.log(tableauDePopulation);
    console.timeEnd('Temps de génération des individus')
}
   



