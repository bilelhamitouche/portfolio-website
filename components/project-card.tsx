import { ProjectType } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import Badge from "./badge";
import { LuGithub, LuLink } from "react-icons/lu";

interface ProjectCardProps {
  title: string;
  image: string;
  type: ProjectType;
  description: string;
  tags: string[];
  githubLink: string;
  demoLink: string;
}

export default function ProjectCard({
  title,
  image,
  type,
  description,
  tags,
  githubLink,
  demoLink,
}: ProjectCardProps) {
  return (
    <article className="flex overflow-hidden flex-col gap-2 items-start rounded-lg border-2 transition-transform duration-300 hover:-translate-y-2 border-border bg-card">
      <Image
        src={image}
        alt={`${title} image`}
        width={700}
        height={600}
        className="w-full rounded-t-lg transition-transform hover:scale-102"
      />
      <div className="flex flex-col gap-3 items-start p-4 w-full h-full">
        <p className="text-sm font-medium uppercase text-primary">{type}</p>
        <h3 className="text-xl font-medium">{title}</h3>
        <p className="text-sm text-foreground/70 line-clamp-3">{description}</p>
        <ul className="flex flex-wrap gap-2 items-center mt-auto">
          {tags.map((tag: string, index) => (
            <Badge key={index}>{tag}</Badge>
          ))}
        </ul>
        <div className="flex gap-3 items-center text-sm">
          <Link
            target="_blank"
            href={githubLink}
            className="flex gap-1 items-center hover:underline underline-offset-2"
          >
            <LuGithub />
            <span>Github</span>
          </Link>
          <Link
            target="_blank"
            href={demoLink}
            className="flex gap-1 items-center hover:underline underline-offset-2"
          >
            <LuLink />
            <span>Live Demo</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
