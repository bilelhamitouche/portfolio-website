import SkillsCard from "./SkillsCard";

function Skills() {
  return (
    <section id="skills" className="py-12 pr-4 pl-8 md:py-24 lg:py-32">
      <h2 className="mb-12 text-3xl font-bold text-center sm:text-4xl md:text-5xl lg:text-6xl">
        Tech Stack
      </h2>
      <div className="grid grid-cols-1 gap-8 place-content-center md:grid-cols-2">
        <SkillsCard
          title="Frontend"
          stack={[
            "Typescript",
            "React",
            "NextJS",
            "TailwindCSS",
            "DaisyUI",
            "SCSS",
          ]}
        />
        <SkillsCard
          title="Backend"
          stack={["NodeJS", "Express", "PostgreSQL", "Prisma", "REST API"]}
        />
        <SkillsCard
          title="Tools"
          stack={["Linux", "Jest", "Insomnia", "Neovim", "Markdown"]}
        />
        <SkillsCard
          title="DevOps"
          stack={["Vercel", "Git", "Docker", "GitHub", "Bash"]}
        />
      </div>
    </section>
  );
}

export default Skills;
