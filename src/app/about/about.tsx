import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <div
      className="relative z-10 container grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-center items-center lg:gap-20 lg:py-24 mt-4"
      id="about"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="md:gap-20 h-80 "
      >
        <Image
          src="/images/about_me2.jpg"
          width={300}
          height={300}
          className="w-full h-full object-cover rounded-lg "
          alt="about sanctifier yaw-mensah"
        />
      </motion.div>
      {/* 
      border-[#FFFF9C] rounded-tl-2xl rounded-br-2xl border-4  */}
      <div className="md:space-y-5 ">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="py-4 text-xl lg:text-3xl font-bold inline-block"
        >
          {" <"}About{" / >"}
        </motion.h1>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className=" leading-loose "
        >
          🫡 Hi! I am a passionate computer science student and currently a
          finalist in my computer science degree. My particular interest in
          programming and cybersecurity has allowed me to develop a versatile
          expertise, ranging from software development to system administration,
          including database management and cybersecurity. Curious and
          motivated, I constantly challenge myself to learn and master new
          technologies to solve complex problems and innovate. I aspire to
          contribute to exciting projects, collaborate with dynamic teams, and
          continue to evolve in this ever-changing field.
          {/*  Je suis Sanctifier Yaw-Mensah, développeur full-stack passionné par la
          création d&apos;applications web performantes et intuitives. Étudiant
          en informatique, je maîtrise des technologies comme{" "}
          <span className="underline decoration-blue-500 px-2 ">React</span>,{" "}
          <span className="underline decoration-green-600 px-2 ">Django</span>{" "}
          et <span className="underline decoration-blue-400 px-2 ">Docker</span>
          . Chaque projet est pour moi l&apos;occasion de relever des défis,
          d&apos;explorer de nouvelles technologies et de livrer des solutions
          innovantes qui apportent une réelle valeur aux utilisateurs. */}
        </motion.p>
      </div>
    </div>
  );
}
