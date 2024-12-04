import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-white">
      <h1 className="text-8xl font-extrabold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Oops! Page introuvable</h2>
      <p className="text-lg text-gray-300 mb-6 text-center">
        La page que vous recherchez n&apos;existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        passHref
        className="bg-[#3E2ABF] shadow-sm shadow-[#3E2ABF] text-white py-2 px-6 rounded-lg font-medium transition-transform transform hover:scale-105"
      >
        Retour à l&apos;accueil
      </Link>
      <div className="mt-10">
        {/*         <img
          src="https://via.placeholder.com/400x300" // Remplace par ton image
          alt="404 Illustration"
          className="max-w-xs md:max-w-md"
        /> */}
      </div>
    </div>
  );
};

export default NotFound;
