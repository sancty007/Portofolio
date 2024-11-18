"use client";

import { motion } from "framer-motion";
import Projets from "./_my-projects/page";

import Image from "next/image";
import Skills from "./_skills/page";
import About from "./about/about";
import Contact from "./contact/contact";

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
  new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900 text-white md:py-24 ">
      {/*  header  */}
      <header className="px-4 md:mb-24 md:p-16 ">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="order-2 md:order-1 text-left md:text-left">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl  md:text-5xl font-bold mb-2"
            >
              Sanctifier Yaw-Mensah
            </motion.h1>
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-left md:text-2xl text-blue-300 mb-4 font-bold"
            >
              Développeur Full-Stack | Spécialiste React|Django
            </motion.p>
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="md:max-w-lg md:text-gray-300"
            >
              <span className="font-bold ">
                Et si vos applications devenaient aussi indispensables que votre
                smartphone ?🥳
              </span>{" "}
              Passionné par la création d&apos;applications web innovantes, je
              conçois des solutions sur mesure avec des technologies modernes
              pour offrir des expériences utilisateur exceptionnelles.{" "}
              <span className="font-bold text-[#FFFF9C]">
                Je crée des applications qui rendent vos utilisateurs accro et
                font la différence.🦾
              </span>
            </motion.p>
          </div>

          <div className="order-1 md:flex justify-center items-center">
            {/*  <div className="absolute bottom-0 border-4 rounded-full  border-blue-400 w-80 h-80 transform -translate-y-52"></div> */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-full bg-blue-950 ring-4 ring-blue-400 shadow-lg overflow-hidden"
            >
              <Image
                src="/images/me.jpg"
                alt="Sanctifier Yaw-Mensah"
                width={500}
                height={500}
                className="w-full h-full object-cover "
              />
            </motion.div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 space-y-24 ">
        {/* mes Compétences */}
        <Skills />

        {/* apropos de moi */}
        <About />
        {/*  nos projects */}
        <Projets />

        {/*  Nos contact */}
        <Contact />
      </main>
    </div>
  );
}
