"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { Badge } from "./ui/badge";

export default function Hero() {
  return (
    <motion.section
      className="container py-12 px-8 mx-auto space-y-4 text-center md:py-16 lg:py-20"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          type: "tween",
          duration: 0.4,
        },
      }}
    >
      <Badge
        variant="secondary"
        className="py-1 px-3 text-sm font-semibold rounded-full"
      >
        Fullstack Developer
      </Badge>
      <h1 className="flex flex-col gap-2 text-4xl font-bold md:text-5xl lg:gap-4">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "tween",
              duration: 0.4,
            },
          }}
        >
          Crafting Digital
        </motion.span>
        <motion.span
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
          Experiences With
        </motion.span>
        <motion.span
          className="text-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.4,
              type: "tween",
              duration: 0.4,
            },
          }}
        >
          Modern Technologies
        </motion.span>
      </h1>
      <motion.p className="p-2 mx-auto mt-4 max-w-lg text-lg text-gray-500 md:max-w-xl md:text-xl">
        I build responsive and performant web applications with modern
        frameworks and best practices.
      </motion.p>
      <motion.div
        className="flex flex-col gap-4 justify-center items-center p-4 sm:flex-row"
        initial={{ opacity: 0, y: -20 }}
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
        <Button size="lg" className="w-full font-semibold sm:w-fit" asChild>
          <Link href="#projects">View My Work</Link>
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="w-full font-semibold sm:w-fit"
          asChild
        >
          <Link href="#contact">Contact Me</Link>
        </Button>
      </motion.div>
    </motion.section>
  );
}
