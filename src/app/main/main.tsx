import Background from "@/components/ui/background";
import Skills from "@/components/Skills";
import Technologies from "@/components/Technology";
import GitHubStats from "@/components/GitHubStats";

import Contact from "@/app/contact/contact";
import About from "@/components/About";
import ProjectsAcceuil from "@/components/ProjetAcceuil";

export default function Main() {
  return (
    <main className="">
      <Background />

      {/* apropos de moi */}
      <Skills />
      <About />
      {/* mes Compétences  */}
      <Technologies />

      {/* Mes Statistiques GitHub */}
      <GitHubStats />
      {/*  nos projects  */}
      <ProjectsAcceuil />

      {/*  Nos contact */}
      <Contact />
    </main>
  );
}
