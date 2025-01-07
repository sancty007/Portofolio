"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { SlMenu } from "react-icons/sl";
import Navigation from "@/data/navData";
import Link from "next/link";
import { Button } from "./ui/button";
import handleDownload from "@/pages/api/route";
export default function NavMobil() {
  return (
    <div className="">
      <Sheet>
        <SheetTrigger className="z-50 text-white md:hidden p-6 top-0 right-0 space-y-8">
          <SlMenu />
        </SheetTrigger>
        <SheetContent side="right" className="">
          <div className="flex flex-col space-y-8">
           <Navigation />
            <Button
              className="md:px-6 hover:text-[#f3f3de] bg-[#3E2ABF] shadow-sm shadow-[#3E2ABF] uppercase hover:shadow-[#9687f7]"
              onClick={handleDownload}
            >
              Download cv
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
