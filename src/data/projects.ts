// Définition du type Project
type Project = {
  id: string | number; // Identifiant unique du projet
  title: string; // Titre du projet
  des: string; // Description du projet
  link: string; // URL du projet
  img: string; // Lien de l'image de couverture
  gitHub: boolean; // Indicateur de présence sur GitHub
  /*  iconLists: string[]; // Liste des icônes associées au projet (URLs des icônes) */
};

// Exemple de tableau de projets
export const projects: Project[] = [
  {
    id: 1,
    title: "INCUBATION",
    des: "Insertion et soutien des étudiants dans le monde professionnel",
    link: "https://incubateur-umng.site/",
    img: "/images/univer.png",
    gitHub: true,
    /* iconLists: ["/icons/icon1.png", "/icons/icon2.png"], */
  },
  {
    id: 2,
    title: "TO Yekola na Bomoko",
    des: "La plateforme offre des compétences pratiques et prépare les utilisateurs aux défis du marché du travail.",
    link: "https://yeekola.vercel.app/",
    img: "/images/yekola.png",
    gitHub: true,
    /* iconLists: ["/icons/icon3.png", "/icons/icon4.png"], */
  },
  {
    id: 3,
    title: "Projet Mosala",
    des: "Construisons ensemble l'avenir professionnel des jeunes Congolais.",
    link: "https://projet-mossala-3mh5.vercel.app",
    img: "/images/mosala.png",
    gitHub: true,
    /* iconLists: ["/icons/icon3.png", "/icons/icon4.png"], */
  },
  {
    id: 4,
    title: "Tournoi de football",
    des: "Plateforme de gestion intuitive du tournoi de football pour une organisation et une gestion faciles.",
    link: "https://github.com/sancty007/tournoit-football.git",
    img: "/images/tournoit_foot.png",
    gitHub: false,
    /* iconLists: ["/icons/icon3.png", "/icons/icon4.png"], */
  },
  {
    id: 5,
    title: "Journée des développeurs PossaCode 2024",
    des: "Le plus grand rassemblement de développeurs pour les développeurs au Congo Brazzaville.",
    link: "https://github.com/sancty007/PossaCodeDevDay.git",
    img: "/images/possaCode.png",
    gitHub: false,
    /* iconLists: ["/icons/icon3.png", "/icons/icon4.png"], */
  },
];
