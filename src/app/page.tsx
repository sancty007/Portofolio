"use client";

import { motion } from "framer-motion";
import Projets from "./_my-projects/page";

import Skills from "./_skills/page";
import About from "./about/about";
import Contact from "./contact/contact";
import Nav from "@/components/nav";
import Background from "@/components/ui/background";

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
{
  /* <div className="relative h-full w-full bg-slate-950">
<div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">


<div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>
</div>

<div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div></div>
</div> */
}

export default function Portfolio() {
  new Promise((resolve) => setTimeout(resolve, 2000));
  /* 
  from-purple-900 via-blue-900 to-teal-900 */
  return (
    <div className=" py-20 relative h-full w-full bg-slate-950 text-white md:py-40 ">
      {/*  header  */}

      <div className="">
        <header className="container">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="order-2 md:order-1 md:text-center md:tracking-wide space-y-8">
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
                className="text-xl  md:text-2xl text-blue-300 mb-4 font-bold"
              >
                Développeur Full-Stack | Spécialiste React|Django
              </motion.p>
              <div className="flex justify-center md:px-40 leading-loose">
                <motion.p
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className=" md:text-gray-300 "
                >
                  <span className="font-bold ">
                    Et si vos applications devenaient aussi indispensables que
                    votre smartphone ?🥳
                  </span>{" "}
                  Passionné par la création d&apos;applications web innovantes,
                  je conçois des solutions sur mesure avec des technologies
                  modernes pour offrir des expériences utilisateur
                  exceptionnelles.{" "}
                  <span className="font-bold">
                    {"<"}Je crée des applications qui rendent vos utilisateurs
                    accro et font la différence.🦾 {" / >"}
                  </span>
                </motion.p>
              </div>
            </div>

            {/*  <div className="absolute bottom-0 border-4 rounded-full  border-blue-400 w-80 h-80 transform -translate-y-52"></div> */}
            {/*  <div className="order-1 md:flex justify-center items-center">
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
            </div> */}
          </div>
        </header>
        <main className=" space-y-32 ">
          {/* <Background /> */}
          {/* mes Compétences  */}
          <Skills />

          {/* apropos de moi */}
          <About />
          {/*  nos projects  */}
          <Projets />

          {/*  Nos contact */}
          <Contact />
        </main>
      </div>
    </div>
  );
}
