"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectTag from "../components/ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsTag = ["All", "AI", "Web", "Mobile", "Desktop"];

const projectsData = [
  {
    title: "Appointment AI - Sales Business Solution",
    image: "/images/projects/appointment-ai.png",
    gitUrl: "https://github.com/AlvinChiew/appointment-ai",
    previewUrl: "https://appointment-ai.alvinchiew.com/",
    tag: ["All", "AI", "Web"],
  },
  {
    title: "Quick Hatch - Membership Platform",
    image:
      // "https://github.com/AlvinChiew/quick-hatch-membership-platform/blob/main/assets/membership.png?raw=true",
      "/images/projects/quick-hatch-membership-platform.png",
    gitUrl: "https://github.com/AlvinChiew/quick-hatch-platform",
    tag: ["All", "Web"],
  },
  {
    title: "Logic Chess Track Game",
    image:
      // "https://github.com/AlvinChiew/logic-chess-track-game/blob/main/assets/home_screen_both.png?raw=true",
      "/images/projects/logic-chess-track-game.png",
    gitUrl:
      "https://github.com/AlvinChiew/logic-chess-track-game/tree/main?tab=readme-ov-file#logic-chess-track-game--%E8%BD%A8%E9%81%93%E9%80%BB%E8%BE%91%E6%A3%8B",
    previewUrl: "https://youtu.be/mnRPmoSrgTw?si=UQktpsLBkHHjzOjf",
    downloadUrl:
      "https://github.com/AlvinChiew/logic-chess-track-game/releases/download/v0.1.0/LogicChessTrackGame-v0.1.0-android-arm64-installer.apk",
    tag: ["All", "AI", "Mobile"],
  },
  {
    title: "Sales & Customer - Admin Portal",
    image:
      // "https://github.com/AlvinChiew/quadsparkle-admin-app/blob/main/assets/transactions.png?raw=true",
      "/images/projects/sales-customer-admin-portal.png",
    gitUrl:
      "https://github.com/AlvinChiew/quadsparkle-admin-app/tree/main?tab=readme-ov-file#quad-sparkle-admin-web-app",
    tag: ["All", "Web"],
  },
  {
    title: "Alvin Chiew Portfolio",
    image: "/images/projects/portfolio-alvinchiew.png",
    gitUrl:
      "https://github.com/AlvinChiew/portfolio-alvinchiew?tab=readme-ov-file#alvinchiew--portfolio",
    previewUrl: "https://www.alvinchiew.com/",
    tag: ["All", "Web"],
  },
  {
    title: "Google Map WhatsApp Blaster",
    image:
      // "https://github.com/AlvinChiew/google-map-whatsapp-blaster/blob/main/assets/sample_interface.png?raw=true",
      "/images/projects/google-map-whatsapp-blaster.png",
    gitUrl:
      "https://github.com/AlvinChiew/google-map-whatsapp-blaster/tree/main?tab=readme-ov-file#google-map--whatsapp-blaster",
    tag: ["All", "Desktop"],
  },
  {
    title: "HEIC-to-JPG Image Converter",
    image:
      // "https://github.com/AlvinChiew/heic-jpg-converter/blob/main/assets/sample.png?raw=true",
      "/images/projects/heic-jpg-image-converter.png",
    gitUrl:
      "https://github.com/AlvinChiew/heic-jpg-converter/tree/main?tab=readme-ov-file#heic-to-jpg-converter",
    downloadUrl:
      "https://github.com/AlvinChiew/heic-jpg-converter/releases/download/v0.1.0/HeicToJpg-v0.1.0-win-x64-portable.exe",
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
        <div className="flex flex-row flex-wrap items-center justify-center gap-2 px-4 pb-6 text-white md:px-0">
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
                previewUrl={project.previewUrl}
                downloadUrl={project.downloadUrl}
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
