"use client";

import Image from "next/image";
import { Link2, Github } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#202030] shadow-sm hover:shadow-xl transition-all duration-500">
      
      {/* Image Section */}
      <div className="relative h-60 w-full overflow-hidden rounded-t-3xl">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes=""
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />

        {/* Category Badge */}
        <span className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 text-xs font-semibold rounded-full shadow-md">
          {project.category.toUpperCase()}
        </span>

        {/* Hover Action Buttons */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <a
            href={project.link}
            target="_blank"
            className="p-3 bg-black/70 dark:bg-white/20 text-white dark:text-white rounded-full backdrop-blur-md hover:scale-110 transition-all"
          >
            <Link2 size={18} />
          </a>
          <a
            href={project.github}
            target="_blank"
            className="p-3 bg-black/70 dark:bg-white/20 text-white dark:text-white rounded-full backdrop-blur-md hover:scale-110 transition-all"
          >
            <Github size={18} />
          </a>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1 group-hover:text-orange-500 transition-colors">
          {project.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
