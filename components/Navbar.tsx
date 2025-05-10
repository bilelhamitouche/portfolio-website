import Link from "next/link";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center p-4">
      <Link href="/" className="text-xl font-semibold text-primary">
        Bilel.Hamitouche
      </Link>
      <nav className="hidden gap-4 items-center font-medium md:flex">
        <Link
          href="/tech-stack"
          className="transition-colors hover:text-primary"
        >
          Tech Stack
        </Link>
        <Link href="/projects" className="transition-colors hover:text-primary">
          Projects
        </Link>
        <Link href="/contact" className="transition-colors hover:text-primary">
          Contact
        </Link>
      </nav>
      <Button asChild className="hidden md:block">
        <Link href="/resume" download target="_blank" className="font-semibold">
          Resume
        </Link>
      </Button>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="block cursor-pointer md:hidden">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className="p-4 w-full" side="top">
          <SheetHeader className="p-0 m-0">
            <SheetTitle asChild>
              <Link href="/" className="text-xl font-bold text-primary">
                Bilel.Hamitouche
              </Link>
            </SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-2 items-center w-full text-center">
            <Link
              href="/tech-stack"
              className="p-2 w-full transition-colors hover:text-primary"
            >
              Tech Stack
            </Link>
            <Link
              href="/projects"
              className="p-2 w-full transition-colors hover:text-primary"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="p-2 w-full transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </nav>
          <Button asChild className="w-full">
            <Link href="/resume" target="_blank" className="font-semibold">
              Resume
            </Link>
          </Button>
        </SheetContent>
      </Sheet>
    </header>
  );
}
