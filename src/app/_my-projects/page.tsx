"use client";



import { AnimatePresence, motion } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

import { useState } from "react";
import React from 'react'

import Image from 'next/image';
import Link from 'next/link';
const projects = [
  {
    title: "Football Tournament Management",
    description:
      "Une application de gestion complète de tournois de football, incluant les équipes, les matchs et les classements.",
    image: "/path/to/image1.png",
    link: "https://example.com/project1",
  },
  {
    title: "Yeekola",
    description:
      "Une plateforme interactive , dédiée à l'organisation d'événements et au partage de connaissances.",
    image: "/path/to/image2.png",
    link: "https://example.com/project2",
  },
];

export default function Projets() {

  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="mb-16">
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold mb-6 border-b border-blue-500 pb-8 py-12 "
          >
            {("projects")}
          </motion.h2>
          <div className="relative bg-white bg-opacity-10 p-8 rounded-lg shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col md:flex-row items-center gap-8"
              >
                <div className="md:w-1/2">
                  <Image
                    src={projects[currentProject].image}
                    alt={projects[currentProject].title}
                    width={500}
                    height={300}
                    className="rounded-lg shadow-md"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-semibold mb-2 text-blue-300">
                    {projects[currentProject].title}
                  </h3>
                  <p className="text-gray-300 mb-4">{(projects[currentProject].description)}</p>
                  <Link
                    href={projects[currentProject].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
                  >
                    {("viewProject")}
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
            <button
              onClick={prevProject}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition-colors duration-200"
              aria-label={("previousProject")}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextProject}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition-colors duration-200"
              aria-label={("nextProject")}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </section>
  )
}
