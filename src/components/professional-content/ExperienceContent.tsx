import { useRef } from "react";
import LineNumberedText from "../commen/LineNumberedText";

const ExperienceContent = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const texxt = `Over the past 5 years, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`;

  return (
    <div
      ref={scrollRef}
      className="flex px-4 p-2 text-[#c3d3e2] text-[16px] h-full gap-4 overflow-y-scroll scrollbar-hidden font-semibold"
    >
      <LineNumberedText scrollRef={scrollRef} content={texxt} />
    </div>
  );
};

export default ExperienceContent;
