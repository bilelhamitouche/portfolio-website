import ProjectsCard from "./ProjectsCard";

interface Props {}

interface Project {
  title: string;
  description: string;
  link: string;
  stack: string[];
}

function Projects({}: Props) {
  const projects: Project[] = [
    {
      title: "CV Application",
      description: "Simple CV builder application that works in real time.",
      link: "https://cv-application-lime-seven.vercel.app",
      stack: ["Javascript", "React"],
    },
    {
      title: "EasyCart",
      description:
        "E-Commerce application with minimal features like shopping cart and item selection using the fakestore API.",
      link: "https://easy-cart-eight.vercel.app",
      stack: ["Javascript", "React", "Context API"],
    },
    {
      title: "Marvel Memory Card",
      description:
        "A memory card game with marvel characters built using data from the Marvel API",
      link: "https://memory-card-pink-chi.vercel.app",
      stack: ["Javascript", "React"],
    },
  ];
  return (
    <section className="container flex flex-col gap-16 justify-center items-center mx-auto max-w-screen-lg text-center">
      <h2 className="text-3xl font-bold text-center">Projects</h2>
      <div className="flex flex-col gap-4">
        {projects.map((project, index) => (
          <ProjectsCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            stack={project.stack}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
