import SkillsCard from "./skills-card";

export default function Skills() {
  return (
    <section
      id="skills"
      className="container flex flex-col gap-8 py-16 px-8 mx-auto max-w-6xl md:py-20 lg:py-28"
    >
      <h2 className="text-xl font-medium uppercase text-primary">Skills</h2>
      <div className="grid gap-6 lg:grid-cols-3">
        <SkillsCard
          category="Frontend"
          skills={[
            "HTML/CSS",
            "Typescript",
            "React",
            "Nextjs",
            "TailwindCSS",
            "Zustand",
          ]}
        />
        <SkillsCard
          category="Backend"
          skills={[
            "Nodejs",
            "Express",
            "PostgreSQL",
            "DrizzleORM",
            "Rest APIs",
            "Websockets",
          ]}
        />
        <SkillsCard
          category="Tools & DevOps"
          skills={["Git", "GitHub", "Docker", "Vercel", "Linux", "Bash"]}
        />
      </div>
    </section>
  );
}
