import Link from "next/link";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="container py-12 mx-auto space-y-4 text-center md:py-16 lg:py-20">
      <p className="font-semibold text-primary">Fullstack Developer</p>
      <h1 className="flex flex-col gap-2 text-4xl font-bold sm:text-5xl md:text-6xl lg:gap-4">
        <span>Crafting Digital</span>
        <span>Experiences With</span>
        <span className="text-primary">Modern Technologies</span>
      </h1>
      <p className="p-2 mx-auto mt-4 max-w-lg text-lg text-gray-500 md:max-w-xl md:text-xl">
        I build responsive and performant web applications with modern
        frameworks and best practices.
      </p>
      <div className="flex flex-col gap-4 justify-center items-center p-4 sm:flex-row">
        <Button size="lg" className="w-full font-semibold sm:w-fit" asChild>
          <Link href="#projects">View My Work</Link>
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="w-full font-semibold sm:w-fit"
          asChild
        >
          <Link href="#contact">Contact Me</Link>
        </Button>
      </div>
    </section>
  );
}
