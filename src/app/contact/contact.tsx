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
      <section className="relative z-10" id="contact">
        <div className="bg-gradient-to-t  from-[#3E2ABF] via-bg-slate-9 to-transparent z-10 flex items-center justify-center md:px-2 sm:px-6  ">
          {/*  fields on the right  */}

          <div className=" p-4 shadow-[#4a4379]/15 md:p-6 overflow-hidden  max-w-2xl mx-auto space-y-4">
            <h1 className="text-xl md:text-3xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#3E2ABF] to-white ">
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
