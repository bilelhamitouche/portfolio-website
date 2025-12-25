"use client";
import { motion } from "motion/react";

export default function About() {
  return (
    <motion.section
      className="container py-12 px-8 mx-auto space-y-12 max-w-3xl text-center sm:py-16 lg:py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { type: "tween", duration: 0.4 },
      }}
    >
      <h2 className="text-3xl font-bold">About Me</h2>
      <div className="space-y-4">
        <p className="text-lg text-gray-500 dark:text-gray-400">
          I’m a full-stack developer based in Algeria, specializing in
          JavaScript and TypeScript. I build modern, responsive web applications
          using React, Next.js, and Node.js, with a strong focus on performance,
          maintainability, and user experience.
        </p>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          I enjoy working on full-stack projects end-to-end. From designing
          clean user interfaces to building reliable backends and APIs. I’m
          always learning new technologies and best practices to improve my
          craft and write better, more scalable software.
        </p>
      </div>
    </motion.section>
  );
}
