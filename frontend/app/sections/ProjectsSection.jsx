"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectTag from "../components/ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsTag = [];

const projectsData = [
  {
    title: "Logic Chess Track Game",
    image:
      "https://github.com/AlvinChiew/logic-chess-track-game/blob/main/assets/home_screen_both.png?raw=true",
    gitUrl:
      "https://github.com/AlvinChiew/logic-chess-track-game/tree/main?tab=readme-ov-file#logic-chess-track-game--%E8%BD%A8%E9%81%93%E9%80%BB%E8%BE%91%E6%A3%8B",
    previewUrl: "",
    tag: ["All", "Mobile"],
  },
  {
    title: "Quad Sparkle Admin Web Portal",
    image:
      "https://github.com/AlvinChiew/quadsparkle-admin-app/blob/main/assets/transactions.png?raw=true",
    gitUrl:
      "https://github.com/AlvinChiew/quadsparkle-admin-app/tree/main?tab=readme-ov-file#quad-sparkle-admin-web-app",
    previewUrl: "",
    tag: ["All", "Web"],
  },
  {
    title: "Alvin Chiew Portfolio",
    image: "/images/projects/home.png",
    gitUrl:
      "https://github.com/AlvinChiew/portfolio-alvinchiew?tab=readme-ov-file#alvinchiew--portfolio",
    previewUrl: "",
    tag: ["All", "Web"],
  },
  {
    title: "Google Map WhatsApp Blaster",
    image:
      "https://github.com/AlvinChiew/google-map-whatsapp-blaster/blob/main/assets/sample_interface.png?raw=true",
    gitUrl:
      "https://github.com/AlvinChiew/google-map-whatsapp-blaster/tree/main?tab=readme-ov-file#google-map--whatsapp-blaster",
    previewUrl: "",
    tag: ["All", "Desktop"],
  },
  {
    title: "HEIC to JPG Converter",
    image:
      "https://github.com/AlvinChiew/heic-jpg-converter/blob/main/assets/sample.png?raw=true",
    gitUrl:
      "https://github.com/AlvinChiew/heic-jpg-converter/tree/main?tab=readme-ov-file#heic-to-jpg-converter",
    previewUrl: "",
    tag: ["All", "Desktop"],
  },
];

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
                key={index}
                title={project.title}
                description="" //{project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl="" //{project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      ) : (
        <p className=" h-40 text-center text-base text-secondaryText sm:text-sm lg:text-xl">
          👨🏻‍🍳🔥 Something fun is cooking 🍔🍣
        </p>
      )}
    </section>
  );
};

export default ProjectsSection;
