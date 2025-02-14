import Skill from "@/types/skill";
import SkillsCard from "./SkillsCard";

function Skills() {
  const skills: Skill[] = [
    {
      title: "Frontend",
      stack: [
        "Typescript",
        "React",
        "NextJS",
        "TailwindCSS",
        "DaisyUI",
        "SCSS",
      ],
    },
    {
      title: "Backend",
      stack: ["NodeJS", "Express", "PostgreSQL", "Prisma", "REST API"],
    },
    {
      title: "Tools",
      stack: ["Linux", "Jest", "Insomnia", "Neovim", "Markdown"],
    },
    {
      title: "DevOps",
      stack: ["Vercel", "Git", "Docker", "GitHub", "Bash"],
    },
  ];
  return (
    <section id="skills" className="py-12 pr-4 pl-8 md:py-24 lg:py-32">
      <h2 className="mb-12 text-3xl font-bold text-center sm:text-4xl md:text-5xl lg:text-6xl">
        Tech Stack
      </h2>
      <div className="grid grid-cols-1 gap-8 place-content-center md:grid-cols-2">
        {skills.map((skill, index) => (
          <SkillsCard key={index} title={skill.title} stack={skill.stack} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
