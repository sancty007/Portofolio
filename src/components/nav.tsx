"use client";

import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const navSection: { [path: string]: string } = {
  "#about": "About",
  "#skills": "Skills",
  "#projects": "Projects",
  "#contact": "Contact",
};
export default function Nav() {
  return (
    <nav className="hidden container  md:flex justify-between items-center h-16 bg-opacity-30">
      <div className="flex items-center space-x-4 pr-6 ">
        {Object.entries(navSection).map(([path, label]) => (
          <Link
            key={path}
            href={path}
            className=" hover:border-b-2 border-[#3E2ABF] transition-colors duration-200 "
          >
            {label}
          </Link>
        ))}
      </div>
      <Button className="px-6 m-8  hover:text-[#f3f3de] ">Contact me</Button>
    </nav>
  );
}
