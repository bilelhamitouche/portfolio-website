import Link from "next/link";
import NavLink from "./nav-link";
import ThemeToggle from "./theme-toggle";

export default function Navbar() {
  return (
    <header className="p-4 rounded-md shadow-md bg-background">
      <div className="container flex justify-between items-center mx-auto w-full max-w-6xl">
        <Link
          className="p-1 text-xl font-bold tracking-tighter rounded-md text-primary"
          href="/"
        >
          {"<Bilel />"}
        </Link>
        <nav className="hidden gap-6 items-center md:flex">
          <NavLink href="#about">About Me</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
