"use client";

import React, { useEffect, useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import { fetchProjects } from "@/lib/getProjects";

const presetCategories = [
  "all projects",
  "react js",
  "html css",
  "next js",
  // "vue js",
  // "angular",
];

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState(presetCategories);
  const [selectedCategory, setSelectedCategory] = useState("all projects");

  useEffect(() => {
  async function loadProjects() {
  setLoading(true); // start loader

  const firebaseProjects = await fetchProjects();
  setProjects(firebaseProjects);

  const fetchedCategories = [
    ...new Set(firebaseProjects.map((p) => p.category?.toLowerCase())),
  ];

  const usableCategories = [
    "all projects",
    ...presetCategories.filter((cat) =>
      fetchedCategories.includes(cat.toLowerCase())
    ),
  ];

  setCategories(usableCategories);

  setLoading(false); // done loading
}

  loadProjects();
}, []);

  // Filter projects
  const filteredProjects =
    selectedCategory === "all projects"
      ? projects
      : projects.filter(
          (p) => p.category?.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>

        {/* TABS */}
        <Tabs defaultValue={selectedCategory} className="mb-24 xl:mb-48">
          
  <TabsList
    className="
   w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none
    "
  >
    {categories.map((cat, index) => (
      <TabsTrigger
        key={index}
        value={cat}
        onClick={() => setSelectedCategory(cat)}
        className="
          capitalize
          rounded-full
          px-6 py-2
          text-sm md:text-base
          font-medium
          transition-all
          data-[state=active]:bg-primary
          data-[state=active]:text-white
          data-[state=active]:shadow-sm
          data-[state=active]:px-8
          text-foreground
        "
      >
        {cat}
      </TabsTrigger>
    ))}
  </TabsList>

{/* LOADER */}
{loading && (
  <div className="w-full flex justify-center py-20">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
)}

{/* PROJECTS GRID */}
{!loading && (
  <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">

    {filteredProjects.map((project) => (
      <TabsContent key={project.id} value={selectedCategory} className="mb-4">
        <ProjectCard project={project} />
      </TabsContent>
    ))}

    {filteredProjects.length === 0 && (
      <div className="col-span-full text-center text-gray-500 dark:text-gray-400 py-10">
        No projects available in this category yet.
      </div>
    )}

  </div>
)}
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
