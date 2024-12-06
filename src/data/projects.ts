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
    des: "Insertion and support of students in the professional world",
    link: "https://incubateur-umng.site/",
    img: "/images/univer.png",
    gitHub: true,
    /* iconLists: ["/icons/icon1.png", "/icons/icon2.png"], */
  },
  {
    id: 2,
    title: "TO Yekola na Bomoko",
    des: "The platform offers practical skills and prepares users for the challenges of the job market.",
    link: "https://yeekola.vercel.app/",
    img: "/images/yekola.png",
    gitHub: true,
    /* iconLists: ["/icons/icon3.png", "/icons/icon4.png"], */
  },
  {
    id: 3,
    title: "Mosala Project",
    des: "Let's build together the professional future of young Congolese.",
    link: "https://projet-mossala-3mh5.vercel.app",
    img: "/images/mosala.png",
    gitHub: true,
    /* iconLists: ["/icons/icon3.png", "/icons/icon4.png"], */
  },
  {
    id: 4,
    title: "football tournament",
    des: "Intuitive football tournament management platform for easy organization and management.",
    link: "https://github.com/sancty007/tournoit-football.git",
    img: "/images/tournoit_foot.png",
    gitHub: false,
    /* iconLists: ["/icons/icon3.png", "/icons/icon4.png"], */
  },
  {
    id: 5,
    title: "PossaCode Dev Day 2024",
    des: "The largest gathering of developers for developers in Congo Brazzaville.",
    link: "https://github.com/sancty007/PossaCodeDevDay.git",
    img: "/images/possaCode.png",
    gitHub: false,
    /* iconLists: ["/icons/icon3.png", "/icons/icon4.png"], */
  },
];
