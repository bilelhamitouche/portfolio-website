export default interface Project {
  imageUrl: string;
  title: string;
  description: string;
  demoLink: string;
  githubLink: string;
  type: "Frontend" | "Backend" | "Fullstack";
  tags: string[];
}
