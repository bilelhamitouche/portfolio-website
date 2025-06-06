"use client";
import { motion } from "motion/react";

export default function About() {
  return (
    <motion.section
      className="container py-12 px-4 mx-auto space-y-12 max-w-2xl text-center sm:py-16 lg:py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { type: "tween", duration: 0.4 },
      }}
    >
      <h2 className="text-3xl font-bold">About Me</h2>
      <p className="text-lg text-gray-500 dark:text-gray-400">
        I&apos;m a passionate fullstack developer specializing in JavaScript
        technologies, in particular TypeScript, React and Next.js. I love
        writing robust maintainable code focusing on user experience. I love
        exploring new and innovative technologies to expand my knowledge base
        and grow as a developer.
      </p>
    </motion.section>
  );
}
