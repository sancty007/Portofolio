import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { SlMenu } from "react-icons/sl";
import { navSection } from "@/data/navData";
import Link from "next/link";
import { Button } from "./ui/button";
export default function NavMobil() {
  return (
    <div className="">
      <Sheet>
        <SheetTrigger className="z-50  text-white md:hidden p-6 top-0 right-0 space-y-8">
          <SlMenu />
        </SheetTrigger>
        <SheetContent side="right" className="">
          <div className="flex flex-col space-y-8">
            {Object.entries(navSection).map(([path, label]) => (
              <Link key={path} href={path} className="">
                {label}
              </Link>
            ))}
            <Button className="">Download cv</Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
