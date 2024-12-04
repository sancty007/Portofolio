/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";

export default function GitHubStats() {
  return (
    <div className="container w-full">
      <div>
        <h2 className="text-xl  md:text-3xl font-bold inline-block">
          {"<"}GitHub Stats {"/>"}
        </h2>
      </div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-8  p-8  rounded-lg"
      >
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
          <img
            src={`https://github-readme-stats.vercel.app/api?username=sancty007&show_icons=true&theme=radical&bg_color=1e293b&hide_border=true&title_color=3E2ABF&text_color=ffffff&icon_color=3E2ABF`}
            alt="GitHub Stats"
            width={495}
            height={195}
          />
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=sancty007&theme=radical&background=1e293b&hide_border=true&ring=3E2ABF&fire=3E2ABF&currStreakLabel=3E2ABF"
            alt="GitHub Streak"
            width={495}
            height={195}
          />
        </div>
        <div>
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=sancty007&layout=compact&theme=radical&bg_color=1e293b&hide_border=true&title_color=3E2ABF&text_color=ffffff"
            alt="Top Languages"
            width={495}
            height={195}
          />
        </div>
      </motion.div>
    </div>
  );
}
