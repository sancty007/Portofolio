"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";

import { useState } from "react";
import { toast } from "sonner";

export default function DownloadCV() {
  // État pour gérer le téléchargement
  const [isDownloading, setIsDownloading] = useState(false);
  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      // Requête à l'API pour récupérer le fichier
      const response = await axios.get("/api/download", {
        responseType: "blob", // Spécifie que le fichier est de type binaire
      });

      // Création d'une URL temporaire pour les données du fichier
      const url = window.URL.createObjectURL(new Blob([response.data]));

      // Création d'un lien invisible pour le téléchargement
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "CV_Developpeur-Full-Stack.pdf"); // Nom du fichier téléchargé
      document.body.appendChild(link);
      link.click(); // Simulation du clic
      document.body.removeChild(link); // Suppression du lien après utilisation

      // Libération de l'URL temporaire
      window.URL.revokeObjectURL(url);

      // alert("Téléchargement réussi !");
      toast.success("Téléchargement réussi", {
        description: "Vous avez bien téléchargé le CV de développeur fullstack",
      });
    } catch (err) {
      console.error("Erreur lors du téléchargement", err);
      alert("Une erreur est survenue lors du téléchargement.");
    } finally {
      setIsDownloading(false);
    }
  };
  return (
    <Button
      className="md:px-6 hover:text-[#f3f3de] border-2 border-[#4a32e5] bg-[#4a32e5] bg-opacity-50 border-opacity-20  shadow-2xl shadow-[#3E2ABF] uppercase rounded-full gap-x-1"
      onClick={handleDownload}
      disabled={isDownloading}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M12 18v-6" />
        <path d="m9 15 3 3 3-3" />
      </svg>
      {isDownloading ? "CV..." : "CV"}
    </Button>
  );
}

/*
 */
