import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="container py-12 px-4 mx-auto space-y-12 sm:py-16 md:py-20"
    >
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold">Work</h2>
        <p className="text-lg text-gray-500">
          Check out the list of projects I&apos;ve worked on
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          title="ChatSync"
          description="Realtime Chat Application full user authentication, messaging, and creating multiple chats."
          demoLink="https://chatsync-dusky.vercel.app"
          githubLink="https://github.com/bilelhamitouche/chatsync"
          imageUrl="/ChatSync.png"
          stack={[
            "Next.js",
            "Typescript",
            "PostgreSQL",
            "Drizzle",
            "WebSockets",
            "Vercel",
          ]}
        />
      </div>
    </section>
  );
}
