'use client'

import { motion} from "framer-motion";
import Projets from "./_my-projects/page";
import { Github, Linkedin, Mail } from "lucide-react";

import Image from "next/image"
import Skills from "./skills/page";

const skills = ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS"];

/* const SkillsList = () => (
  */

/* const AnimatedSection = useMemo(() => {
  return ({ children, title }: { children: React.ReactNode; title: string }) => (
    <section className="mb-16">
      <motion.h2
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-semibold mb-6"
      >
        {title}
      </motion.h2>
      {children}
    </section>
  );
}, []); */

export default function Portfolio() {
 

  return (
    <div className=" min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900 text-white p-6">
      {/*  header  */}
      <header className="mb-16">
          <div className="container flex flex-col md:flex-row items-center gap-20">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="rounded-full w-48 h-48 md:w-64 md:h-64 bg-blue-950 ring-4 ring-blue-400 shadow-lg overflow-hidden"
            >
              <Image
                src="/images/me.jpg"
                alt="Sanctifier Yaw-Mensah"
                width={256}
                height={256}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="text-center md:text-left">
              <motion.h1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold mb-2"
              >
                Sanctifier Yaw-Mensah
              </motion.h1>
              <motion.p
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl md:text-2xl text-blue-300 mb-4"
              >
                Développeur Full Stack
              </motion.p>
              <motion.p
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="max-w-lg text-gray-300"
              >
                Passionné par la création d&apos;applications web innovantes et performantes. 
                Spécialisé dans les technologies modernes du développement web pour offrir 
                des solutions sur mesure et des expériences utilisateur exceptionnelles.
              </motion.p>
            </div>
          </div>
        </header>

      <main className="container mx-auto px-6 ">
          <Skills />

        {/*  nos projects */}
        <Projets/>

        {/*  Nos contact */}
        <section>
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold mb-6"
          >
            Contact
          </motion.h2>
          <div className="flex  space-x-6">
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
