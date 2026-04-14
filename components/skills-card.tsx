interface SkillsCardProps {
  category: string;
  skills: string[];
}

export default function SkillsCard({ category, skills }: SkillsCardProps) {
  return (
    <article className="flex flex-col gap-6 items-start p-4 rounded-lg border-2 border-border bg-card">
      <h3 className="text-xl text-primary">{category}</h3>
      <ul className="pl-4 space-y-2 list-disc">
        {skills.map((skill: string, index) => (
          <li key={index} className="text-foreground">
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}
