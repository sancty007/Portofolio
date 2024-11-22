"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Button
      className="animate-bounce fixed bottom-4 right-4 p-2 hover:bg-gray-500 bg-white rounded-full shadow-lg transition-opacity duration-1000 z-50"
      onClick={scrollToTop}
      aria-label="Retour en haut de la page"
      size="icon"
    >
      <ArrowUp className="h-6 w-6 text-black" />
    </Button>
  );
}
