import { ProjectCardProps } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Link from "next/link";
import { Github, Link2 } from "lucide-react";
import Image from "next/image";

export default function ProjectCard({
  title,
  description,
  demoLink,
  imageUrl,
  githubLink,
  stack,
}: ProjectCardProps) {
  return (
    <Card>
      <CardHeader className="space-y-2">
        <div className="overflow-hidden z-50 rounded-lg border border-gray-100 dark:border-gray-800">
          <Image
            src={imageUrl}
            alt={`${title} image`}
            width="700"
            height="650"
            className="w-full transition-transform duration-500 hover:scale-110"
          />
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2 items-center">
        {stack.map((stackItem, index) => (
          <Badge variant="secondary" key={index} className="text-sm">
            {stackItem}
          </Badge>
        ))}
      </CardContent>
      <CardFooter className="space-x-4">
        <Button variant="outline" asChild>
          <Link href={githubLink} target="_blank">
            <Github />
            <span>Source Code</span>
          </Link>
        </Button>
        <Button asChild>
          <Link href={demoLink} target="_blank">
            <Link2 />
            <span>Live Demo</span>
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
