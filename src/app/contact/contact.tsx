"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
/* import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons"; */

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
//import EmailCopier from "@/components/ui/components/ui/EmailCopier";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add form submission logic here (e.g., send data to backend)
    console.log("Form submitted");
    setIsSubmitted(true);
  };

  return (
    <>
      <section className="container" id="contact">
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold mb-6 pb-8 py-12  border-b-2 border-[#3E2ABF]"
        >
          {" <"}Contact{" / >"}
        </motion.h2>

        <div className="container to-indigo-100 items-center justify-center md:py-12 md:px-2 sm:px-6 space-y-4">
          {/*  fields on the right  */}
          <div className="p-4 shadow-[#4a4379] shadow-sm border-2 border-[#3E2ABF] rounded-lg md:p-6 overflow-hidden ">
            <h3 className="text-xl font-semibold mb-4">Information</h3>
            {/*  <p className="mb-2">
              <i className="fas fa-phone mr-2 text-white"></i>+242 068223310
            </p> */}
            <p className="md:mb-2">sanctifieryawmensah55@gmail.com</p>

            <h4 className="text-lg font-semibold mb-2 mt-6 ">Follow Me </h4>
            <div className="flex md:space-x-4">
              <div className="relative z-10 flex  space-x-6 ">
                <motion.a
                  href="https://github.com/sancty007/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white bg-opacity-20 p-3 rounded-full border-2 border-[#3E2ABF]"
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/sanctifier-yaw-mensah/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white bg-opacity-20 p-3 rounded-full border-2 border-[#3E2ABF]"
                >
                  <Linkedin size={24} />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
