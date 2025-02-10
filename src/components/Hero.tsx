import Link from "next/link";
import { ReactNode } from "react";
import { FiFacebook, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

interface Social {
  icon: ReactNode;
  link: string;
  text: string;
}

function Hero() {
  const socials: Social[] = [
    {
      icon: <FiGithub />,
      link: "https://github.com/bilelhamitouche",
      text: "Github",
    },
    {
      icon: <FiFacebook />,
      link: "https://facebook.com",
      text: "Facebook",
    },
    {
      icon: <FiTwitter />,
      link: "https://twitter.com",
      text: "Twitter",
    },
    {
      icon: <FiLinkedin />,
      link: "https://linkedin.com",
      text: "LinkedIn",
    },
  ];
  return (
    <section className="py-12 md:py-24 lg:py-32 hero">
      <div className="text-center hero-content">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
            Fullstack Developer
          </h1>
          <p className="py-6 text-base-content">
            I'm Bilel Hamitouche, a passionate Fullstack Developer dedicated to
            crafting seamless and engaging web experiences. Explore my work and
            discover how I can help bring your ideas to life!
          </p>
          <div className="flex gap-4 justify-center items-center">
            {socials.map((social, index) => (
              <Link
                href={social.link}
                className="py-4 px-4 text-base btn"
                key={index}
                target="_blank"
              >
                {social.icon}
                <span className="sr-only">{social.text}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
