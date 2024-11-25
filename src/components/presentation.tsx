import { motion } from "framer-motion";

export default function presentation() {
  return (
    <div className="flex justify-center md:px-40 leading-loose">
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className=" md:text-gray-300 "
      >
        <span className="font-bold ">
          Et si vos applications devenaient aussi{" "}
        </span>
        <span className="text-[#9081f3] font-bold">
          indispensables que votre smartphone ?🥳
        </span>
        Passionné par la création d&apos;applications web innovantes, je conçois
        des{" "}
        <span className="text-[#9081f3] font-bold">
          solutions sur mesure avec des technologies modernes
        </span>{" "}
        pour offrir des expériences utilisateur exceptionnelles.{" "}
        <span className="font-bold">
          {"<"}Je crée des applications qui rendent vos utilisateurs accro et
          font la différence.🦾 {" / >"}
        </span>
      </motion.p>
    </div>
  );
}
