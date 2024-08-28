// Import des variables et fonctions
import { prenomsMasculinsFrancais, prenomsFemininsFrancais, nomFrancais } from './lists/listsnomsfrancais.js';
import { canvas } from './fonctions.js';
import { largeurCarte } from './script.js';
import { hauteurCarte } from './script.js';
import { tableauDesEmplacements } from './script.js';
// import { tableauDesEmplacementsSansEau } from './varglobales.js';
let tableauDesEmplacementsSansEau;


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



// Générer un individu et ses caractéristiques
export function genererIndividu() {
    // Générer un genre aléatoire
    const genres = ["M", "F"];
    const genre = genres[Math.floor(Math.random() * genres.length)];
    
    // Sélectionner un prénom en fonction du genre
    const prenom = genre === "M"
        ? prenomsMasculinsFrancais[Math.floor(Math.random() * prenomsMasculinsFrancais.length)]
        : prenomsFemininsFrancais[Math.floor(Math.random() * prenomsFemininsFrancais.length)];

    // Sélectionner un nom de famille
    const nom = nomFrancais[Math.floor(Math.random() * nomFrancais.length)];

    // Générer un âge aléatoire entre 0 et 70
    const age = Math.floor(Math.random() * 71);
    
    // Tirer au sort des coordonnées valides
    let coordonnees = tableauDesEmplacementsSansEau[Math.floor(Math.random() * tableauDesEmplacementsSansEau.length)];

    // Créer une instance d'Individu avec les coordonnées tirées au sort
    return new Individu(prenom, nom, genre, age, coordonnees.x, coordonnees.y);
}





export function ajouterIndividusAuTableauDePopulation(tableauDePopulation, nbreIndividus) {
    console.time('ajouterIndividusAuTableauDePopulation')

        // Filtrer les coordonnées sans eau à partir de tableauDesEmplacements
        tableauDesEmplacementsSansEau = tableauDesEmplacements
        .filter(emplacement => emplacement.type !== 'eau')
        .map(emplacement => emplacement.coordonnees);

    // Ajouter "nbreindividus" individus au tableau de population
        for (let i = 0; i < nbreIndividus; i++) {
    tableauDePopulation.push(genererIndividu());
    };

    // // Afficher les individus
    // tableauDePopulation.forEach(individu => {
    // console.log(individu.sePresenter());
    // });

    console.timeEnd('ajouterIndividusAuTableauDePopulation')
}
   

