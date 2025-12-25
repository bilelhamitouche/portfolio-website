"use client";
import { motion } from "motion/react";
import TechStackCard from "./TechStackCard";

export default function TechStack() {
  return (
    <motion.section
      id="tech-stack"
      className="container py-12 px-8 mx-auto space-y-8 max-w-7xl sm:py-16 lg:py-20"
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
        <h2 className="text-3xl font-bold">Tech Stack</h2>
        <p className="text-lg text-gray-500">
          These are the technologies I use every day
        </p>
      </div>
      <motion.div
        className="grid grid-cols-1 gap-4 md:grid-cols-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.2,
            type: "tween",
            duration: 0.4,
          },
        }}
      >
        <TechStackCard
          title="Frontend"
          stack={["Next.js", "React", "Typescript", "TailwindCSS", "Shadcn/UI"]}
        />
        <TechStackCard
          title="Backend"
          stack={[
            "Node.js",
            "ExpressJS",
            "PostgreSQL",
            "Drizzle ORM",
            "Rest API",
          ]}
        />
        <TechStackCard
          title="DevOps"
          stack={["Vercel", "GitHub", "Git", "Docker"]}
        />
        <TechStackCard title="Tools" stack={["Neovim", "Linux", "Bash"]} />
      </motion.div>
    </motion.section>
  );
}
