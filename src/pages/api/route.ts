import axios from 'axios';

export default async function handleDownload() {
    try {
        // Requête à l'API pour récupérer le fichier
        const response = await axios.get('/api/download', {
            responseType: 'blob', // Spécifie que le fichier est de type binaire
        });

        // Création d'une URL temporaire pour les données du fichier
        const url = window.URL.createObjectURL(new Blob([response.data]));

        // Création d'un lien invisible pour le téléchargement
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'cv.pdf'); // Nom du fichier téléchargé
        document.body.appendChild(link);
        link.click(); // Simulation du clic
        document.body.removeChild(link); // Suppression du lien après utilisation

        // Libération de l'URL temporaire
        window.URL.revokeObjectURL(url);

        alert('Téléchargement réussi !');
    } catch (err) {
        console.error('Erreur lors du téléchargement', err);
        alert('Une erreur est survenue lors du téléchargement.');
    }
}
