"use client";

import React from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function ProjectsAcceuil() {
  const router = useRouter();

  const limit = 3;
  return (
    <div className="container py-24" id="projects">
      <h1 className="text-xl  md:text-3xl   md:pb-8 md:py-12 font-bold text-white">
        {"<"}Projects{"/>"}
      </h1>
      <div className="group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 items-center justify-center gap-4 ">
        {projects.slice(0, limit).map((project) => (
          <div key={project.id} className="relative z-10 font-bold ">
            <div className="w-full rounded-lg overflow-hidden border border-[#3E2ABF]/15">
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
                <h2 className="text-lg font-bold text-white mb-2">
                  {project.title}
                </h2>
                <p className="text-sm text-white mb-4 line-clamp-2">
                  {project.des}
                </p>
                <Button className="inline-block px-6 text-white bg-[#3E2ABF] shadow-sm shadow-[#3E2ABF]">
                  {project.gitHub ? "Preview" : "View on GitHub"}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center ">
        <Button
          onClick={() => router.push("/projects")}
          className="relative z-10 inline-block px-6 text-white bg-[#3E2ABF] shadow-sm   mt-12"
        >
          Voir Plus
        </Button>
      </div>
    </div>
  );
}
