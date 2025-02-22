import Image from "next/image";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ButtonBack } from "@/components/ButtonBack";

export default function ProjectsPage() {
  return (
    <div className="container" id="projects">
      <ButtonBack />
      <h1 className="text-xl  md:text-3xl  lg:mb-6 md:pb-8 md:py-12 font-bold text-white">
        {"<"}Projects{"/>"}
      </h1>
      <div className="group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 items-center justify-center gap-4 py-24">
        {projects.map((project) => (
          <div key={project.id} className="relative z-10 font-bold ">
            <div className="w-full rounded-lg overflow-hidden border border-[#3E2ABF]/15">
              <div className="relative w-full h-48 overflow-hidden p-2">
                <Image
                  src={project.img}
                  alt={project.title}
                  width={320}
                  height={240}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-bold text-white mb-2">
                  {project.title}
                </h2>
                <p className="text-sm text-white mb-4 line-clamp-2">
                  {project.des}
                </p>
                <Link href={project.link}>
                  <Button className=" inline-block px-6 text-white  border-2 border-[#4a32e5] bg-[#4a32e5] bg-opacity-50 border-opacity-20 hover:bg-[#3E2ABF]/20 ">
                    {project.gitHub ? "Preview" : "View on GitHub"}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
