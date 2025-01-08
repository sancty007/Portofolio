"use client";

import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Navigation from "@/data/navData";
import handleDownload from "@/pages/api/route";

export default function Nav() {
  // Utilisation de usePathname pour obtenir le chemin d'ancre de la page

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 hidden md:flex ">
      <div className="p-2 gap-2 md:gap-2 flex md:space-x-4 md:flex items-center md:p-2  bg-opacity-60 backdrop-blur-lg shadow-sm drop-shadow-lg border border-[#3E2ABF]/15 rounded-full text-sm">
        <Navigation />

        <Button
          className="md:px-6 hover:text-[#f3f3de] bg-[#3E2ABF] shadow-sm uppercase rounded-full gap-x-1"
          onClick={handleDownload}
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
          cv
        </Button>
      </div>
    </nav>
  );
}
