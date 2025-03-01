import Project from "@/types/project";
import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiLink } from "react-icons/fi";

function ProjectCard({
  title,
  imageUrl,
  description,
  demoLink,
  githubLink,
  type,
  tags,
}: Project) {
  return (
    <div className="flex flex-col items-start border border-base-300 card bg-base-100">
      <Image
        src={imageUrl}
        alt={title + " image"}
        width={400}
        height={300}
        className="size-full"
      />
      <div className="space-y-1 card-body">
        <h2 className="text-xl font-bold card-title">
          {title}
          <div className="badge badge-secondary">{type}</div>
        </h2>
        <p>{description}</p>
        <div className="justify-start card-actions">
          {tags.map((tag, index) => (
            <div className="badge badge-neutral" key={index}>
              {tag}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 items-start">
          <Link
            href={demoLink}
            target="_blank"
            className="flex gap-2 items-center text-base font-semibold link link-hover max-w-fit"
          >
            <FiLink />
            Live Demo
          </Link>
          <Link
            href={githubLink}
            target="_blank"
            className="flex gap-2 items-center text-base font-semibold link link-hover max-w-fit"
          >
            <FiGithub />
            View on Github
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
