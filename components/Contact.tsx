"use client";
import { sendEmailAction } from "@/actions/email";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="container p-4 py-12 mx-auto space-y-8 sm:py-16 lg:py-20"
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
        <h2 className="text-3xl font-bold">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-lg text-gray-500">
          Feel free to send me a message or hit me up on my socials
        </p>
        <div className="flex gap-4 justify-center items-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" asChild>
                  <Link
                    href="https://github.com/bilelhamitouche"
                    target="_blank"
                  >
                    <Github />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>GitHub</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://x.com/@HamitoucheBilel" target="_blank">
                    <Twitter />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Twitter</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" asChild>
                  <Link
                    href="https://linkedin.com/bilelhamitouche"
                    target="_blank"
                  >
                    <Linkedin />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>LinkedIn</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <form action={sendEmailAction} className="mx-auto space-y-4 max-w-xl">
        <motion.div
          className="space-y-2"
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
          <Label className="text-md">Name</Label>
          <Input name="name" className="font-sans" />
        </motion.div>
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.3,
              type: "tween",
              duration: 0.4,
            },
          }}
        >
          <Label className="text-md">Email</Label>
          <Input type="email" name="email" className="font-sans" />
        </motion.div>
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: -20 }}
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
          <Label className="text-md">Message</Label>
          <Textarea name="message" className="font-sans"></Textarea>
        </motion.div>
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.5,
              type: "tween",
              duration: 0.4,
            },
          }}
        >
          <Button className="w-full text-md" size="lg">
            Send Message
          </Button>
        </motion.div>
      </form>
    </motion.section>
  );
}
