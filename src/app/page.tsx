"use client";

import { motion } from "framer-motion";

import Skills from "./skills/skills";
import About from "./_about/about";
import Contact from "./contact/contact";
/* import Nav from "@/components/nav"; */
import Image from "next/image";
import Background from "@/components/ui/background";

import Presentation from "@/components/presentation";
import SpotlightComponent from "@/components/SpotlightComponents";
import Projects from "./_my-projects/page";
import GitHubStats from "./_GitHubStats/page";
import { Code2 } from "lucide-react";
import Technologies from "./_technology/page";

// const skills = ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS"];

export default function Portfolio() {
  new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div className="bg-slate-950 ">
      <SpotlightComponent />
      <div className="py-20 relative text-white lg:py-40 ">
        {/*  header  */}

        <header className="space-y-4 mb-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className=" relative z-10 flex justify-center items-center "
          >
            <Image
              src="/images/profil2.jpg"
              width={500}
              height={500}
              alt="Picture of the author"
              className="rounded-full w-52 h-52 object-cover border border-[#3E2ABF]/15"
            />
            <div className="absolute -bottom-2 ml-28 bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-full border border-[#3E2ABF]/15">
              <Code2 className="w-5 h-5 text-white " />
            </div>
          </motion.div>
          <div className="container flex flex-col md:flex-row justify-center items-center">
            <div className="order-2 md:order-1 md:text-center md:tracking-wide space-y-8">
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="sm:text-5xl lg:text-4xl font-bold mb-2 "
              >
                <span className="inline-block ml-2 transform animate-wave text-4xl">
                  👋
                </span>
                <span className="text-[#3E2ABF] ">{"I'"}m </span>
                Sanctifier Yaw-Mensah
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-2xl md:text-xl text-gray-400 md:mb-4 font-bold"
              >
                Full-Stack Developer
              </motion.p>
              <Presentation />
            </div>
          </div>
        </header>

        <main className="">
          {/*  <Background /> */}

          {/* apropos de moi */}
          <Skills />
          <About />
          {/* mes Compétences  */}
          <Technologies />

          {/* Mes Statistiques GitHub */}
          <GitHubStats />
          {/*  nos projects  */}
          <Projects />

          {/*  Nos contact */}
          <Contact />
        </main>
      </div>
    </div>
  );
}
