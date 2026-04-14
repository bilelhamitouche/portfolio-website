import Image from "next/image";
import Button from "./button";

export default function Hero() {
  return (
    <section
      id="home"
      className="container flex flex-col-reverse gap-16 justify-between items-center p-8 mx-auto max-w-6xl sm:py-16 md:flex-row md:py-20 lg:py-28"
    >
      <div className="flex flex-col gap-6 items-start">
        <p className="text-lg uppercase text-primary">Hello, I&apos;m</p>
        <p className="text-4xl font-medium lg:text-5xl">Bilel Hamitouche</p>
        <p className="text-lg text-primary">Fullstack Developer</p>
        <p className="max-w-xl leading-6 text-foreground/70">
          I&apos;m a Fullstack Developer based in Algiers, Algeria. I enjoy
          building fast, reliable web applications from the ground up. I focus
          on writing clean, maintainable code and creating intuitive user
          experiences that feel effortless.
        </p>
        <div className="flex gap-2 items-center">
          <Button>Get In Touch</Button>
          <Button variant="outline">Download Resume</Button>
        </div>
      </div>
      <Image
        src="/avatar.png"
        alt="my image"
        width="300"
        height="300"
        className="rounded-full border-2 border-primary"
      />
    </section>
  );
}
