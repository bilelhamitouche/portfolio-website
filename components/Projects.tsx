"use client";
import { motion } from "motion/react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="container py-12 px-4 mx-auto space-y-12 max-w-7xl sm:py-16 md:py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          type: "tween",
          duration: 0.4,
        },
      }}
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
          description="Realtime Chat Application with full user authentication, messaging, and creating multiple chats."
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
        <ProjectCard
          title="Jobsphere"
          description="This job portal app is a fully functional employment platform designed to streamline the job search and hiring process."
          demoLink="https://jobsphere-eight.vercel.app"
          githubLink="https://github.com/bilelhamitouche/jobsphere"
          imageUrl="/JobSphere.png"
          stack={[
            "Next.js",
            "Typescript",
            "PostgreSQL",
            "Role based auth",
            "Drizzle",
            "Vercel",
          ]}
        />
      </div>
    </motion.section>
  );
}
