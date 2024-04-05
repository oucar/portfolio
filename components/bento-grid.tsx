import { cn } from "@/utils/cn";
import React from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 sm:gap-y-4 md:gap-y-12 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = React.forwardRef(
  (
    {
      className,
      title,
      description,
      header,
      icon,
      onClick 
    }: {
      className?: string;
      title?: string | React.ReactNode;
      description?: string | React.ReactNode;
      header?: React.ReactNode;
      icon?: React.ReactNode;
      onClick?: () => void;
    },
    ref: React.Ref<HTMLDivElement>
  ) => {
    const handleClick = () => {
      if (onClick) {
        onClick();
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          "row-span-1 rounded-xl h-[350px] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
          className
        )}
        onClick={handleClick}
      >
        {header}
        <div className="group-hover/bento:translate-x-2 transition duration-200">
          {icon}
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
            {title}
          </div>
          <div className="font-sans font-normal text-neutral-600 text-xs h-18 dark:text-neutral-300">
            {description}
          </div>
        </div>
      </div>
    );
  }
);
