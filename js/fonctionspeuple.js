// Import des variables et fonctions
import { prenomsMasculinsFrancais, prenomsFemininsFrancais, nomFrancais } from './lists/listsnomsfrancais.js';
import { tableauDePopulationRouge, tableauDesEmplacements } from './script.js';
import { largeurCarte, hauteurCarte } from './script.js';
import { tableauAttractivite1, tableauAttractivite2, tableauAttractivite3, tableauAttractivite4, tableauAttractivite5, tableauAttractivite6, tableauAttractivite7, tableauAttractivite8, tableauAttractivite9, tableauAttractivite10, tableauAttractivite11, tableauAttractivite12, tableauAttractivite13,tableauAttractivite14, tableauAttractivite15, tableauAttractivite16, tableauAttractivite17, tableauAttractivite18, tableauAttractivite19, tableauAttractivite20 } from './varglobales.js';
import { repartition } from './varglobales.js';


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

// Générer un nouvel individu selon les coordonnées d'un "parent"
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
        coordx = Math.floor(parent.coordx + (Math.random() * (facteurMultiplicatif * 2) - facteurMultiplicatif));
        coordy = Math.floor(parent.coordy + (Math.random() * (facteurMultiplicatif * 2) - facteurMultiplicatif));
        
        // Vérifier que l'emplacement est dans les limites de la carte et pas de type "eau"
        if (coordx >= 0 && coordx < largeurCarte && coordy >= 0 && coordy < hauteurCarte) {
            const emplacementCible = tableauDesEmplacements[coordy * largeurCarte + coordx];
            if (emplacementCible && emplacementCible.type !== 'eau') {
                emplacementValide = true;
            }
        }
    }
    return new Individu(prenom, nom, genre, age, coordx, coordy);
}

// Générer un nouvel individu selon l'attractivité des emplacements
function genererIndividuAvecCoordonnees(coordonnees) {
    const genres = ["M", "F"];
    const genre = genres[Math.floor(Math.random() * genres.length)];
    const prenom = genre === "M"
        ? prenomsMasculinsFrancais[Math.floor(Math.random() * prenomsMasculinsFrancais.length)]
        : prenomsFemininsFrancais[Math.floor(Math.random() * prenomsFemininsFrancais.length)];
    const nom = nomFrancais[Math.floor(Math.random() * nomFrancais.length)];
    const age = Math.floor(Math.random() * 71);

    return new Individu(prenom, nom, genre, age, coordonnees.x, coordonnees.y);
}

//Ajouter des nouveaux individus dans un tableau de population
export function ajouterIndividusAuTableauDePopulation(tableauDePopulation, nbreIndividus) {
    console.time('ajouterIndividusAuTableauDePopulation');
    // Répartition des individus à générer selon la méthode à appliquer pour l'emplacement
    const nb50 = Math.floor(0.5 * nbreIndividus);
    const nb30 = Math.floor(0.3 * nbreIndividus);
    const nb10 = Math.floor(0.1 * nbreIndividus);
    const nbRestant = nbreIndividus-nb50-nb30-nb10;

    // Générer les individus selon la proximité avec un parent
    for (let i = 0; i < nb50; i++) {
        const parent = tableauDePopulationRouge[Math.floor(Math.random() * tableauDePopulationRouge.length)];
        tableauDePopulation.push(genererIndividuSelonParent(parent, 5));
    }

    for (let i = 0; i < nb30; i++) {
        const parent = tableauDePopulationRouge[Math.floor(Math.random() * tableauDePopulationRouge.length)];
        tableauDePopulation.push(genererIndividuSelonParent(parent, 10));
    }

    for (let i = 0; i < nb10; i++) {
        const parent = tableauDePopulationRouge[Math.floor(Math.random() * tableauDePopulationRouge.length)];
        tableauDePopulation.push(genererIndividuSelonParent(parent, 20));
    }

    // Générer les individus selon l'attractivité des emplacements
    const segments = [
        tableauAttractivite1, tableauAttractivite2, tableauAttractivite3, tableauAttractivite4, tableauAttractivite5, 
        tableauAttractivite6, tableauAttractivite7, tableauAttractivite8, tableauAttractivite9, tableauAttractivite10, 
        tableauAttractivite11, tableauAttractivite12, tableauAttractivite13, tableauAttractivite14, tableauAttractivite15, 
        tableauAttractivite16, tableauAttractivite17, tableauAttractivite18, tableauAttractivite19, tableauAttractivite20
    ];

    for (let i = 0; i < repartition.length; i++) {
        const nbreIndividusSegment = Math.floor(nbRestant * repartition[i]);
        for (let j = 0; j < nbreIndividusSegment; j++) {
            const emplacement = segments[i][Math.floor(Math.random() * segments[i].length)];
            const nouvelIndividu = genererIndividuAvecCoordonnees(emplacement.coordonnees);
            tableauDePopulation.push(nouvelIndividu);
        }
    }
    console.timeEnd('ajouterIndividusAuTableauDePopulation');
}

// Générer un nouvel individu selon coordonnées choisies par le joueur et l'ajouter dans un tableau de population
export function demanderCoordonneesIndividu(tableauDePopulation) {
    // Demander à l'utilisateur de saisir les coordonnées
    const coordx = parseInt(prompt("Entrez la coordonnée X pour un individu :"), 10);
    const coordy = parseInt(prompt("Entrez la coordonnée Y pour un individu :"), 10);

    // Vérifier que les coordonnées sont valides
    if (!isNaN(coordx) && !isNaN(coordy) && coordx >= 0 && coordx < largeurCarte && coordy >= 0 && coordy < hauteurCarte) {
        // Créer le premier individu
        const individu = new Individu("Seb", "Bruand", "M", 14, coordx, coordy);
        tableauDePopulation.push(individu);  // Ajout au tableau de population rouge si nécessaire
    } else {
        alert("Coordonnées invalides. Veuillez réessayer.");
    }
}

