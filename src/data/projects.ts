// Définition du type Project
type Project = {
  id: string | number; // Identifiant unique du projet
  title: string; // Titre du projet
  des: string; // Description du projet
  link: string; // URL du projet
  img: string; // Lien de l'image de couverture
  /*  iconLists: string[]; // Liste des icônes associées au projet (URLs des icônes) */
};

// Exemple de tableau de projets
export const projects: Project[] = [
  {
    id: 1,
    title: "INCUBATION",
    des: "Insertion et accompagnement des étudiants dans le monde professionnel",
    link: "https://incubateur-umng.site/",
    img: "/images/univer.png",
    /* iconLists: ["/icons/icon1.png", "/icons/icon2.png"], */
  },
  {
    id: 2,
    title: "TO yekola na Bomoko",
    des: "La plateforme offre des compétences pratiques et prépare les utilisateurs aux défis du marché du travail.",
    link: "https://yeekola.vercel.app/",
    img: "/images/yekola.png",
    /* iconLists: ["/icons/icon3.png", "/icons/icon4.png"], */
  },
  {
    id: 3,
    title: "Projet Mosala",
    des: "Construisons ensemble l'avenir professionnel des jeunes congolais.",
    link: "https://projet-mossala-3mh5.vercel.app",
    img: "/images/mosala.png",
    /* iconLists: ["/icons/icon3.png", "/icons/icon4.png"], */
  },
];
