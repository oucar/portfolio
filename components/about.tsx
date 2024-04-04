"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { FaGithub, FaLinkedinIn, FaStackOverflow } from "react-icons/fa";

export default function About() {
  const { ref } = useSectionInView("About");

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
        After completing my education at Purdue University with a degree in{" "}
        <span className="font-medium">Computer Science</span> and a minor in{" "}
        <span className="font-medium">Mathematics</span>, I delved into the
        realm of software development. My journey began with a profound interest
        in problem-solving, leading me to master technologies such as{" "}
        <span className="font-medium">React</span>,{" "}
        <span className="font-medium">Next.js</span>,{" "}
        <span className="font-medium">Node.js</span>, and{" "}
        <span className="font-medium">MongoDB</span>, and{" "}
        <span className="font-medium">many more!</span> Proficient in{" "}
        <span className="font-medium">TypeScript</span> and{" "}
        <span className="font-medium">C#</span>, I am committed to continuous
        learning and am eager to explore emerging technologies in the software
        industry.
      </p>

      <p>
        Outside of coding, I embrace a diverse range of interests and
        activities. Originating from Türkiye, I have a deep appreciation for
        nature and enjoy <span className="font-medium">kayaking</span> in serene
        waters. I am also passionate about{" "}
        <span className="font-medium">3D printing</span> and{" "}
        <span className="font-medium">photography</span>, using these mediums to
        express creativity and capture memorable moments. In my pursuit of
        knowledge, I delve into subjects such as{" "}
        <span className="font-medium">history</span> and{" "}
        <span className="font-medium">philosophy</span>, constantly seeking to
        broaden my understanding of the world. Additionally, I find solace in{" "}
        <span className="font-medium">
          playing analog synthesizers and drums!
        </span>
        . Spending quality time with my cat is also one of my favorite
        comforting activities.
      </p>
    </motion.section>
  );
}
