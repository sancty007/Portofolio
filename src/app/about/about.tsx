import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <div
      className="container grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-20 py-24"
      id="about"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="gap-20 h-80 "
      >
        <Image
          src="/images/about_me2.jpg"
          width={300}
          height={300}
          className="w-full h-full object-cover rounded-lg"
          alt="about sanctifier yaw-mensah"
        />
      </motion.div>
      {/* 
      border-[#FFFF9C] rounded-tl-2xl rounded-br-2xl border-4  */}
      <div className="space-y-5 ">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="py-6 text-xl md:text-3xl font-bold inline-block"
        >
          {"<About />"}
        </motion.h1>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className=" leading-loose "
        >
          Je suis Sanctifier Yaw-Mensah, développeur full-stack passionné par la
          création d&apos;applications web performantes et intuitives. Étudiant
          en informatique, je maîtrise des technologies comme React, Django et
          Docker. Chaque projet est pour moi l&apos;occasion de relever des
          défis, d&apos;explorer de nouvelles technologies et de livrer des
          solutions innovantes qui apportent une réelle valeur aux utilisateurs.
        </motion.p>
      </div>
    </div>
  );
}
