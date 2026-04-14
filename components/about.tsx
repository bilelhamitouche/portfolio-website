export default function About() {
  return (
    <section
      id="about"
      className="container flex flex-col gap-8 py-16 px-8 mx-auto max-w-6xl md:py-20 lg:py-28"
    >
      <h2 className="text-xl font-medium uppercase text-primary">About me</h2>
      <div className="space-y-4">
        <p className="max-w-xl leading-6 text-foreground/70">
          From building responsive frontends with React and TypeScript to
          designing robust APIs and databases, I enjoy owning the entire stack.
          When I'm not coding, you'll find me exploring new technologies and
          trying out new things.
        </p>
        <p className="max-w-xl leading-6 text-foreground/70">
          I care about writing maintainable code and designing systems that grow
          well over time. I enjoy turning ideas into real products and
          continuously improving through hands-on projects and problem solving.
        </p>
      </div>
    </section>
  );
}
