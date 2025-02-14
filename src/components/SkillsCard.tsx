import Skill from "@/types/skill";

export default function SkillsCard({ title, stack }: Skill) {
  return (
    <div className="border border-base-300 card bg-base-100">
      <div className="card-body">
        <h2 className="mb-2 card-title">{title}</h2>
        <ul className="justify-start card-actions">
          {stack.map((stackItem, index) => (
            <div className="badge badge-outline" key={index}>
              {stackItem}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
