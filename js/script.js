// Récupération des éléments HTML
const canvas = document.getElementById('cartedumonde');
const ctx = canvas.getContext('2d');
const modifyButton = document.getElementById('modifyButton');
const saveButton = document.getElementById('saveButton');

// Initialisation de l'image blanche
function drawWhiteImage() {
    // Remplir le canvas avec une couleur blanche
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Modifier certains pixels de l'image
function modifyPixels() {
    // Obtenir les données de l'image
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    // Exemple : Modifier les pixels en rouge à un certain endroit
    for (let i = 0; i < data.length; i += 4) {
        // Change les pixels au centre du canvas en rouge
        if (data[i] > 200 && data[i + 1] > 200 && data[i + 2] > 200) {
            data[i] = 255;     // Rouge
            data[i + 1] = 0;   // Vert
            data[i + 2] = 0;   // Bleu
        }
    }
    
    // Mettre à jour le canvas avec les nouvelles données de l'image
    ctx.putImageData(imageData, 0, 0);
}

// Sauvegarder l'image modifiée
function saveImage() {
    // Créer un lien pour télécharger l'image
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'modified-image.png';
    link.click();
}

// Événements des boutons
modifyButton.addEventListener('click', modifyPixels);
saveButton.addEventListener('click', saveImage);

// Dessiner l'image blanche initiale
drawWhiteImage();
