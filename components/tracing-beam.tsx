"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [svgHeight, setSvgHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize(); 

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, [contentRef.current]);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight*1.2]),
    {
      stiffness: 500,
      damping: 90,
    }
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    {
      stiffness: 500,
      damping: 90,
    }
  );

  return (
    <div className="relative">
      {typeof window !== "undefined" && windowWidth !== undefined && windowWidth > 980 && (
        <motion.div
          ref={ref}
          className="absolute left-0 top-0 w-full h-full pointer-events-none"
        >
          <svg
            viewBox={`0 0 20 ${svgHeight}`}
            width="20"
            height={svgHeight}
            className="ml-4 block"
            aria-hidden="true"
          >
            <motion.path
              d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
              fill="none"
              stroke="#9091A0"
              strokeOpacity="0.16"
              transition={{
                duration: 10,
              }}
            />
            <motion.path
              d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="1.25"
              className="motion-reduce:hidden"
              transition={{
                duration: 10,
              }}
            />
            <defs>
              <motion.linearGradient
                id="gradient"
                gradientUnits="userSpaceOnUse"
                x1="0"
                x2="0"
                y1={y1}
                y2={y2}
              >
                <stop stopColor="#18CCFC" stopOpacity="0" />
                <stop stopColor="#18CCFC" />
                <stop offset="0.325" stopColor="#6344F5" />
                <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
              </motion.linearGradient>
            </defs>
          </svg>
        </motion.div>
      )}
      <div ref={contentRef} className={className}>
        {children}
      </div>
    </div>
  );
};
