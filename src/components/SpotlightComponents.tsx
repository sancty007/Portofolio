import { Spotlight } from "./ui/Spotlight";

export default function SpotlightComponent() {
  return (
    <div className="relative">
      {/* Animated Spotlights */}
      <div className="absolute inset-0 pointer-events-none">
        <Spotlight
          className="animate-blue-500 opacity-50 -top-40 left-10 sm:left-5 sm:-top-20 md:-left-32 md:-top-20 lg:-top-40 lg:left-10 h-[70vh] sm:h-[60vh] md:h-[80vh] lg:h-screen"
          fill="white"
        />
        <Spotlight
          className="animate-[blue_3s_infinite] opacity-60 h-[60vh] sm:h-[50vh] md:h-[70vh] lg:h-[80vh] w-[70vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] top-10 sm:top-5 md:top-10"
          fill="purple"
        />
        <Spotlight
          className="animate-[blue_2.5s_infinite] opacity-50 left-40 sm:left-20 md:left-40 lg:left-80 top-28 sm:top-16 md:top-24 lg:top-28 h-[60vh] sm:h-[50vh] md:h-[70vh] lg:h-[80vh] w-[70vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw]"
          fill="blue"
        />
      </div>
    </div>
  );
}
