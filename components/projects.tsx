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
  IconBrandGithub,
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

interface Item {
  title: string;
  description: string;
  header: React.ReactNode;
  className: string;
  icon: React.ReactNode;
  imageComponent: React.ReactNode;
  gifComponent: React.ReactNode;
  githubLink: string;
}

export default function Projects() {
  const { ref } = useSectionInView("Projects");
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);


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

const LentilJSXGif = {
  src: 'https://pouch.jumpshare.com/preview/fxRCSJztar8FbRdiWbTpC9O8EP7iGh6gGnQsZL-ml3D_Rpcwg2p7X77SBV4KK8lALVR6iyrVEBeskBJeo0cgXb_ayp7U-uas7xNQrQmB14c',
};
const GodotGif = {
  src: 'https://pouch.jumpshare.com/preview/RAgT_IXdep6d1GfQ-awiEsk3g9uwM2PjoH_pdHLFMszS6F2cdF7BQXePR-_8cidgLVR6iyrVEBeskBJeo0cgXb_ayp7U-uas7xNQrQmB14c',
};
const AuctionsGif = {
  src: 'https://pouch.jumpshare.com/preview/KtG1a77nvWWrhh1f4GpiLNSbhkffSCsh0NjpnjLrUD_l_8AMsHC4Am_mgAUO3S51LVR6iyrVEBeskBJeo0cgXb_ayp7U-uas7xNQrQmB14c',
};
const SortingGif = {
  src: 'https://pouch.jumpshare.com/preview/M1H6a-xBNJdGMQcICglxIyJcAZSE8vuH8kwsecI1T2IljifrrSK2o2eIEtjoIctcLVR6iyrVEBeskBJeo0cgXTSeuZLSYnA3uFngg62Lelk',
};
const ReactColorAppGif = {
  src: 'https://pouch.jumpshare.com/preview/Cj48R0KZE4hkWBAS_-eXb5EKcT1YSjpPl7lOa-XAOlT8HZvnKnUyzE1qg9aPJ_-Hy1dv3f136fFd_laks3gOXn8h-_uO1dHbGzmL3WUuPx4',
};
const WatchColorGif = {
  src: 'https://pouch.jumpshare.com/preview/LfcGn-3tsNzICv8fobtkGEnqD4Vs3cjj0t1gYflATa2Z8fMsecXGQC6j8tE7VWKWLVR6iyrVEBeskBJeo0cgXTSeuZLSYnA3uFngg62Lelk',
};
const ReactivitiesGif = {
  src: 'https://pouch.jumpshare.com/preview/TIjkYSKWujpxsujIt9OrLM8LQJp1u960UFNhakaPn3bpQ_PZCiqgv3F_aQWOemWkLVR6iyrVEBeskBJeo0cgXb5CiBKxN05Ky4EoZ3pq1cw',
};
const WatchNotesGif = {
  src: 'https://pouch.jumpshare.com/preview/CWDzBEfnzOSbwnlDJk85B0pipGA3Ak9ftGzX6EGP7W45jz2lNcE9ufixyYUUThVILVR6iyrVEBeskBJeo0cgXTSeuZLSYnA3uFngg62Lelk',
};
const GodotFinalGif = {
  src: 'https://pouch.jumpshare.com/preview/wkAssA5bkY8TB_qKztH6PgKzfAK1LRHZdYFUQBehzgEzUoT9_Zd5fZgjw3sYw7_0LVR6iyrVEBeskBJeo0cgXb_ayp7U-uas7xNQrQmB14c',
};


const items: Item[] = [
  // 1555 * 451
  // Lentil JSX
  {
    title: "Lentil-JSX",
    description:
      "Embark on seamless React journeys with Lentil-JSX. Driven by ESBuild, it ensures efficient transpiling and bundling. Supporting both TypeScript and JavaScript, it enhances productivity with caching, concurrent usage, and npm integration, all contributing to a dependable development experience.",
    header: <Skeleton imageSrc={LentilJSX.src} gifSrc={LentilJSXGif.src} />,
    className: "md:col-span-3",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    imageComponent: <img src={LentilJSX.src} alt="Lentil JSX Image" />,
    gifComponent: <img src={LentilJSXGif.src} alt="Lentil JSX Gif" />,
    githubLink: "https://github.com/oucar/lentil-jsx",
  },
  // Godot Doom like shooter
  {
    title: "Doom-like Retro FPS",
    description:
      "Experience a throwback to the old days with a fast-paced, Doom-like shooter, delivering pixelated 3D action powered by Godot.",
    header: <Skeleton imageSrc={GodotImage.src} gifSrc={GodotGif.src} />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    imageComponent: <img src={GodotImage.src} alt="Godot Image" />,
    gifComponent: <img src={GodotGif.src} alt="Godot Gif" />,
    githubLink: "https://github.com/oucar/doomlike-retro-fps",
  },
  // Microservices
  {
    title: "SVC Auctions",
    description:
      "A microservices-based application that leverages RabbitMQ and MassTransit for seamless communication. Powered by Next.js and .NET, it delivers real-time bidding and event-driven architecture for dynamic and immersive auction experiences.",
    header: <Skeleton imageSrc={Auctions.src} gifSrc={AuctionsGif.src} />,
    className: "md:col-span-2",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    imageComponent: <img src={Auctions.src} alt="Auctions Image" />,
    gifComponent: <img src={AuctionsGif.src} alt="Auctions Gif" />,
    githubLink: "https://github.com/oucar/car-auction-microservices",
  },
  // Sorting Visualizer
  {
    title: "Sorting Algorithm Visualizer",
    description:
      "Embark on a captivating journey through sorting algorithms with this immersive React-based visualizer. Experience the magic of various sorting techniques as you interactively explore their mechanics and efficiency.",
    header: <Skeleton imageSrc={Sorting.src} gifSrc={SortingGif.src} />,
    className: "md:col-span-3",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    imageComponent: <img src={Sorting.src} alt="Sorting Visualizer Image" />,
    gifComponent: <img src={SortingGif.src} alt="Sorting Visualizer Gif" />,
    githubLink: "https://github.com/oucar/sorting-visualizer",
  },
  // Color App
  {
    title: "React Color Palettes",
    description:
      "Effortlessly explore, create, and integrate color palettes using interactive tools and robust validation mechanics.",
    header: (
      <Skeleton imageSrc={ReactColorApp.src} gifSrc={ReactColorAppGif.src} />
    ),
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    imageComponent: <img src={ReactColorApp.src} alt="React Color App Image" />,
    gifComponent: <img src={ReactColorAppGif.src} alt="React Color App Gif" />,
    githubLink: "https://github.com/oucar/react-color-palette",
  },
  // WatchOS Color App
  {
    title: "WatchOS Color Explorer",
    description:
      "A WatchOS 10.2 app written in Swift, crafted for expanding skills and venturing into new territories of app development.",
    header: <Skeleton imageSrc={WatchColor.src} gifSrc={WatchColorGif.src} />,
    className: "md:col-span-1",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    imageComponent: <img src={WatchColor.src} alt="Watch Color App Image" />,
    gifComponent: <img src={WatchColorGif.src} alt="Watch Color App Gif" />,
    githubLink: "https://github.com/oucar/watchOs-colorApp",
  },
  // React activities
  {
    title: "React Activities - An Activity Explorer",
    description:
      "A modern, secure platform for hosting and participating in various activities. With real-time communication, clean architecture, and robust authentication, it offers a seamless experience for users organizing or joining events.",
    header: (
      <Skeleton imageSrc={Reactivities.src} gifSrc={ReactivitiesGif.src} />
    ),
    className: "md:col-span-3",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    imageComponent: <img src={Reactivities.src} alt="React Activities Image" />,
    gifComponent: <img src={ReactColorAppGif.src} alt="React Activities Gif" />,
    githubLink: "https://github.com/oucar/React-Activities",
  },
  // WatchOS Notes
  {
    title: "WatchOS Notes",
    description:
      "The Notes App for Apple Watch, written in Swift for WatchOS 10.2, offers effortless note-taking with storage, diverse input methods, and charming animations for an enjoyable user experience.",
    header: <Skeleton imageSrc={WatchNotes.src} gifSrc={WatchNotesGif.src} />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    imageComponent: <img src={WatchNotes.src} alt="Watch Notes Image" />,
    gifComponent: <img src={WatchNotesGif.src} alt="Watch Notes Gif" />,
    githubLink: "https://github.com/oucar/watchos-ios-notes",
  },
  // 437 Final
  {
    title: "437 Finder",
    description:
      "Challenging levels, diverse animations, and intuitive gameplay mechanics.",
    header: <Skeleton imageSrc={GodotFinal.src} gifSrc={GodotFinalGif.src} />,
    className: "md:col-span-1",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    imageComponent: <img src={GodotImage.src} alt="Godot Image" />,
    gifComponent: <img src={GodotGif.src} alt="Godot Gif" />,
    githubLink: "https://github.com/oucar/437-final",
  },
  // Another APP - alg related
];
