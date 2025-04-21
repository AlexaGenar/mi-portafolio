import { JSX, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  demoUrl,
  repoUrl,
}: {
  title: string;
  description: JSX.Element;
  image: string;
  technologies: string[];
  demoUrl: string;
  repoUrl: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="overflow-hidden border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800">
      <div className="relative h-40 sm:h-48 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <CardHeader>
        <CardTitle className="text-xl font-bold dark:text-white">{title}</CardTitle>
        <div
          className={`text-sm text-gray-600 dark:text-gray-300 ${
            isExpanded ? "" : "line-clamp-4"
          } flex-1`}
        >
          {description}
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-pink-600 dark:text-pink-400 text-xs font-medium whitespace-nowrap hover:underline"
        >
          {isExpanded ? "Ver menos" : "Ver más"}
        </button>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900 dark:to-purple-900 text-pink-800 dark:text-pink-200 border border-pink-100 dark:border-pink-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex flex-wrap gap-2 justify-center sm:justify-start">
        <Button
          asChild
          size="sm"
          variant="outline"
          className="bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 border-gray-200 dark:border-gray-600 dark:text-white"
        >
          <a href={demoUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 mr-2" />
            Demo
          </a>
        </Button>
        <Button
          asChild
          size="sm"
          variant="outline"
          className="bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 border-gray-200 dark:border-gray-600 dark:text-white"
        >
          <a href={repoUrl} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4 mr-2" />
            Código
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
