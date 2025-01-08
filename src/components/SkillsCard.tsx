interface Props {
  title: string;
  skills: string[];
}

function SkillsCard({ title, skills }: Props) {
  return (
    <div className="mt-16 w-80 shadow-lg card bg-base-100">
      <div className="flex flex-col items-center text-center card-body">
        <h2 className="mb-2 text-2xl font-bold text-center text-primary card-title">
          {title}
        </h2>
        <ul className="flex flex-col gap-2 font-bold">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SkillsCard;
