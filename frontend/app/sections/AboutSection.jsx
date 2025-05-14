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
        category: "Database",
        item: [
          "Postgres",
          "Microsoft SQL Server",
          "MongoDB",
          "MySQL",
          "Prisma",
        ],
      },
      {
        category: "Pipeline",
        item: ["Matillion", "dbt", "Prefect", "Apache Kafka"],
      },
      {
        category: "Artificial intelligence",
        item: [
          "n8n (RAG, Agents, Workflow)",
          "ollama (LLM)",
          "LangChain",
          "MCP Server",
          "Stable Baselines (RL)",
          "OpenAI Gym",
          "YOLOv5",
          "Media Pipe",
          "MoveNet",
          "Hugging Face (NLP)",
          "PyTesseract (OCR)",
          "Sklearn",
          "Sktime",
          "Tensorflow",
          "PyTorch",
          "Optuna",
          "Onnx",
        ],
      },
      {
        category: "Business Intelligence",
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
          "Supabase",
          "Node.js",
          "Express",
          "FastAPI",
          "GraphQL",
          "Strapi CMS",
          "ERPNext App",
        ],
      },
      {
        category: "Front End",
        item: [
          "Flutter",
          "Streamlit",
          "React",
          "Next.js",
          "Tailwind CSS",
          "Custom Tkinter",
          "Windows Forms App",
        ],
      },
      {
        category: "Distribution",
        item: ["PyInstaller", "InstallForge"],
      },
      {
        category: "Design",
        item: ["Figma", "Adobe XD"],
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
          "Dart",
          "VBA",
          "C#",
          "Go",
          "Bash",
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
        item: ["AWS", "Terraform", "Azure", "GCP"],
      },
      { category: "Automation", item: ["Selenium", "PyTest"] },
      {
        category: "CI / CD",
        item: ["Git", "Docker", "Kubernetes", "GitHub Action", "Scrum Agile"],
      },
      {
        category: "Network / On-Premises",
        item: [
          "Cloudflare",
          "OpenVPN",
          "Proxmox",
          "Synology DSM",
          "SMB",
          "SSH",
        ],
      },
      {
        category: "Operating System",
        item: ["Windows", "WSL", "Ubuntu (Desktop, Server)"],
      },
    ],
  },
  {
    title: "Myself",
    id: "me",
    content: [
      {
        category: "Current Roles",
        item: [
          "Principal PoC Specialist",
          "Senior Technical Consultant",
          "Senior Data Architect",
          "Full-Stack Application Developer",
        ],
      },
      {
        category: "Past Roles",
        item: [
          "Data Lake Specialist",
          "Applied Data Scientist",
          "Business Intelligence Engineer",
          "Software Engineer",
          "Process Simulation Engineer",
        ],
      },
      {
        category: "Interest",
        item: [
          "Bodybuilding",
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
          <p className="text-justify text-base lg:text-lg">
            I am a full-time Senior AI & Data Solution Architect with a passion
            for full-stack development in website, desktop and mobile
            application. After achieving a Master&apos;s in Chemical
            Engineering, I started my career in data and IT realm from the
            ground up. My journey has always been passion-driven and
            self-taught, leveraging numerous free online resources and extensive
            experience in the field for more than a decade. My approach
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
