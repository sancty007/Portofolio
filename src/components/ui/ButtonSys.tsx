import { Button } from "./button";
import { ReactNode } from "react";

interface ButtonSysProps {
  children: ReactNode;
}

export default function ButtonSys({ children }: ButtonSysProps) {
  return (
    <Button
      type="button"
      className="flex gap-4 px-6 text-white border-2 border-[#4a32e5] bg-[#4a32e5] bg-opacity-50 border-opacity-20 hover:bg-[#3E2ABF]/20 mt-6"
    >
      {children}
    </Button>
  );
}
