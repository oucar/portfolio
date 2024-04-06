"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button, Modal } from "flowbite-react";
import { useSectionInView } from "@/lib/hooks";
import { BentoGrid, BentoGridItem } from "./bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import SectionHeading from "./section-heading";
import GodotImage from "@/public/godot_doomlike.png";
import GodotGif from "@/public/godot_doom.gif";
import LentilJSX from "@/public/lentil-jsx.png";
import LentilJSXGif from "@/public/lentil-jsx.gif";
import Sorting from "@/public/sorting.png";
import SortingGif from "@/public/sorting.gif";
import ReactColorApp from "@/public/color-app.png";
import ReactColorAppGif from "@/public/color-app.gif";
import Reactivities from "@/public/reactivities.png";
import ReactivitiesGif from "@/public/reactivities.gif";
import WatchNotes from "@/public/watch-notes.png";
import WatchNotesGif from "@/public/watch-notes.gif";

interface Item {
  title: string;
  description: string;
  detailedDescription: string;
  header: React.ReactNode;
  className: string;
  icon: React.ReactNode;
  imageComponent: React.ReactNode;
  gifComponent: React.ReactNode;
}

export default function Projects() {
  const { ref } = useSectionInView("Projects");
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const openModalWithItem = (item: Item) => {
    setSelectedItem(item);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <section id="projects" className="scroll-mt-28">
      <motion.section>
        <SectionHeading>Projects</SectionHeading>
      </motion.section>
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] mb-40">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon}
            onClick={() => openModalWithItem(item)}
            ref={i === 0 ? ref : null}
          />
        ))}
      </BentoGrid>
      <Modal
        dismissible
        show={openModal}
        onClose={closeModal}
        className="bg-slate-700"
      >
        <Modal.Header className="dark:bg-[#111827]">
          {selectedItem && selectedItem.title}
        </Modal.Header>
        <Modal.Body className="dark:bg-[#111827]">
          {selectedItem && selectedItem.detailedDescription}
        </Modal.Body>
        <Modal.Footer className="flex justify-center dark:bg-[#111827]">
          <Button outline gradientDuoTone="purpleToBlue" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}
const Skeleton = ({
  imageSrc,
  gifSrc,
}: {
  imageSrc: string;
  gifSrc: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={imageSrc}
        alt="Project Image"
        className="object-cover w-full h-full rounded-xl transition-opacity duration-300 ease-in-out"
        style={{ opacity: isHovered ? 0 : 1 }}
      />
      <img
        src={isHovered ? gifSrc : ""}
        className="absolute inset-0 object-cover w-full h-full rounded-xl transition-opacity duration-0 ease-in-out"
        style={{ opacity: isHovered ? 1 : 0 }}
      />
    </div>
  );
};

const items: Item[] = [
  // 1555 * 451
  // Lentil JSX 
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    detailedDescription:
      "This is a detailed description for The Dawn of Innovation",
    header: <Skeleton imageSrc={LentilJSX.src} gifSrc={LentilJSXGif.src} />,
    className: "md:col-span-3",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    imageComponent: <img src={LentilJSX.src} alt="Lentil JSX Image" />,
    gifComponent: <img src={LentilJSXGif.src} alt="Lentil JSX Gif" />,
  },
  // Godot Doom like shooter
  {
    title: "The Digital Revolution",
    description:
      "Lentil JSX is a super tool - has a few bugs at the moment but will be fixed later lol. lorem ipsum dolor sit amet consectetur adipiscing elit. and this is a long sentence to test the overflow of the text.",
    detailedDescription:
      "This is a detailed description for The Digital Revolution",
    header: <Skeleton imageSrc={GodotImage.src} gifSrc={GodotGif.src} />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    imageComponent: <img src={GodotImage.src} alt="Godot Image" />,
    gifComponent: <img src={GodotGif.src} alt="Godot Gif" />,
  },
  // Microservices
  {
    title: "MICROSERVICES",
    description: "Discover the beauty of thoughtful and functional design.",
    detailedDescription: "This is a detailed description for The Art of Design",
    header: <Skeleton imageSrc={GodotImage.src} gifSrc={GodotGif.src} />,
    className: "md:col-span-2",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    imageComponent: <img src={GodotImage.src} alt="Godot Image" />,
    gifComponent: <img src={GodotGif.src} alt="Godot Gif" />,
  },
  // Sorting Visualizer
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    detailedDescription:
      "This is a detailed description for The Power of Communication",
    header: <Skeleton imageSrc={Sorting.src} gifSrc={SortingGif.src} />,
    className: "md:col-span-3",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    imageComponent: <img src={Sorting.src} alt="Sorting Visualizer Image" />,
    gifComponent: <img src={SortingGif.src} alt="Sorting Visualizer Gif" />,
  },
  // Color App
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    detailedDescription:
      "This is a detailed description for The Power of Communication",
    header: <Skeleton imageSrc={ReactColorApp.src} gifSrc={ReactColorAppGif.src} />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    imageComponent: <img src={ReactColorApp.src} alt="React Color App Image" />,
    gifComponent: <img src={ReactColorAppGif.src} alt="React Color App Gif" />,
  },
  // WatchOS Color App
  {
    title: "WatchOS Color App",
    description:
      "Understand the impact of effective communication in our lives.",
    detailedDescription:
      "This is a detailed description for The Power of Communication",
    header: <Skeleton imageSrc={GodotImage.src} gifSrc={GodotGif.src} />,
    className: "md:col-span-1",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    imageComponent: <img src={GodotImage.src} alt="Godot Image" />,
    gifComponent: <img src={GodotGif.src} alt="Godot Gif" />,
  },
  // React activities
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    detailedDescription:
      "This is a detailed description for The Power of Communication",
    header: <Skeleton imageSrc={Reactivities.src} gifSrc={ReactivitiesGif.src} />,
    className: "md:col-span-3",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    imageComponent: <img src={Reactivities.src} alt="React Activities Image" />,
    gifComponent: <img src={ReactColorAppGif.src} alt="React Activities Gif" />,
  },
  // WatchOS Notes
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    detailedDescription:
      "This is a detailed description for The Power of Communication",
    header: <Skeleton imageSrc={WatchNotes.src} gifSrc={WatchNotesGif.src} />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    imageComponent: <img src={WatchNotes.src} alt="Watch Notes Image" />,
    gifComponent: <img src={WatchNotesGif.src} alt="Watch Notes Gif" />,
  },
  // Campground Finder?
  {
    title: "Campground Finder",
    description:
      "Understand the impact of effective communication in our lives.",
    detailedDescription:
      "This is a detailed description for The Power of Communication",
    header: <Skeleton imageSrc={GodotImage.src} gifSrc={GodotGif.src} />,
    className: "md:col-span-1",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    imageComponent: <img src={GodotImage.src} alt="Godot Image" />,
    gifComponent: <img src={GodotGif.src} alt="Godot Gif" />,
  },
  {
    title: "School Chat",
    description:
      "Understand the impact of effective communication in our lives.",
    detailedDescription:
      "This is a detailed description for The Power of Communication",
    header: <Skeleton imageSrc={GodotImage.src} gifSrc={GodotGif.src} />,
    className: "md:col-span-1",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    imageComponent: <img src={GodotImage.src} alt="Godot Image" />,
    gifComponent: <img src={GodotGif.src} alt="Godot Gif" />,
  },  {
    title: "School DB",
    description:
      "Understand the impact of effective communication in our lives.",
    detailedDescription:
      "This is a detailed description for The Power of Communication",
    header: <Skeleton imageSrc={GodotImage.src} gifSrc={GodotGif.src} />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    imageComponent: <img src={GodotImage.src} alt="Godot Image" />,
    gifComponent: <img src={GodotGif.src} alt="Godot Gif" />,
  },
  // School projects... maybe?
];
