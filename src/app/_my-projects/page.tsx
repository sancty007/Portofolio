import React from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import { PinContainer } from "@/components/ui/components/ui/pin";
import { Button } from "@/components/ui/button";

export default function ProjectsPage() {
  return (
    <div className="container py-20" id="projects">
      <h1 className="heading">
        Quelques <span className="text-purple">projets récents</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-8 p-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-full sm:w-96 rounded-lg overflow-hidden border-2 border-[#3E2ABF] shadow-sm shadow-[#3E2ABF]"
          >
            <div className="relative w-full h-48 overflow-hidden p-2">
              <Image
                src={project.img}
                alt={project.title}
                width={320}
                height={240}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                {project.title}
              </h2>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {project.des}
              </p>
              <Button className="inline-block px-6 hover:text-[#9180fa] bg-[#3E2ABF] shadow-sm shadow-[#3E2ABF]">
                Accéder au projet
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
