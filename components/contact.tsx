import { LuGithub, LuLinkedin, LuTwitter } from "react-icons/lu";
import Button from "./button";
import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      className="container flex flex-col gap-8 items-start py-8 px-8 mx-auto max-w-6xl sm:py-16 md:py-20 lg:py-28"
    >
      <h2 className="text-xl font-medium uppercase text-primary">Contact Me</h2>
      <div className="flex flex-col gap-16 justify-between items-center w-full md:flex-row">
        <form className="flex flex-col gap-4 p-4 w-full rounded-lg min-w-1/2 bg-card md:w-fit">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="p-2 rounded-sm border-none bg-background outline outline-border focus:outline-primary"
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Your email address"
            className="p-2 rounded-sm border-none bg-background outline outline-border focus:outline-primary"
          />
          <label htmlFor="message">Message</label>
          <textarea
            placeholder="Your message"
            className="p-2 rounded-sm border-none bg-background outline outline-border focus:outline-primary"
          ></textarea>
          <Button type="submit">Send Message</Button>
        </form>
        <div className="flex flex-col gap-6 items-start">
          <h4 className="text-lg font-medium text-foreground/70">
            Get In Touch with me through my socials
          </h4>
          <div className="flex flex-col gap-4 items-start w-full">
            <Link
              href="https://twitter.com/@HamitoucheBilel"
              className="flex gap-2 items-center text-lg group"
            >
              <div className="p-2 rounded-md transition-colors bg-card group-hover:text-primary">
                <LuTwitter size="28" />
              </div>
              <span>Twitter</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/bilel-hamitouche-a42b3626b"
              className="flex gap-2 items-center text-lg group"
            >
              <div className="p-2 rounded-md transition-colors bg-card group-hover:text-primary">
                <LuLinkedin size="28" />
              </div>
              <span>LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/bilelhamitouche"
              className="flex gap-2 items-center text-lg group"
            >
              <div className="p-2 rounded-md transition-colors bg-card group-hover:text-primary">
                <LuGithub size="28" />
              </div>
              <span>GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
