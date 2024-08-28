export const canvas = document.getElementById('cartedumonde');
export const ctx = canvas.getContext('2d');

//Import des variables nécessaires
import { tableauDePopulationRouge } from './script.js';

// Charger la carte initiale
export function ChargerLaCarteInitiale() {
    console.time('ChargerLaCarteInitiale')
    const img = new Image();
    img.src = "images/carte0.png";
    img.onload = function() {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
    console.timeEnd('ChargerLaCarteInitiale')
}

// Convertir les données RVBA d'une image en HSLA
function convertirRvbEnHsl(imageData) {
    const data = imageData.data;
    const hslData = [];

    for (let i = 0; i < data.length; i += 4) {
        // Extraire les valeurs RVB
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const a = data[i + 3];

        // Conversion RVB en HSL
        const rNorm = r / 255;
        const gNorm = g / 255;
        const bNorm = b / 255;
        const max = Math.max(rNorm, gNorm, bNorm);
        const min = Math.min(rNorm, gNorm, bNorm);
        let h, s, l = (max + min) / 2;

        if (max === min) {
            h = s = 0; // Couleur achromatique
        } else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case rNorm: h = (gNorm - bNorm) / d + (gNorm < bNorm ? 6 : 0); break;
                case gNorm: h = (bNorm - rNorm) / d + 2; break;
                case bNorm: h = (rNorm - gNorm) / d + 4; break;
            }
            h /= 6;
        }
        // Stocker les valeurs HSL dans un tableau
        hslData.push(h * 360, s * 100, l * 100, a);
    }
    return hslData;
}

// Convertir les données HSLA d'une image en RVBA
function convertirHslEnRvb(hslData, width, height) {
    const rgbData = new Uint8ClampedArray(hslData.length);

    for (let i = 0; i < hslData.length; i += 4) {
        // Extraire les valeurs HSL et Alpha
        const h = hslData[i];
        const s = hslData[i + 1];
        const l = hslData[i + 2];
        const a = hslData[i + 3];

        // Conversion HSL en RVB
        const hNorm = h / 360;
        const sNorm = s / 100;
        const lNorm = l / 100;

        let r, g, b;

        if (sNorm === 0) {
            r = g = b = lNorm; // couleur achromatique
        } else {
            const hueToRgb = (p, q, t) => {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1/6) return p + (q - p) * 6 * t;
                if (t < 1/2) return q;
                if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
                return p;
            };

            const q = lNorm < 0.5 ? lNorm * (1 + sNorm) : lNorm + sNorm - lNorm * sNorm;
            const p = 2 * lNorm - q;
            r = hueToRgb(p, q, hNorm + 1/3);
            g = hueToRgb(p, q, hNorm);
            b = hueToRgb(p, q, hNorm - 1/3);
        }

        // Stocker les valeurs RVB et Alpha dans le tableau rgbData
        rgbData[i] = r * 255;
        rgbData[i + 1] = g * 255;
        rgbData[i + 2] = b * 255;
        rgbData[i + 3] = a; // Alpha reste inchangé
    }

    return new ImageData(rgbData, width, height);
}


// Mettre à jour la carte
export function mettrelacarteajour() {
    console.time('mettrelacarteajour')
    // Démarrer le chronométrage pour mesurer le temps d'exécution
    console.time('Temps d\'exécution de mettrelacarteajour');

    // Obtenir les données de l'image une seule fois
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    let imageDataHsl = convertirRvbEnHsl(imageData);
    let data = imageDataHsl; // Travailler avec les données HSL

    // Parcourir chaque individu dans la population
    tableauDePopulationRouge.forEach((individu) => {
        const x = individu.coordx;
        const y = individu.coordy;

        // Calculer l'index dans le tableau de données d'image
        const index = (y * canvas.width + x) * 4;

        // Modifier les composantes HSL (Colorer le pixel en rouge si il n'était pas rouge, sinon diminuer sa luminosité)
        if(data[index] === 360) {
            data[index + 2] = Math.max(data[index + 2] - 10, 10);
        } else {
            data[index + 2] = 80
        }
        data[index] = 360;
        data[index + 1] = 100;
    })

    // Convertir les données HSL modifiés en RVB
    let newImageData = convertirHslEnRvb(data, canvas.width, canvas.height);

    // Mettre à jour le canvas avec les nouvelles données de l'image
    ctx.putImageData(newImageData, 0, 0);

    // Arrêter le chronométrage et afficher le temps d'exécution
    console.timeEnd('mettrelacarteajour');
};



