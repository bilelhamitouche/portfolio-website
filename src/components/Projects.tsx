import Image from "next/image";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";

interface Project {
  imageUrl: string;
  title: string;
  description: string;
  demoLink: string;
  githubLink: string;
  type: "Frontend" | "Backend" | "Fullstack";
  tags: string[];
}

function Projects() {
  const projects: Project[] = [
    {
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Personal Portfolio",
      description: "My personal portfolio project I built with NextJS",
      demoLink: "https://bilelhamitouche.vercel.app",
      githubLink: "https://github.com/bilelhamitouche/personal-website",
      type: "Frontend",
      tags: ["NextJS", "Typescript", "TailwindCSS", "DaisyUI"],
    },
  ];
  return (
    <section id="projects" className="py-12 px-8 md:py-24 lg:py-32">
      <h2 className="mb-12 text-3xl font-bold text-center sm:text-4xl md:text-5xl lg:text-6xl">
        Projects
      </h2>
      <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            className="flex flex-col items-start border border-base-300 card bg-base-100"
            key={index}
          >
            <Image
              src={project.imageUrl}
              alt={project.title + " image"}
              width={400}
              height={300}
            />
            <div className="space-y-1 card-body">
              <h2 className="text-xl font-bold card-title">
                {project.title}
                <div className="badge badge-secondary">{project.type}</div>
              </h2>
              <p>{project.description}</p>
              <div className="justify-start card-actions">
                <div className="badge badge-outline">{project.tags[1]}</div>
                <div className="badge badge-outline">{project.tags[2]}</div>
              </div>
              <Link
                href={project.githubLink}
                className="flex gap-2 items-center text-base font-semibold link link-hover max-w-fit"
              >
                <FiGithub />
                View on Github
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
