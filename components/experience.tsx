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
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
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
  );
}
