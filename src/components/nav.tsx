"use client";

import React from "react";

import Navigation from "@/data/navData";
import DownloadCV from "@/pages/api/dowloadCv";

export default function Nav() {
  // Utilisation de usePathname pour obtenir le chemin d'ancre de la page

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 hidden md:flex ">
      <div className="p-2 gap-2 md:gap-2 flex md:space-x-4 md:flex items-center md:p-2  bg-opacity-60 backdrop-blur-lg shadow-sm drop-shadow-lg border border-[#3E2ABF]/15 rounded-full text-sm">
        <Navigation />

        <DownloadCV />
      </div>
    </nav>
  );
}
