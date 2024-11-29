import { motion } from "framer-motion";
import { LinkPreview } from "./ui/link-preview";

export default function presentation() {
  return (
    <div className="flex justify-center lg:px-40 leading-loose">
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className=" md:text-gray-300 "
      >
        <span className="font-bold ">What if your applications became as </span>
        <span className="text-primary font-bold">
          indispensable as your smartphone? 🥳
        </span>
        Passionate about creating innovative web applications, I design{" "}
        <span className="text-primary font-bold">
          custom solutions with modern technologies
        </span>{" "}
        to provide exceptional user experiences.{" "}
        <span className="font-bold">
          {"<"}I create applications that make your users addicted and make a
          difference.🦾 {" / >"}
        </span>
      </motion.p>
    </div>
  );
}
