import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code2 } from "lucide-react";

const Skills = [
  {
    icon: Code2, // Icône pour le développement (ajuster en fonction de la bibliothèque utilisée)
    title: "Développement Web",
    description:
      "Conception et développement d'applications web interactives en utilisant React, Django et des technologies modernes.",
  },
  {
    icon: Briefcase, // Icône pour les solutions ou la gestion de projets
    title: "Gestion de Projets",
    description:
      "Capacité à organiser, planifier et livrer des projets complexes en utilisant Docker, Git/GitHub, et des méthodologies agiles.",
  },
  {
    icon: GraduationCap, // Icône pour l'apprentissage et l'innovation
    title: "Apprentissage Continu",
    description:
      "Passionné par la technologie, j'explore constamment de nouveaux outils comme AWS, Spring Boot, et l'administration de bases de données Oracle.",
  },
];

export default function skills() {
  return (
    <section className="py-20 ">
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
      <div className="container mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {Skills.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white/5 hover:bg-white/20 transition-colors"
            >
              <item.icon className="w-12 h-12 text-[#3E2ABF] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
