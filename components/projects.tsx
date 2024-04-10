"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
import LentilJSX from "@/public/lentil-jsx.png";
import Sorting from "@/public/sorting.png";
import ReactColorApp from "@/public/color-app.png";
import Reactivities from "@/public/reactivities.png";
import WatchNotes from "@/public/watch-notes.png";
import WatchColor from "@/public/watch-color-app.png";
import GodotFinal from "@/public/437-final.png";
import Auctions from "@/public/auctions.png";
import ReactPlayer from "react-player";

interface Item {
  title: string;
  description: string;
  header: React.ReactNode;
  className: string;
  icon: React.ReactNode;
  imageComponent: React.ReactNode;
  githubLink: string;
}


// Make sure to click on Share > Embed > Copy the src link
const LentilJSXVideo = {
  src: "https://www.youtube.com/embed/oH4mkUU3CLc?si=6fDQnMbX_3nkPtSc",
};
const GodotVideo = {
  src: "https://www.youtube.com/embed/tMgyek7DvMA?si=729cGA8hs4yvUjop",
};
const AuctionsVideo = {
  src: "https://www.youtube.com/embed/KDHDXTOa9lY?si=RPbSPSgYI8E9OpLf",
};
const SortingVideo = {
  src: "https://www.youtube.com/embed/wyq-ew57DTc?si=xX9NAKdGmDQ3ZQVb",
};
const ReactColorAppVideo = {
  src: "https://www.youtube.com/embed/iQRVPCEOS7M?si=_d-C9G3ZSrpZo0nc",
};
// Upload and use heavily_cropped for better aspect ratio from /Demos.
const WatchColorVideo = {
  src: "https://www.youtube.com/embed/D2N-cCIh7_k?si=6ViGsmVwkAwohH9q",
};
const ReactivitiesVideo = {
  src: "https://www.youtube.com/embed/M6PCOuUxsyE?si=AIHNhFsC5R9enapC",
};
const WatchNotesVideo = {
  src: "https://www.youtube.com/embed/BzXHZdT7TLM?si=Tq5wHZBbUWHtc_47",
};
const GodotFinalVideo = {
  src: "https://www.youtube.com/embed/zxzgsrURiW8?si=5Z2Ann-Gns_RdWeC",
};


export default function Projects() {
  const { ref } = useSectionInView("Projects");
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  return (
    <section id="projects" className="scroll-mt-28">
      <motion.section>
        <SectionHeading>Projects</SectionHeading>
        <motion.p className="flex justify-center mt-[-24px] mb-[24px] text-s text-slate-500">
          Feel free to hover over the projects for a closer look!
        </motion.p>
      </motion.section>
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] mb-40">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            githubLink={item.githubLink}
            className={item.className}
            icon={item.icon}
            ref={i === 0 ? ref : null}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

const VideoSkeleton = ({
  imageSrc,
  youtubeVideo,
}: {
  imageSrc: string;
  youtubeVideo: string;
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

      {isHovered && (
        <div
          id="video"
          className="absolute inset-0 w-full h-full rounded-xl overflow-hidden flex justify-center items-center"
        >
          <ReactPlayer
            url={youtubeVideo}
            playing={isHovered}
            controls={false}
            loop={true}
            muted={true}
            width="100%"
            height="220%"
            config={{
              youtube: {
                playerVars: {
                  controls: 0,
                  modestbranding: 1,
                },
              },
            }}
            style={{ visibility: isHovered ? "visible" : "hidden" }}
          />
        </div>
      )}
    </div>
  );
};

const items: Item[] = [
  // 1555 * 451
  // Lentil JSX
  {
    title: "Lentil-JSX",
    description:
      "Embark on seamless React journeys with Lentil-JSX. Driven by ESBuild, it ensures efficient transpiling and bundling. Supporting both TypeScript and JavaScript, it enhances productivity with caching, concurrent usage, and npm integration, all contributing to a dependable development experience.",
    header: (
      <VideoSkeleton
        imageSrc={LentilJSX.src}
        youtubeVideo={LentilJSXVideo.src}
      />
    ),
    className: "md:col-span-3",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    imageComponent: <img src={LentilJSX.src} alt="Lentil JSX Image" />,
    githubLink: "https://github.com/oucar/lentil-jsx",
  },
  // Godot Doom like shooter
  {
    title: "Doom-like Retro FPS",
    description:
      "Experience a throwback to the old days with a fast-paced, Doom-like shooter, delivering pixelated 3D action powered by Godot.",
    header: (
      <VideoSkeleton
        imageSrc={GodotImage.src}
        youtubeVideo={GodotVideo.src}
      />
    ),
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    imageComponent: <img src={GodotImage.src} alt="Godot Image" />,
    githubLink: "https://github.com/oucar/doomlike-retro-fps",
  },
  // Microservices
  {
    title: "SVC Auctions",
    description:
      "A microservices-based application that leverages RabbitMQ and MassTransit for seamless communication. Powered by Next.js and .NET, it delivers real-time bidding and event-driven architecture for dynamic and immersive auction experiences.",
    header: (
      <VideoSkeleton
        imageSrc={Auctions.src}
        youtubeVideo={AuctionsVideo.src}
      />
    ),
    className: "md:col-span-2",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    imageComponent: <img src={Auctions.src} alt="Auctions Image" />,
    githubLink: "https://github.com/oucar/car-auction-microservices",
  },
  // Sorting Visualizer
  {
    title: "Sorting Algorithm Visualizer",
    description:
      "Embark on a captivating journey through sorting algorithms with this immersive React-based visualizer. Experience the magic of various sorting techniques as you interactively explore their mechanics and efficiency.",
    header: (
      <VideoSkeleton
        imageSrc={Sorting.src}
        youtubeVideo={SortingVideo.src}
      />
    ),
    className: "md:col-span-3",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    imageComponent: <img src={Sorting.src} alt="Sorting Visualizer Image" />,
    githubLink: "https://github.com/oucar/sorting-visualizer",
  },
  // Color App
  {
    title: "React Color Palettes",
    description:
      "Effortlessly explore, create, and integrate color palettes using interactive tools and robust validation mechanics.",
    header: (
      <VideoSkeleton
        imageSrc={ReactColorApp.src}
        youtubeVideo={ReactColorAppVideo.src}
      />
    ),
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    imageComponent: <img src={ReactColorApp.src} alt="React Color App Image" />,
    githubLink: "https://github.com/oucar/react-color-palette",
  },
  // WatchOS Color App
  {
    title: "WatchOS Color Explorer",
    description:
      "A WatchOS 10.2 app written in Swift, crafted for expanding skills and venturing into new territories of app development.",
    header: (
      <VideoSkeleton
        imageSrc={WatchColor.src}
        youtubeVideo={WatchColorVideo.src}
      />
    ),
    className: "md:col-span-1",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    imageComponent: <img src={WatchColor.src} alt="Watch Color App Image" />,
    githubLink: "https://github.com/oucar/watchOs-colorApp",
  },
  // React activities
  {
    title: "React Activities - An Activity Explorer",
    description:
      "A modern, secure platform for hosting and participating in various activities. With real-time communication, clean architecture, and robust authentication, it offers a seamless experience for users organizing or joining events.",
    header: (
      <VideoSkeleton
        imageSrc={Reactivities.src}
        youtubeVideo={ReactivitiesVideo.src}
      />
    ),
    className: "md:col-span-3",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    imageComponent: <img src={Reactivities.src} alt="React Activities Image" />,
    githubLink: "https://github.com/oucar/React-Activities",
  },
  // WatchOS Notes
  {
    title: "WatchOS Notes",
    description:
      "The Notes App for Apple Watch, written in Swift for WatchOS 10.2, offers effortless note-taking with storage, diverse input methods, and charming animations for an enjoyable user experience.",
    header: (
      <VideoSkeleton
        imageSrc={WatchNotes.src}
        youtubeVideo={WatchNotesVideo.src}
      />
    ),
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    imageComponent: <img src={WatchNotes.src} alt="Watch Notes Image" />,
    githubLink: "https://github.com/oucar/watchos-ios-notes",
  },
  // 437 Final
  {
    title: "437 Finder",
    description:
      "Challenging levels, diverse animations, and intuitive gameplay mechanics.",
    header: (
      <VideoSkeleton
        imageSrc={GodotFinal.src}
        youtubeVideo={GodotFinalVideo.src}
      />
    ),
    className: "md:col-span-1",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    imageComponent: <img src={GodotImage.src} alt="Godot Image" />,
    githubLink: "https://github.com/oucar/437-final",
  },
  // Another APP - alg related
];
