import Image from "next/image";

export default function About() {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 justify-center items-center md:space-y-10 gap-20" id="about">
      <div className="gap-20 ">
        <Image
          src="/images/about_me2.jpg"
          width={500}
          height={500}
          className="w-full h-full object-cover"
          alt="about sanctifier yaw-mensah"
        />
      </div>
      <div className="space-y-10">
        <h1 className="border-4 border-[#FFFF9C] rounded-tl-2xl rounded-br-2xl px-24 py-6 text-center text-xl md:text-2xl inline-block">
          About
        </h1>
        <p>
          Je suis Sanctifier Yaw-Mensah, développeur passionné par la création
          d&apos;applications web innovantes. Étudiant en informatique, je me
          spécialise dans le développement full-stack avec des compétences en
          React, Django, et Docker. Mon objectif est de concevoir des solutions
          performantes et intuitives, en me défiant constamment d&apos;explorer
          de nouvelles technologies. Chaque projet est une opportunité de
          repousser mes limites et de livrer des produits à forte valeur ajoutée
          pour les utilisateurs. Qu&apos;il s&apos;agisse d&apos;applications
          mobiles, de sites web dynamiques ou de plateformes complexes, je
          m&apos;engage pleinement dans chaque défi.
        </p>
      </div>
    </div>
  );
}
