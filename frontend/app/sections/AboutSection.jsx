"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "../components/TabButton";

const TAB_DATA = [
  {
    title: "Data",
    id: "data",
    content: [
      {
        category: "Warehouse",
        item: ["Snowflake", "Metabase", "Data Vault 2.0"],
      },
      {
        category: "Pipeline",
        item: ["Matillion", "dbt", "Prefect", "Apache Kafka"],
      },
      {
        category: "AI / ML / DL",
        item: [
          "YOLOv5",
          "Media Pipe",
          "MoveNet",
          "Hugging Face",
          "PyTesseract",
          "Sklearn",
          "Sktime",
          "Tensorflow",
          "PyTorch",
        ],
      },
      {
        category: "BI",
        item: [
          "PowerBI",
          "Streamlit",
          "Seaborn",
          "Plotly",
          "Pandas",
          "Dask",
          "OpenCV",
        ],
      },
    ],
  },
  {
    title: "Software",
    id: "software",
    content: [
      {
        category: "Back End",
        item: [
          "MongoDB",
          "Node",
          "Microsoft SQL Server",
          "Postgres",
          "MySQL",
          "Prisma",
        ],
      },
      {
        category: "Middle End",
        item: ["Express", "FastAPI", "GraphQL", "Strapi"],
      },
      { category: "Front End - Web", item: ["React", "NextJS", "Tailwindcss"] },
      {
        category: "Front End - Desktop",
        item: ["Custom Tkinter", "Windows Forms App"],
      },
      {
        category: "Language",
        item: [
          "SQL",
          "DAX",
          "Power Query",
          "Python",
          "JavaScript",
          "Typescript",
          "VBA",
          "C#",
          "Go",
          "bash",
          "HTML",
          "CSS",
        ],
      },
    ],
  },
  {
    title: "Infrastructure",
    id: "infra",
    content: [
      {
        category: "Cloud",
        item: ["AWS", "Azure", "Terraform"],
      },
      { category: "Automation", item: ["Selenium", "PyTest"] },
      {
        category: "CI / CD",
        item: ["Git", "Docker", "Kubernetes", "GitHub Action", "Scrum Agile"],
      },
      {
        category: "Services",
        item: ["Cloudflare", "OpenVPN", "Proxmox", "Synology DSM"],
      },
      { category: "OS", item: ["Windows", "WSL", "Ubuntu"] },
    ],
  },
  {
    title: "Myself",
    id: "me",
    content: [
      {
        category: "Past Roles",
        item: [
          "Process (Simulation) Engineer",
          "Software Engineer",
          "BI Engineer",
          "Applied Data Scientist",
          "Data Lake Specialist",
        ],
      },
      {
        category: "Interest",
        item: [
          "Fitness",
          "Photography",
          "Automotive",
          "Real Estate",
          "Food",
          "Travel",
        ],
      },
      { category: "Dream", item: ["Work and travel around the world! ✈️🌍"] },
    ],
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState(TAB_DATA[0].id);
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="pt-24 text-white lg:pt-28" id="about">
      <div className="items-center gap-8 px-4  md:grid md:grid-cols-2 xl:gap-16 xl:px-16">
        <Image
          src="/images/about.jpeg"
          alt="about-me-image"
          width={500}
          height={500}
        />
        <div className="mt-4 flex h-full flex-col text-left md:mt-0">
          <h2 className="mb-4 text-4xl font-bold text-white">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full-time Senior Data Solution Architect with a passion for
            full-stack development in web and desktop application. After
            achieving a Master&apos;s in Chemical Engineering, I started my
            career in data and IT realm from the ground up. My journey has
            always been passion-driven and self-taught, leveraging numerous free
            online resources and extensive experience in the field. My approach
            emphasizes practical, business aligned solutions, employing advanced
            frameworks and data-driven technologies while prioritizing
            simplicity and robustness. I am excited to partner with you to turn
            exceptional ideas into reality!
          </p>
          <div className="mt-8 flex flex-row flex-wrap justify-start gap-y-2 lg:gap-x-2">
            {TAB_DATA.map(({ title, id }, index) => (
              <TabButton
                key={index}
                selectTab={() => handleTabChange(id)}
                active={tab === id}
              >
                {" "}
                {title}{" "}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content.map(
              ({ category, item }, index) => (
                <ul className="list-none pl-2" key={index}>
                  {category}
                  <ul className="mb-6 mt-4 flex flex-wrap">
                    {item.map((i, index) => (
                      <li
                        className=" mb-2 mr-2 rounded-md bg-slate-800 px-4 py-1.5"
                        key={index}
                      >
                        {i}
                      </li>
                    ))}
                  </ul>
                </ul>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
