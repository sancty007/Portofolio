"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { navSection } from "@/data/navData";
import handleDownload from "@/pages/api/route";

export default function Nav() {
  // Utilisation de usePathname pour obtenir le chemin d'ancre de la page
  const [path, setPath] = useState(window.location.hash);

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 hidden md:flex">
      <div className="p-2 gap-2 md:gap-2 flex md:space-x-4 md:flex items-center md:p-4 bg-slate-950/70 bg-opacity-60 backdrop-blur-lg shadow-sm drop-shadow-lg border border-[#3E2ABF]/15 rounded-md text-sm">
        {Object.entries(navSection).map(([key, label]) => (
          <Link
            key={key}
            href={key}
            className={`${
              key === path ? "border-b-2 border-[#3E2ABF]" : ""
            } text-white hover:border-b-2 border-[#3E2ABF] transition-all duration-200 uppercase`}
            onClick={() => {
              setPath(key);
            }}
          >
            {label}
          </Link>
        ))}

        <Button
          className="md:px-6 hover:text-[#f3f3de] bg-[#3E2ABF] shadow-sm shadow-[#3E2ABF] uppercase"
          onClick={handleDownload}
        >
          Download cv
        </Button>
      </div>
    </nav>
  );
}
