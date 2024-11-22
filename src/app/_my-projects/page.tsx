"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

import { useState } from "react";
import React from "react";

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Yekola na Bomoko",
    description:
      "Yekola na Bomoko pour allier éducation, collaboration et innovation. La plateforme offre des compétences pratiques et prépare les utilisateurs aux défis du marché du travail.",
    image: "/images/yekola.png",
    link: "https://yeekola-xlsa.vercel.app/",
    gitHubLink: "https://github.com/sancty007/yeekola.git",
  },
  {
    title: "Mosala",
    description:
      "Faciliter l'accès à l'emploi et à la formation pour les jeunes, tout en aidant les entreprises à découvrir et à cultiver les talents de demain.",
    image: "/images/mosala.png",
    link: "https://projet-mossala-3mh5.vercel.app",
    gitHubLink: "https://github.com/PotterFx/projet_mossala.git",
  },
  {
    title: "l’incubateur de l’Université Marien-Ngouabi",
    description:
      "Insertion et accompagnement des étudiantsdans le monde professionnel",
    image: "/images/univer.png",
    link: "https://incubateur-umng.site/",
    gitHubLink: "https://github.com/PotterFx/projet_incubateur_umng.git",
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
    <section className="container mb-16" id="projects">
      <motion.h2
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-semibold  border-b border-blue-500 pb-8 py-12 mb-20"
      >
        {" <"} Projects
        {" / >"}
      </motion.h2>
      <div className="relative bg-white p-5 bg-opacity-10 md:p-20 rounded-lg shadow-lg transition-all duration-300 hover:shadow-[#3E2ABF] hover:shadow-md space-y-8">
        <motion.div
          key={currentProject}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="md:flex-row items-center space-y-8"
        >
          <div className="md:w-full">
            <Image
              src={projects[currentProject].image}
              alt={projects[currentProject].title}
              width={1000}
              height={500}
              className="md:shadow-md md:w-full"
            />
          </div>
          <div className="space-y-4">
            <h3 className="md:text-2xl font-semibold md:mb-2 text-blue-300 ">
              {projects[currentProject].title}
            </h3>
            <p className="text-gray-300 md:mb-4">
              {projects[currentProject].description}
            </p>
            <div className="md:space-x-4">
              <Link
                href={projects[currentProject].link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#3E2ABF] text-white px-4 py-2 rounded-md hover:bg-[#312581] transition-colors duration-200"
              >
                {"viewProject"}
              </Link>
              {/*  <Link
                  href={projects[currentProject].gitHubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-500  px-4 py-2 rounded-md bg-white transition-colors duration-200"
                >
                  {"show github"}
                </Link> */}
            </div>
          </div>
        </motion.div>

        {/*  transform -translate-y-1/2 transition-colors duration-200*/}
        <div className="">
          <button
            onClick={prevProject}
            className="absolute  md:top-1/2 md:left-4  bg-[#3E2ABF] p-2 rounded-full hover:bg-[#312581] "
            aria-label={"previousProject"}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextProject}
            className="absolute md:top-1/2 right-4 md:right-4  hover:bg-[#312581]  p-2 rounded-full bg-[#3E2ABF] transition-colors duration-200"
            aria-label={"nextProject"}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
