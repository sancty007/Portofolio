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
        <span className="font-bold">
          Et si vos applications devenaient aussi indispensables que votre
          smartphone ? 🥳
        </span>
      </motion.p>
    </div>
  );
}
