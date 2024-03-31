"use client";

import React from "react";
import SectionHeading from "./section-heading";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { Flowbite, Timeline } from "flowbite-react";
import { HiAcademicCap } from "react-icons/hi";
import { HiBriefcase } from "react-icons/hi";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { motion } from "framer-motion";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./text-reveal-card";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  // Customizing the timeline component in Flowbite
  // https://www.flowbite-react.com/docs/components/timeline
  // https://www.flowbite-react.com/docs/customize/theme
  const customTimelinePointTheme: CustomFlowbiteTheme = {
    timeline: {
      item: {
        point: {
          marker: {
            icon: {
              base: "h-5 w-5",
              wrapper:
                "absolute -left-3 flex h-5 w-5 items-center justify-center rounded-full text-white bg-gray-950 ring-gray-950 ring-8 dark:bg-white dark:ring-white dark:text-gray-950",
            },
          },
        },
      },
    },
  };

  return (
    <motion.section
      id="experience"
      ref={ref}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <section
        id="experience"
        ref={ref}
        className="scroll-mt-28 px-5 sm:px-28 mb-28 sm:mb-40"
      >
        <SectionHeading>My experience</SectionHeading>
        <Flowbite theme={{ theme: customTimelinePointTheme }}>
          <Timeline>
            {experiencesData.map((item, index) => (
              <Timeline.Item key={index}>
                {item.icon === "work" ? (
                  <Timeline.Point icon={HiBriefcase} />
                ) : (
                  <Timeline.Point icon={HiAcademicCap} />
                )}
                <Timeline.Content>
                  <Timeline.Time>February 2022</Timeline.Time>
                  <Timeline.Title>
                    Application UI code in Tailwind CSS
                  </Timeline.Title>
                  <Timeline.Body>
                    Get access to over 20+ pages including a dashboard layout,
                    charts, kanban board, calendar, and pre-order E-commerce &
                    Marketing pages.
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
            ))}
          </Timeline>
        </Flowbite>
      </section>

      <div className="flex items-center justify-center rounded-2xl mb-28  w-full">
        <TextRevealCard
          text="You know the business"
          revealText="I know the chemistry"
        >
          <TextRevealCardTitle>
            It's easy when you find the right person.
          </TextRevealCardTitle>
          <TextRevealCardDescription>
            "Success is no accident. It is hard work, perseverance, learning,
            studying, sacrifice, and most of all, love of what you are doing or
            learning to do."{" "}
          </TextRevealCardDescription>
        </TextRevealCard>
      </div>
    </motion.section>
  );
}
