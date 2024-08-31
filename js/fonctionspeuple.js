// // Import des variables et fonctions
// import { prenomsMasculinsFrancais, prenomsFemininsFrancais, nomFrancais } from './lists/listsnomsfrancais.js';
// import { tableauDePopulationRouge, tableauDesEmplacements } from './script.js';
// // import { tableauDesEmplacementsSansEau } from './varglobales.js';
// import { largeurCarte, hauteurCarte } from './script.js';
// import { porteeAttractiviteIndividu } from './varglobales.js';
// import { genererNombreAleatoirePondere } from './fonctionsutiles.js';

// let tableauDesEmplacementsSansEau;


// // Définition de la classe Individu
// class Individu {
//     constructor(prenom, nom, genre, age, coordx, coordy) {
//         this.prenom = prenom;
//         this.nom = nom;
//         this.genre = genre;
//         this.age = age;
//         this.coordx = coordx;
//         this.coordy = coordy;
//     }
//     sePresenter() {
//         return `Je suis ${this.prenom} ${this.nom}, un ${this.genre === 'M' ? 'homme' : 'femme'} de ${this.age} ans, situé à (${this.coordx}, ${this.coordy}).`;
//     }
// }



// // Générer un individu et ses caractéristiques
// export function genererIndividu() {
//     // Générer un genre aléatoire
//     const genres = ["M", "F"];
//     const genre = genres[Math.floor(Math.random() * genres.length)];
    
//     // Sélectionner un prénom en fonction du genre
//     const prenom = genre === "M"
//         ? prenomsMasculinsFrancais[Math.floor(Math.random() * prenomsMasculinsFrancais.length)]
//         : prenomsFemininsFrancais[Math.floor(Math.random() * prenomsFemininsFrancais.length)];

//     // Sélectionner un nom de famille
//     const nom = nomFrancais[Math.floor(Math.random() * nomFrancais.length)];

//     // Générer un âge aléatoire entre 0 et 70
//     const age = Math.floor(Math.random() * 71);
    
//     // Tirer au sort des coordonnées valides
//     let coordonnees = tableauDesEmplacementsSansEau[Math.floor(Math.random() * tableauDesEmplacementsSansEau.length)];

//     // // Créer une instance d'Individu avec les coordonnées tirées au sort
//     // return new Individu(prenom, nom, genre, age, coordonnees.x, coordonnees.y);



//     // Créer une instance d'Individu avec les coordonnées tirées au sort
//     const nouvelIndividu = new Individu(prenom, nom, genre, age, coordonnees.x, coordonnees.y);

//     // Augmenter le score d'attractivité d'un emplacement proche
//         // Tirer les valeurs aléatoires pondérées pour le déplacement
// // console.time("aaa")       
// // console.time("1")
//         const a = genererNombreAleatoirePondere(porteeAttractiviteIndividu); // Ajustez la portée ici si nécessaire
//         const b = genererNombreAleatoirePondere(porteeAttractiviteIndividu);
// // console.timeEnd("1")

// // console.time("2")
//         // Calculer les coordonnées du nouvel emplacement
//         const xCible = nouvelIndividu.coordx + a;
//         const yCible = nouvelIndividu.coordy + b;
// // console.timeEnd("2")


// // console.time("3")
//         // Vérifier que les coordonnées sont dans les limites de la carte
//         // console.time("4")
//         if (xCible >= 0 && xCible < largeurCarte && yCible >= 0 && yCible < hauteurCarte) {
//             // console.timeEnd("4")

//             // console.time("5")

//             // const emplacementCible = tableauDesEmplacements.find(e => e.coordonnees.x === xCible && e.coordonnees.y === yCible);
//             // console.timeEnd("5")

//             // console.time("5")
//             // const index = yCible * largeurCarte + xCible;  // Calculer l'index directement
//             const emplacementCible = tableauDesEmplacements[yCible * largeurCarte + xCible];
//             // console.timeEnd("5")



//             // console.time("6")

//             if (emplacementCible) {
//             emplacementCible.scoreAttractivite += 11;
//             // console.timeEnd("6")

//             }
//         }
//         // console.timeEnd("3")
// // console.timeEnd("aaa")

//     return nouvelIndividu;
    
// }





// export function ajouterIndividusAuTableauDePopulation(tableauDePopulation, nbreIndividus) {
//     console.time('ajouterIndividusAuTableauDePopulation')
//     // Filtrer les coordonnées sans eau à partir de tableauDesEmplacements
//     tableauDesEmplacementsSansEau = tableauDesEmplacements
//     .filter(emplacement => emplacement.type !== 'eau')
//     .map(emplacement => emplacement.coordonnees);




//     // Ajouter "nbreindividus" individus au tableau de population
//     for (let i = 0; i < nbreIndividus; i++) {
//         tableauDePopulation.push(genererIndividu());
//     };
//     console.timeEnd('ajouterIndividusAuTableauDePopulation')
//     console.log(tableauDesEmplacements)
//     console.log(tableauDesEmplacementsSansEau)
// }
   



// Import des variables et fonctions
import { prenomsMasculinsFrancais, prenomsFemininsFrancais, nomFrancais } from './lists/listsnomsfrancais.js';
import { tableauDePopulationRouge, tableauDesEmplacements } from './script.js';
import { largeurCarte, hauteurCarte } from './script.js';
import { genererNombreAleatoirePondere } from './fonctionsutiles.js';

// Définition de la classe Individu
export class Individu {
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

// Fonction pour générer un nouvel individu selon les coordonnées d'un "parent"
function genererIndividuSelonParent(parent, facteurMultiplicatif) {
    const genres = ["M", "F"];
    const genre = genres[Math.floor(Math.random() * genres.length)];
    const prenom = genre === "M"
        ? prenomsMasculinsFrancais[Math.floor(Math.random() * prenomsMasculinsFrancais.length)]
        : prenomsFemininsFrancais[Math.floor(Math.random() * prenomsFemininsFrancais.length)];
    const nom = nomFrancais[Math.floor(Math.random() * nomFrancais.length)];
    const age = Math.floor(Math.random() * 71);

    let coordx, coordy;
    let emplacementValide = false;

    while (!emplacementValide) {
// console.log("emplacement valide", emplacementValide);                
        coordx = Math.floor(parent.coordx + (Math.random() * (facteurMultiplicatif * 2) - facteurMultiplicatif));
        coordy = Math.floor(parent.coordy + (Math.random() * (facteurMultiplicatif * 2) - facteurMultiplicatif));
// console.log("coordonnées enfant", coordx, coordy);
        // Vérifier que l'emplacement est dans les limites de la carte et pas de type "eau"
        if (coordx >= 0 && coordx < largeurCarte && coordy >= 0 && coordy < hauteurCarte) {
            const emplacementCible = tableauDesEmplacements[coordy * largeurCarte + coordx];
// console.log("emplacement cible", emplacementCible);            
            if (emplacementCible && emplacementCible.type !== 'eau') {
                emplacementValide = true;
// console.log("emplacement valide", emplacementValide);                
            }
        }
    }
// console.log("coordonées finales", coordx, coordy)
    return new Individu(prenom, nom, genre, age, coordx, coordy);
}


// // Fonction pour générer un nouvel individu selon les coordonnées d'un "parent"
// function genererIndividuSelonParent(parent, facteurMultiplicatif) {
//     const genres = ["M", "F"];
//     const genre = genres[Math.floor(Math.random() * genres.length)];
//     const prenom = genre === "M"
//         ? prenomsMasculinsFrancais[Math.floor(Math.random() * prenomsMasculinsFrancais.length)]
//         : prenomsFemininsFrancais[Math.floor(Math.random() * prenomsFemininsFrancais.length)];
//     const nom = nomFrancais[Math.floor(Math.random() * nomFrancais.length)];
//     const age = Math.floor(Math.random() * 71);

//     const coordx = Math.floor(Math.min(Math.max(0, parent.coordx + (Math.random() * (facteurMultiplicatif * 2) - facteurMultiplicatif)), largeurCarte - 1));
//     const coordy = Math.floor(Math.min(Math.max(0, parent.coordy + (Math.random() * (facteurMultiplicatif * 2) - facteurMultiplicatif)), hauteurCarte - 1));

//     return new Individu(prenom, nom, genre, age, coordx, coordy);
// }

export function ajouterIndividusAuTableauDePopulation(tableauDePopulation, nbreIndividus) {
    console.time('ajouterIndividusAuTableauDePopulation');
    
    const nb50 = Math.floor(0.5 * nbreIndividus);
    const nb30 = Math.floor(0.3 * nbreIndividus);
    const nb20 = nbreIndividus - nb50 - nb30;

    for (let i = 0; i < nb50; i++) {
        const parent = tableauDePopulationRouge[Math.floor(Math.random() * tableauDePopulationRouge.length)];
        tableauDePopulation.push(genererIndividuSelonParent(parent, 5));
    }

    for (let i = 0; i < nb30; i++) {
        const parent = tableauDePopulationRouge[Math.floor(Math.random() * tableauDePopulationRouge.length)];
        tableauDePopulation.push(genererIndividuSelonParent(parent, 10));
    }

    for (let i = 0; i < nb20; i++) {
        const parent = tableauDePopulationRouge[Math.floor(Math.random() * tableauDePopulationRouge.length)];
        tableauDePopulation.push(genererIndividuSelonParent(parent, 20));
    }

    console.timeEnd('ajouterIndividusAuTableauDePopulation');
}





// // Import des variables et fonctions
// import { prenomsMasculinsFrancais, prenomsFemininsFrancais, nomFrancais } from './lists/listsnomsfrancais.js';
// import { tableauDePopulationRouge, tableauDesEmplacements } from './script.js';
// import { largeurCarte, hauteurCarte } from './script.js';
// import { porteeAttractiviteIndividu } from './varglobales.js';
// import { genererNombreAleatoirePondere } from './fonctionsutiles.js';
// import { repartition } from "./varglobales.js";


// let tableauDesEmplacementsSansEau = [];

// // Définition de la classe Individu
// class Individu {
//     constructor(prenom, nom, genre, age, coordx, coordy) {
//         this.prenom = prenom;
//         this.nom = nom;
//         this.genre = genre;
//         this.age = age;
//         this.coordx = coordx;
//         this.coordy = coordy;
//     }
//     sePresenter() {
//         return `Je suis ${this.prenom} ${this.nom}, un ${this.genre === 'M' ? 'homme' : 'femme'} de ${this.age} ans, situé à (${this.coordx}, ${this.coordy}).`;
//     }
// }

// // Fonction pour générer la population en appliquant la méthode avec des segments
// export function ajouterIndividusAuTableauDePopulation(tableauDePopulation, nbreIndividus) {
//     console.time('ajouterIndividusAuTableauDePopulation');

//     // Filtrer les emplacements sans eau tout en gardant le score d'attractivité
//     tableauDesEmplacementsSansEau = tableauDesEmplacements
//         .filter(emplacement => emplacement.type !== 'eau');

//     // Trier le tableau des emplacements sans eau par score d'attractivité décroissant
//     tableauDesEmplacementsSansEau.sort((a, b) => b.scoreAttractivite - a.scoreAttractivite);

//     // Diviser en sous-tableaux de 5%
//     const tailleSegment = Math.floor(tableauDesEmplacementsSansEau.length / 20);
//     const segments = [];
//     for (let i = 0; i < 20; i++) {
//         segments[i] = tableauDesEmplacementsSansEau.slice(i * tailleSegment, (i + 1) * tailleSegment);
//     }

//     for (let i = 0; i < repartition.length; i++) {
//         const nbreIndividusSegment = Math.floor(nbreIndividus * repartition[i]);
//         for (let j = 0; j < nbreIndividusSegment; j++) {
//             const emplacement = segments[i][Math.floor(Math.random() * segments[i].length)];
//             const nouvelIndividu = genererIndividuAvecCoordonnees(emplacement.coordonnees);
//             tableauDePopulation.push(nouvelIndividu);
//         }
//     }

//     console.timeEnd('ajouterIndividusAuTableauDePopulation');
// }

// // Générer un individu avec des coordonnées spécifiques
// function genererIndividuAvecCoordonnees(coordonnees) {
//     // Générer un genre aléatoire
//     const genres = ["M", "F"];
//     const genre = genres[Math.floor(Math.random() * genres.length)];
    
//     // Sélectionner un prénom en fonction du genre
//     const prenom = genre === "M"
//         ? prenomsMasculinsFrancais[Math.floor(Math.random() * prenomsMasculinsFrancais.length)]
//         : prenomsFemininsFrancais[Math.floor(Math.random() * prenomsFemininsFrancais.length)];

//     // Sélectionner un nom de famille
//     const nom = nomFrancais[Math.floor(Math.random() * nomFrancais.length)];

//     // Générer un âge aléatoire entre 0 et 70
//     const age = Math.floor(Math.random() * 71);

//     // Créer une instance d'Individu avec les coordonnées spécifiées
//     const nouvelIndividu = new Individu(prenom, nom, genre, age, coordonnees.x, coordonnees.y);

//     // Augmenter le score d'attractivité d'un emplacement proche
//     const a = genererNombreAleatoirePondere(porteeAttractiviteIndividu); 
//     const b = genererNombreAleatoirePondere(porteeAttractiviteIndividu);

//     // Calculer les coordonnées du nouvel emplacement
//     const yCible = nouvelIndividu.coordy + a;
//     const xCible = nouvelIndividu.coordx + b;

//     // Vérifier que les coordonnées sont dans les limites de la carte
//     if (xCible >= 0 && xCible < largeurCarte && yCible >= 0 && yCible < hauteurCarte) {
//         const emplacementCible = tableauDesEmplacements[yCible * largeurCarte + xCible];
//         if (emplacementCible) {
//             emplacementCible.scoreAttractivite += 11;
//         }
//     }

//     return nouvelIndividu;
// }
