import Project from "@/types/project";
import ProjectCard from "./ProjectCard";
function Projects() {
  const projects: Project[] = [
    {
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Personal Portfolio",
      description: "My personal portfolio project I built with NextJS",
      demoLink: "https://bilelhamitouche.vercel.app",
      githubLink: "https://github.com/bilelhamitouche/portfolio-website",
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
          <ProjectCard
            key={index}
            imageUrl={project.imageUrl}
            title={project.title}
            description={project.description}
            demoLink={project.demoLink}
            githubLink={project.githubLink}
            type={project.type}
            tags={project.tags}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
