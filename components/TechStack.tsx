import TechStackCard from "./TechStackCard";

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="container py-12 px-4 mx-auto space-y-8 sm:py-16 lg:py-20"
    >
      <h2 className="text-3xl font-bold text-center">Tech Stack</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <TechStackCard
          title="Frontend"
          stack={["Next.js", "React", "Typescript", "TailwindCSS", "Shadcn/UI"]}
        />
        <TechStackCard
          title="Backend"
          stack={[
            "Node.js",
            "ExpressJS",
            "PostgreSQL",
            "Drizzle ORM",
            "Rest API",
          ]}
        />
        <TechStackCard
          title="DevOps"
          stack={["Vercel", "GitHub", "Git", "Docker"]}
        />
        <TechStackCard
          title="Tools"
          stack={["Neovim", "Linux", "Bash", "Insomnia"]}
        />
      </div>
    </section>
  );
}
