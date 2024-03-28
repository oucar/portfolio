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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description: "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: "work",
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description: "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: "school",
    date: "2019 - 2021",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description: "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: [
      {
        id: 1,
        name: "React",
        image: ""
      },
      {
        id: 2,
        name: "dotnet",
        image: ""
      },
    ],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description: "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: [
      {
        id: 1,
        name: "React",
        image: "na"
      },
      {
        id: 2,
        name: "dotnet",
        image: "na"
      },
    ],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description: "A public web app for quick analytics on text. It shows word count, character count and social media post limits. A public web app for quick analytics on text. It shows word count, character count and social media post limits. A public web app for quick analytics on text. It shows word count, character count and social media post limits. A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: [
      {
        id: 1,
        name: "React",
        image: "na"
      },
      {
        id: 2,
        name: "dotnet",
        image: "na"
      },
    ],
    imageUrl: wordanalyticsImg,
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
