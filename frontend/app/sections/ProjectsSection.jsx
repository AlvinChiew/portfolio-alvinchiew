"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectTag from "../components/ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsTag = [];

const projectsData = [];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag),
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="pt-24 lg:pt-28">
      <h2 className="pb-6 text-center text-4xl font-bold text-white md:pb-12">
        My Projects
      </h2>
      {projectsTag.length > 0 ? (
        <div className="flex flex-row items-center justify-center gap-2 pb-6 text-white">
          {projectsTag.map((t, index) => (
            <ProjectTag
              onClick={handleTagChange}
              name={t}
              isSelected={tag === t}
              key={index}
            />
          ))}
        </div>
      ) : null}
      {filteredProjects.length > 0 ? (
        <ul ref={ref} className="grid gap-8 md:grid-cols-3 md:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      ) : (
        <p className=" text-secondaryText h-40 text-center text-base sm:text-sm lg:text-xl">
          👨🏻‍🍳🔥 Something fun is cooking 🍔🍣
        </p>
      )}
    </section>
  );
};

export default ProjectsSection;
