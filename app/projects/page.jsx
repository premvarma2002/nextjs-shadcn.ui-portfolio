"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/3.png",
    category: "react js",
    name: "Amazon clone",
    description:
      "Amazon Clone made with react , tailwind, javascript and redux",
    link: "https://amazon-clone-ten-lemon.vercel.app/",
    github: "https://github.com/premvarma2002/amazon-clone",
  },
  {
    image: "/work/1.png",
    category: "react js",
    name: "Homeland ",
    description:
      "A real estate rental website made with react, tailwind & javascript.",
    link: "https://beautiful-homeland.netlify.app/",
    github: "https://github.com/premvarma2002/Real-Estate",
  },
  {
    image: "/work/2.png",
    category: "Html CSS",
    name: "Lumina Website",
    description:
      "Lorem ipsum, dolor sit amet consectetur a necessitatibus eveniet est tenetur quisquam dolore",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "Html CSS",
    name: "Evolve Website",
    description:
      "Lorem ipsum, dolor sit amet consectetur a necessitatibus eveniet est tenetur quisquam dolore",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "react js",
    name: "Ignite Website",
    description:
      "Lorem ipsum, dolor sit amet consectetur a necessitatibus eveniet est tenetur quisquam dolore",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "next js",
    name: "Envision Website",
    description:
      "Lorem ipsum, dolor sit amet consectetur a necessitatibus eveniet est tenetur quisquam dolore",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "next js",
    name: "Envision Website",
    description:
      "Lorem ipsum, dolor sit amet consectetur a necessitatibus eveniet est tenetur quisquam dolore",
    link: "/",
    github: "/",
  },
];

//  remove category duplicates
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    // if category is all projects then return all projects , else filter by category.
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs  */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content  */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
