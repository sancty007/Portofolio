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
        <div className=""></div>
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold mb-6 pb-8 py-12  border-b border-blue-500"
        >
          {" <"}Contact{" / >"}
        </motion.h2>
      </section>

      <div className="bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent) container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 to-indigo-100 items-center justify-center md:py-12 px-2 sm:px-6 space-y-4">
        <div className="max-w-md w-full space-y-2">
          {/* Phone container */}
          <div className="relative mx-auto bg-black rounded-[60px] h-[712px] w-[350px] shadow-md overflow-hidden ">
            {/* Phone screen */}
            <div className="absolute top-[14px] left-[14px] right-[14px] bottom-[14px] bg-white rounded-[46px] overflow-y-auto ">
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 shadow-sm  pb-8 py-12 ">
                Email Us
              </h2>

              <div className="px-6 py-8 ">
                {isSubmitted ? (
                  <div className="text-center ">
                    <FontAwesomeIcon
                      icon={faPaperPlane}
                      className="text-4xl mb-4"
                    />
                    <p className="text-xl font-semibold">
                      Message envoyé avec succès!
                    </p>
                    <p className="mt-2">
                      Nous vous répondrons dans les plus brefs délais.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 text-black "
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="  john Doe fabric"
                        className="mt-1 block w-full shadow-blue-300 rounded-md shadow-sm  sm:text-sm py-4 "
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="  johndoe@gmail.com"
                        required
                        className="mt-1 block w-full shadow-blue-300 rounded-md shadow-sm  sm:text-sm py-4"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="  my subject"
                        required
                        className="mt-1 block w-full shadow-blue-300 rounded-md shadow-sm  sm:text-sm py-4 "
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        placeholder=" my message "
                        className="mt-1 block w-full shadow-blue-300 rounded-md shadow-sm focus:ring-mosala_vert  sm:text-sm"
                      ></textarea>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-[#3E2ABF] text-white hover:text-white shadow-blue-300 focus:outline-none "
                      >
                        send
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/*  champs à droite  */}
        <div className="p-4 md:p-6 r shadow-[#3E2ABF] shadow-lg  rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Informations</h3>
          <p className="mb-2">
            <i className="fas fa-phone mr-2 text-white"></i>+242 068223310
          </p>
          <p className="mb-2">
            <i className="fas fa-envelope mr-2 text-white"></i>
            sanctifieryawmensah55@gmail.com
          </p>

          <h4 className="text-lg font-semibold mb-2 mt-6 ">follow me </h4>
          <div className="flex space-x-4">
            <div className="relative z-10 flex  space-x-6">
              <motion.a
                href="https://github.com/sancty007/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white bg-opacity-20 p-3 rounded-full"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/sanctifier-yaw-mensah/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white bg-opacity-20 p-3 rounded-full"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="sanctifieryawmensah55@gmail.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white bg-opacity-20 p-3 rounded-full"
              >
                <Mail size={24} />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
