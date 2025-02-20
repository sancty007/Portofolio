import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <div
      className="relative z-10 container grid grid-cols-1 space-y-4 md:grid-cols-1 lg:grid-cols-2 justify-center items-center lg:gap-20 lg:py-24 lg:mt-4"
      id="about"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="md:gap-20 h-80 relative z-10"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="absolute inset-0 bg-[#3E2ABF] blur-3xl rounded-lg transform rotate-3 "
        ></motion.div>
        <Image
          src="/images/about_me2.jpg"
          width={300}
          height={300}
          className="w-full h-full object-cover rounded-lg border border-[#3E2ABF]/15 relative z-10 "
          alt="about sanctifier yaw-mensah"
        />
      </motion.div>
      {/* 
      border-[#FFFF9C] rounded-tl-2xl rounded-br-2xl border-4  */}
      <div className="md:space-y-5 ">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="py-4 text-xl lg:text-3xl font-bold inline-block "
        >
          <span className="bg-gradient-to-r from-[#3E2ABF] via-white to-white text-transparent bg-clip-text">
            {" <"} About{" / >"}
          </span>
        </motion.h1>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className=" leading-relaxed  md:leading-loose "
        >
          🚀 Développeur Fullstack passionné et créatif, je conçois et développe
          des applications web performantes en combinant Next.js (TypeScript),
          Vue.js, Node.js et Express.js. Fort d’une solide expertise en UI/UX
          design avec Figma, je crée des interfaces intuitives et optimisées
          pour offrir des expériences utilisateurs exceptionnelles
        </motion.p>
      </div>
    </div>
  );
}
