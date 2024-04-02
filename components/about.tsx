"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { FaGithub, FaLinkedinIn, FaStackOverflow } from "react-icons/fa";

export default function About() {
  const { ref } = useSectionInView("About");

  const socialIcons = [
    {
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/oucar/",
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/oucar",
    },
    {
      icon: <FaStackOverflow />,
      url: "https://stackoverflow.com/users/12389133/onur",
    },
  ];

  const handleIconClick = (url: any) => {
    window.open(url, "_blank");
  };

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-28 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>

      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 sm:mt-8">
        {socialIcons.map((socialIcon, index) => (
          <motion.li
            key={index}
            className="bg-white borderBlack rounded-3xl px-3 py-3 dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/20 transition-colors duration-200"
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            onClick={() => handleIconClick(socialIcon.url)}
            style={{ cursor: "pointer" }}
          >
            {socialIcon.icon}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
