import { Spotlight } from "./ui/Spotlight";

export default function SpotlightComponent() {
  return (
    <div className="">
      {/* Animated Spotlights */}
      <div className="absolute left-0 right-0 inset-0 pointer-events-none">
        <Spotlight
          className="animate-blue-500 opacity-50 -top-40 left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="animate-[blue_3s_infinite] opacity-60 h-[80vh] w-[50vw]  top-10"
          fill="purple"
        />
        <Spotlight
          className="animate-[blue_2.5s_infinite] opacity-50 left-80 top-28 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>
    </div>
  );
}
