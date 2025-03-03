"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { FaArrowLeft } from "react-icons/fa";

export function ButtonBack() {
  const router = useRouter();

  return (
    <Button
      type="button"
      onClick={() => router.push("/")}
      className="flex gap-4 px-6 text-white  border-2 border-[#4a32e5] bg-[#4a32e5] bg-opacity-50 border-opacity-20  hover:bg-[#3E2ABF]/20  mt-6 "
    >
      <FaArrowLeft /> Retour
    </Button>
  );
}
