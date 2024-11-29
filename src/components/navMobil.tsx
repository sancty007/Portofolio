import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { SlMenu } from "react-icons/sl";
import { navSection } from "@/data/navData";
import Link from "next/link";
import { Button } from "./ui/button";
export default function NavMobil() {
  return (
    <div className="relative">
      <Sheet>
        <SheetTrigger className="z-50 relative text-white md:hidden p-6 top-0 right-0">
          <SlMenu />
        </SheetTrigger>
        <SheetContent side="bottom">
          <div className="space-x-4">
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
