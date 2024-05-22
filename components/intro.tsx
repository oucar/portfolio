"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import OnurPortrait from "../public/onur.png";
import { FaBlog, FaGithub, FaItalic, FaLinkedinIn, FaPen, FaPenAlt, FaPencilAlt, FaPenFancy, FaPenNib, FaPenSquare, FaSatelliteDish, FaStackOverflow } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FlipWords } from "./flip-words";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

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
    {
      icon: <SiLeetcode />,
      url: "https://leetcode.com/oucar/",
    },
    {
      icon: <FaItalic />,
      url: "https://blog.ucaronur.com/",
    }
  ];

  const handleIconClick = (url: any) => {
    window.open(url, "_blank");
  };

  const words = [
    "Software Engineer.",
    "Problem Solver.",
    "Future Leader.",
    "Team Player.",
    "Lifelong Learner.",
    "Creative Thinker.",
    "Cat and Nature Lover.",
  ];

  return (
    <section
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] z-40"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
            ref={ref}
          >
            <Image
              src={OnurPortrait}
              alt="Onur Ucar portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          ></motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-4 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Onur.</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "tween",
          duration: 0.2,
        }}
      >
        <div className="flex justify-center items-center px-4 mb-10">
          <div className="mx-auto text-2xl font-medium !leading-[1.5] sm:text-4xl">
            A
            <FlipWords words={words} /> <br />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "tween",
          duration: 0.2,
        }}
      >
        <motion.ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 sm:mt-8">
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
        </motion.ul>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      ></motion.div>
    </section>
  );
}
