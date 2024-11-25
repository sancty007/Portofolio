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
    title: "Projet Exemple",
    des: "Description du projet exemple.",
    link: "https://example.com",
    img: "/images/univer.png",
    /* iconLists: ["/icons/icon1.png", "/icons/icon2.png"], */
  },
  {
    id: 2,
    title: "Deuxième Projet",
    des: "Un autre projet intéressant.",
    link: "https://example2.com",
    img: "/images/yekola.png",
    /* iconLists: ["/icons/icon3.png", "/icons/icon4.png"], */
  },
  {
    id: 3,
    title: "Troisième Projet",
    des: "Un autre projet intéressant.",
    link: "https://example2.com",
    img: "/images/mosala.png",
    /* iconLists: ["/icons/icon3.png", "/icons/icon4.png"], */
  },
];
