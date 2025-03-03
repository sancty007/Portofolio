"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ContactForm from "@/components/ContactForms";

function DialogCloseButton() {
  return (
    <Dialog>
      <DialogTrigger asChild className="text-center">
        <Button className="bg-[#3E2ABF] px-6 gap-2 rounded-full">
          {" "}
          <Mail className="h-5 w-5 group-hover:text-[#3E2ABF]" />
          Envoyez-moi un message{" "}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <ContactForm />
      </DialogContent>
    </Dialog>
  );
}

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
      <section className="relative z-10" id="contact">
        <div className="min-h-[600px]  bg-gradient-to-t  from-[#3E2ABF] via-bg-slate-9 to-transparent z-10 flex items-center justify-center md:px-2 sm:px-6  ">
          {/*  fields on the right  */}

          <div className=" p-4 shadow-[#4a4379]/15 md:p-6 overflow-hidden  max-w-2xl mx-auto space-y-4">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#3E2ABF] to-white ">
              Échangeons sur votre projet
            </h1>
            <p className="text-center leading-relaxed  md:leading-loose  py-6 font-bold">
              Recruteur ou porteur de projet ? Discutons de comment je peux
              concrétiser vos idées ou renforcer vos équipes.
            </p>

            {/* mon email */}
            <div className="flex justify-center">
              {" "}
              <DialogCloseButton />
            </div>

            {/*  <div className="flex justify-center mt-6">
              <div className="flex md:space-x-4">
                <div className="relative z-10 flex  space-x-6 ">
                  <motion.a
                    href="https://github.com/sancty007/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white bg-opacity-20 p-3 rounded-full  bg-[#3E2ABF]/15"
                  >
                    <Github size={24} />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/sanctifier-yaw-mensah/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white bg-opacity-20 p-3 rounded-full bg-[#3E2ABF]/15"
                  >
                    <Linkedin size={24} />
                  </motion.a>
                </div>
              </div>
            </div>
 */}
            {/* Bottom mask using a pseudo-element */}
          </div>
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#3E2ABF] to-transparent" />
          {/* Dark background section below */}
          <div className="bg-[#3E2ABF] h-20" />
        </div>
      </section>
    </>
  );
}
