import { motion } from "framer-motion";

import {
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiFirebase,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiVite,
  SiAstro,
} from "react-icons/si";

interface TechCardProps {
  title: string;
  icon: React.ReactNode;
  className?: string;
}

function TechCard({ title, icon, className = "" }: TechCardProps) {
  return (
    <div className="flex items-center gap-2 rounded-lg  p-4 hover:bg-[#252B36] transition-colors">
      <span className={`text-2xl  rounded-full bg-[#1E2530] p-2 ${className}`}>
        {icon}
      </span>
      <span className="text-gray-200">{title}</span>
    </div>
  );
}

function TechGrid() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Backend Section */}
        <div className="space-y-4 ">
          <h2 className="text-2xl font-bold text-white mb-6">Backend</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
            <TechCard
              title="Node.js"
              icon={<SiNodedotjs />}
              className="text-[#539E43]"
            />
            <TechCard
              title="Express"
              icon={<SiExpress />}
              className="text-white"
            />
            <TechCard
              title="MongoDB"
              icon={<SiMongodb />}
              className="text-[#47A248]"
            />
            <TechCard
              title="PostgreSQL"
              icon={<SiPostgresql />}
              className="text-[#336791]"
            />
            <TechCard
              title="MySQL"
              icon={<SiMysql />}
              className="text-[#4479A1]"
            />
            <TechCard
              title="Prisma"
              icon={<SiPrisma />}
              className="text-white"
            />
          </div>
        </div>

        {/* Frontend Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white mb-6">Frontend</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
            <TechCard
              title="React"
              icon={<SiReact />}
              className="text-[#61DAFB]"
            />
            <TechCard
              title="Next.js"
              icon={<SiNextdotjs />}
              className="text-white"
            />
            <TechCard
              title="TypeScript"
              icon={<SiTypescript />}
              className="text-[#3178C6]"
            />
            <TechCard
              title="Tailwind CSS"
              icon={<SiTailwindcss />}
              className="text-[#06B6D4]"
            />
            <TechCard
              title="JavaScript"
              icon={<SiJavascript />}
              className="text-[#F7DF1E]"
            />
            <TechCard title="Astro" icon={<SiAstro />} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Technologies() {
  return (
    <div className="container">
      {/* <div className="container mb-8">
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
      </div> */}
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-xl md:text-3xl font-bold inline-block py-12"
      >
        {"<Technologies />"}
      </motion.h1>
      <TechGrid />
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
