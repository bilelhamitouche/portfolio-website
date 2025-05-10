import TechStackCard from "./TechStackCard";

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="container py-12 px-4 mx-auto space-y-8 sm:py-16 lg:py-20"
    >
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold">Tech Stack</h2>
        <p className="text-lg text-gray-500">
          These are the technologies I use every day
        </p>
      </div>
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
