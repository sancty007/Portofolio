import { motion } from "framer-motion";

export default function presentation() {
  return (
    <div className="flex justify-center leading-relaxed lg:px-40 md:leading-loose">
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className=" md:text-gray-300 "
      >
        <span className="font-bold ">
          Et si vos applications devenaient aussi{" "}
        </span>
        <span className="font-bold">
          indispensables que votre smartphone ? 🥳
        </span>
        Passionné par la création d&apos;applications web innovantes, je conçois{" "}
        <span className="font-bold">
          des solutions sur mesure avec des technologies modernes
        </span>{" "}
        pour offrir des expériences utilisateur exceptionnelles.{" "}
        <span className="font-bold">
          {"<"}Je crée des applications qui rendent vos utilisateurs accros et
          font une différence.🦾 {" / >"}
        </span>
      </motion.p>
    </div>
  );
}
