import SkillsCard from "./SkillsCard";

interface Props {}

interface Skill {
  title: string;
  items: string[];
}

function Skills({}: Props) {
  const skills: Skill[] = [
    {
      title: "Frontend",
      items: ["Typescript", "React", "Tailwind", "DaisyUI"],
    },
    {
      title: "Backend",
      items: ["NodeJS", "Express", "PostrgreSQL", "Prisma"],
    },
    {
      title: "Tools",
      items: ["Neovim", "Git", "Github", "Linux", "Bash"],
    },
  ];
  return (
    <section
      className="py-28"
      id="skills">
      <h2 className="text-3xl font-bold text-center">Technical Skills</h2>
      <div className="grid grid-cols-3 grid-rows-1 justify-items-center content-center">
        {skills.map((skill, index) => (
          <SkillsCard
            key={index}
            title={skill.title}
            skills={skill.items}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;
