"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="pt-24 lg:pt-40">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center justify-self-start text-center sm:text-left"
        >
          <h1 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-7xl lg:leading-normal">
            <span className="bg-gradient-to-r from-primary-400 to-secondary-600 bg-clip-text text-transparent">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Alvin Chiew",
                1000,
                "Data Solution Architect",
                1000,
                "Application Developer",
                1000,
                "Sashimi Addict 🍣",
                1000,
                "Bodybuilder 💪🏼",
                1000,
                "Photographer 📸",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="mb-6 text-base text-secondaryText sm:text-sm lg:text-xl">
            I strategize and deliver Proof-of-Concepts in Data, AI, Software,
            and IT Infrastructure for individuals, SMEs, and MNCs , across both
            on-premises and cloud environments.
          </p>
          <div>
            <Link
              href="/#contact"
              className="mr-4 inline-block w-full rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 px-6 py-3 text-white hover:bg-slate-200 sm:w-fit"
            >
              Contact Me
            </Link>

            <Link
              href="https://drive.google.com/drive/folders/1oHooG_lsP4o-1ls_m-3_0ffoloy8TCKK?usp=sharing"
              className="mt-3 inline-block w-full rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 px-1 py-1 text-white hover:bg-slate-800 sm:w-fit"
            >
              <span className="block rounded-full bg-backdrop px-5 py-2 hover:bg-slate-800">
                Résumé
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 my-6 place-self-center sm:place-self-start md:place-self-center lg:my-0"
        >
          <div className="relative flex h-[250px] w-[250px] items-center justify-center rounded-full bg-secondaryBackdrop lg:h-[400px] lg:w-[400px]">
            <Image
              src="/images/portrait.png"
              alt="hero image"
              className="absolute inset-0 h-full w-full object-contain"
              layout="fill"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
