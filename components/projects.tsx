import ProjectCard from "./project-card";

export default function Projects() {
  return (
    <section
      id="projects"
      className="container flex flex-col gap-8 py-8 px-8 mx-auto max-w-6xl sm:py-16 md:py-20 lg:py-28"
    >
      <h2 className="text-xl font-medium uppercase text-primary">Projects</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <ProjectCard
          title="ChatSync"
          image="/ChatSync.png"
          type="Fullstack"
          tags={[
            "React",
            "ChakraUI",
            "Websockets",
            "PostgreSQL",
            "Nestjs",
            "JWT Auth",
          ]}
          description="A real-time messaging app with instant updates, built for performance, scalability, and a smooth user experience."
          demoLink="https://chatsync-ochre.vercel.app"
          githubLink="https://github.com/bilelhamitouche/chatsync"
        />
        <ProjectCard
          title="JobSphere"
          image="/JobSphere.png"
          type="Fullstack"
          tags={[
            "Nextjs",
            "TailwindCSS",
            "Shadcn/ui",
            "PostgreSQL",
            "Role Based Auth",
          ]}
          description="A job portal app that connects job seekers and employers with job listings, filtering, and application management."
          demoLink="https://jobsphere-eight.vercel.app"
          githubLink="https://github.com/bilelhamitouche/jobsphere"
        />
        <ProjectCard
          title="ByteBlog"
          image="/ByteBlog.png"
          type="Fullstack"
          tags={["Nextjs", "TailwindCSS", "Shadcn/ui", "TipTap", "PostgreSQL"]}
          description="A tech blogging platform inspired by Medium for writing, publishing, and reading technical articles."
          demoLink="https://byteblog-fawn.vercel.app"
          githubLink="https://github.com/bilelhamitouche/byteblog"
        />
      </div>
    </section>
  );
}
