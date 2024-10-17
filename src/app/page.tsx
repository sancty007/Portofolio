"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

const skills = ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS"];

const projects = [
  {
    title: "E-commerce App",
    description: "Une application complète de commerce électronique",
  },
  {
    title: "Dashboard Analytics",
    description: "Un tableau de bord interactif pour l'analyse de données",
  },
  {
    title: "Social Media Platform",
    description: "Une plateforme de médias sociaux moderne",
  },
];

export default function Portfolio() {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900 text-white">
      <header className="p-6">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center"
        >
          sanctifier Yaw-Mensah
        </motion.h1>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-center mt-2"
        >
          Développeur Full Stack
        </motion.p>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section className="mb-16">
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold mb-6"
          >
            Compétences
          </motion.h2>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white bg-opacity-20 rounded-full px-4 py-2"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold mb-6"
          >
            Projets
          </motion.h2>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-white bg-opacity-10 p-6 rounded-lg"
              >
                <h3 className="text-2xl font-semibold mb-2">
                  {projects[currentProject].title}
                </h3>
                <p>{projects[currentProject].description}</p>
              </motion.div>
            </AnimatePresence>
            <button
              onClick={prevProject}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextProject}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </section>

        <section>
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold mb-6"
          >
            Contact
          </motion.h2>
          <div className="flex justify-center space-x-6">
            <motion.a
              href="https://github.com/sancty007/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white bg-opacity-20 p-3 rounded-full"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/sanctifier-yaw-mensah/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white bg-opacity-20 p-3 rounded-full"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="sanctifieryawmensah55@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white bg-opacity-20 p-3 rounded-full"
            >
              <Mail size={24} />
            </motion.a>
          </div>
        </section>
      </main>
    </div>
  );
}
