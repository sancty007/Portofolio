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
    <div className="container px-28 ">
      <nav className=" hidden md:flex justify-between items-center h-16 bg-white  bg-opacity-30">
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
        <Button className="px-6 m-8 bg-[#3E2ABF] hover:bg-[#8c7cf3] text-[#FFFF9C] hover:text-[#f3f3de] ">
          Contact me
        </Button>
      </nav>
    </div>
  );
}
