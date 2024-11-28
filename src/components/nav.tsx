"use client";

import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const navSection: { [path: string]: string } = {
  "#about": "À propos",
  "#skills": "Compétences",
  "#projects": "Projets",
  "#contact": "Contact",
};
export default function Nav() {
  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="p-2 gap-2 md:gap-4 flex md:space-x-4 md:flex items-center md:p-4 bg-slate-950/70 bg-opacity-60 backdrop-blur-lg shadow-sm drop-shadow-lg shadow-[#3E2ABF] rounded-md text-sm">
        {Object.entries(navSection).map(([path, label]) => (
          <Link
            key={path}
            href={path}
            className="text-white hover:border-b-2 border-[#3E2ABF] transition-colors duration-200 "
          >
            {label}
          </Link>
        ))}
        <Button className="md:px-6 hover:text-[#f3f3de] bg-[#3E2ABF] shadow-sm shadow-[#3E2ABF]">
          Télécharger CV
        </Button>
      </div>
    </nav>
  );
}
