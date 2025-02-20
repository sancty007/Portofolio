"use client";

import { motion } from "framer-motion";

import Image from "next/image";

import Presentation from "@/components/presentation";
import SpotlightComponent from "@/components/SpotlightComponents";

import { Code2 } from "lucide-react";

import Main from "./main/main";

export default function Portfolio() {
  new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div className="bg-slate-950">
      <SpotlightComponent />
      <div className="py-20 relative text-white lg:py-24 ">
        {/*  header  */}

        <header className="space-y-4 lg:mb-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className=" relative z-10 flex justify-center items-center "
          >
            <Image
              src="/images/profil3.png"
              width={500}
              height={500}
              alt="Picture of the author"
              className="rounded-full w-52 h-52 object-cover border border-[#3E2ABF]/15"
            />
            <div className="absolute -bottom-2 ml-28 bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-full border border-[#3E2ABF]/15">
              <Code2 className="w-5 h-5 text-white " />
            </div>
          </motion.div>
          <div className="container flex flex-col md:flex-row justify-center items-center">
            <div className="order-2 md:order-1 md:text-center md:tracking-wide space-y-8">
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-xl lg:text-4xl font-bold mb-2 "
              >
                <span className="inline-block ml-2 transform animate-wave text-4xl">
                  👋
                </span>
                <span className="text-xl lg:text-4xl bg-gradient-to-r from-[#3E2ABF]  to-white text-transparent bg-clip-text">
                  I&apos;m{" "}
                </span>
                Sanctifier Yaw-Mensah
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-2xl md:text-xl text-gray-400 md:mb-4 font-bold"
              >
                Full-Stack Developer
              </motion.p>
              <Presentation />
            </div>
          </div>
        </header>

        <Main />
      </div>
    </div>
  );
}
