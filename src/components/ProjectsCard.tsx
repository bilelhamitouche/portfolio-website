interface Props {
  title: string;
  description: string;
  link: string;
  stack: string[];
}

function ProjectsCard({ title, description, link, stack }: Props) {
  return (
    <div className="shadow-xl card bg-base-100 lg:card-side">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
          alt="Album"
          className="object-fill w-60 h-60"
        />
      </figure>
      <div className="text-left card-body">
        <h2 className="card-title text-primary">{title}</h2>
        <p className="max-w-screen-sm">{description}</p>
        <div className="flex flex-wrap gap-4 items-center">
          {stack.map((item, index) => (
            <span
              className="p-3 badge badge-neutral"
              key={index}>
              {item}
            </span>
          ))}
        </div>
        <div className="justify-end card-actions">
          <a
            href={link}
            target="_blank"
            className="link link-primary">
            Live demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard;
