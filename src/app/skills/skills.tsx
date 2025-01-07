import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code2 } from "lucide-react";

const Skills = [
  {
    icon: Code2, // Icon for development (adjust based on the library used)
    title: "Web Development",
    description:
      "Design and development of interactive web applications using React, Django, and modern technologies.",
  },
  {
    icon: Briefcase, // Icon for solutions or project management
    title: "Project Management",
    description:
      "Ability to organize, plan, and deliver complex projects using Docker, Git/GitHub, and agile methodologies.",
  },
  {
    icon: GraduationCap, // Icon for learning and innovation
    title: "Continuous Learning",
    description:
      "Passionate about technology, I constantly explore new tools like AWS, Spring Boot, and Oracle database administration.",
  },
];

export default function skills() {
  return (
    <section className="relative z-10 py-20 lg:py-24 lg:mt-4" id="skills">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
      >
        {" <"}My Skills{" / >"}{" "}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="absolute -ml-1 text-purple-500"
        >
          _
        </motion.span>
      </motion.h2>
      <div className="container mx-auto bg-slate-950">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 "
        >
          {Skills.map((item, index) => (
            <div
              key={index}
              className=" group p-6 rounded-lg bg-slate-950 border border-[#3E2ABF]/15 hover:bg-white/20 transition-colors z-10"
            >
              <item.icon className="w-12 h-12 group-hover:text-[#3E2ABF] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 ">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
