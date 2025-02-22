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
      className="flex gap-4 px-6 text-white bg-[#3E2ABF] shadow-sm shadow-[#3E2ABF] mt-6 "
    >
      <FaArrowLeft /> Retour
    </Button>
  );
}
