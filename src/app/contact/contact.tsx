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

function DialogCloseButton() {
  return (
    <Dialog>
      <DialogTrigger asChild className="text-center">
        <Button className="bg-[#3E2ABF] px-6 gap-2">
          {" "}
          <Mail className="h-5 w-5 group-hover:text-[#3E2ABF]" />
          Envoyer un message{" "}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-white">Envoyer un message </DialogTitle>
          {/* <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription> */}
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue="sanctifieryawmensah55@gmail.com"
              readOnly
            />
          </div>
          <Button type="submit" size="sm" className="py-4 gap-2">
            <span className="sr-only">Copy</span>
            <span>copier l&apos;email</span>
            <Copy />
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button className="bg-[#3E2ABF]">Fermer</Button>
          </DialogClose>
        </DialogFooter>
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
      <section className="" id="contact">
        {/*  <motion.h2
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-white"
        >
          {" <"}Contact{" / >"}
        </motion.h2> */}

        <div className="container flex to-indigo-100 items-center justify-center md:px-2 sm:px-6 ">
          {/*  fields on the right  */}

          <div className=" p-4 shadow-[#4a4379]/15 shadow-sm rounded-lg md:p-6 overflow-hidden  max-w-2xl mx-auto space-y-4">
            <h1 className="text-xl md:text-3xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#3E2ABF] to-white">
              Échangeons sur votre projet
            </h1>
            <p className="text-center leading-relaxed  md:leading-loose  py-6">
              Recruteur ou porteur de projet ? Discutons de comment je peux
              concrétiser vos idées ou renforcer vos équipes.
            </p>

            {/* mon email */}
            <div className="flex justify-center">
              {" "}
              <DialogCloseButton />
            </div>

            {/*  <a
              href="mailto:sanctifieryawmensah55@gmail.com"
              className="relative z-10 flex items-center gap-2 text-white hover:text-white transition-colors group"
            >
              <Mail className="h-5 w-5 group-hover:text-[#3E2ABF]" />
              <span>sanctifieryawmensah55@gmail.com</span>
            </a> */}

            <div className="flex justify-center mt-6">
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
          </div>
        </div>
      </section>
    </>
  );
}
