import React from "react";

import { motion } from "framer-motion";

import { technologies } from "@/data/skills";

import { LinkPreview } from "@/components/ui/link-preview";

/* const technologies = [
  {
    name: "React",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-6 h-6 text-[#61DAFB]"
        fill="currentColor"
      >
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
      </svg>
    ),
  },
  {
    name: "Vue",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-6 h-6 text-[#4FC08D]"
        fill="currentColor"
      >
        <path d="M24 1.61h-9.94L12 5.16 9.94 1.61H0l12 20.78zM12 14.08L5.16 2.23h4.43L12 6.41l2.41-4.18h4.43z" />
      </svg>
    ),
  },
  {
    name: "Figma",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-6 h-6 text-[#F24E1E]"
        fill="currentColor"
      >
        <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z" />
      </svg>
    ),
  },
];
 */
export default function Technologies() {
  return (
    <div
      className="relative z-10 py-12 container grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-center items-center md:gap-20 md:py-24 space-y-8"
      id="about"
    >
      <div className="space-y-4">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl md:text-3xl font-bold inline-block "
        >
          {"<Technologies />"}
        </motion.h1>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="  leading-relaxed md:leading-loose "
        >
          I&apos;m passionate about modern technologies 😉 that transform ideas
          into innovative solutions. I use{" "}
          <LinkPreview
            url="https://fr.react.dev"
            className="relative z-10 font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 text-[#9081f3] "
          >
            React
          </LinkPreview>
          ,{" "}
          <LinkPreview
            url="https://tailwindcss.com/"
            className="relative z-10 font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 text-[#9081f3] "
          >
            Tailwind CSS
          </LinkPreview>
          , Django, and{" "}
          <LinkPreview
            url="https://www.docker.com/"
            className="relative z-10 font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 text-[#9081f3] "
          >
            Docker
          </LinkPreview>{" "}
          for dynamic interfaces, robust systems, and smooth collaboration. Here
          is a list of technologies I have worked with
        </motion.p>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="md:gap-20  "
      >
        <div className="rounded-lg">
          <div className="grid grid-cols-2 md:gap-4 md:grid-cols-3 lg:grid-cols-3 overflow-hidden">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-3 rounded-lg p-4 text-white"
              >
                <div className="bg-zinc-800 rounded-full p-2 border border-[#3E2ABF]/15">
                  <tech.icon className="h-5 w-5 text-white " />
                </div>
                <span className="text-lg">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

{
  /* <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="container flex flex-col gap-4 pb-4 "
      id="skills"
    >
      <p className=" text-3xl font-semibold border-b border-blue-500  pb-8 py-12">
        {"<"}Skills{" / >"}
      </p>

      <div className="relative z-10 mt-8 rounded-full flex flex-wrap gap-4">
        {technologies.map((tech) => (
          <button
            key={tech.name}
            className="group flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-full text-sm font-medium  focus:outline-none focus:ring-2 ring-blue-500 "
          >
            {tech.icon}
            <span>{tech.name}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform transform group-hover:-translate-y-1" />
          </button>
        ))}
      </div>
</motion.div> */
}
