import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Developer",
    location: "Bastian Solutions",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: "work",
    date: "1/2023 - Present",
  },
  {
    title: "Co-op Software Engineer",
    location: "Navient",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: "work",
    date: "5/2022 - 12/2022",
  },
  {
    title: "Teaching Assistant",
    location: "Purdue University  ",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: "work",
    date: "10/2021 - 7/2022",
  },
  {
    title: "Undergraduate Research Assosiate",
    location: "Purdue University  ",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: "work",
    date: "8/2020 - 5/2022",
  },
  {
    title: "Purdue University",
    location: "Computer Science BS, Mathematics Minor",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: "school",
    date: "8/2019 - 12/2022",
  },
] as const;


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;