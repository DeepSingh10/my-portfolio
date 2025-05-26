import Link from "next/link";
import { LuChevronRight } from "react-icons/lu";

const HeaderSection = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-[100dvh] overflow-hidden w-full bg-[#121120]">
      <div className="w-full max-w-5xl">
        <div className="relative z-20 flex flex-col justify-center items-center gap-6 w-full">
          <div className="font-bold z-10 max-w-[570px] w-full text-[#F5F5F5] text-8xl text-center flex flex-col justify-center items-center scale-[0.60] md:scale-100 gap-1">
            <span className="max-w-full opacity-0 animate-fade-up-1">
              CREATIVE
            </span>
            <span className="w-full relative opacity-0 animate-fade-up-2 bg-black/30 px-10 py-1 text-center backdrop-blur-sm border-2 border-dashed">
              DEVELOPER
            </span>
            <span className="max-w-full opacity-0 animate-fade-up-3">
              SINCE
            </span>
            <span className="max-w-full opacity-0 animate-fade-up-4 text-[#FF512F]">
              2022
            </span>
          </div>
          <div className="flex flex-col text-lg text-white z-10 justify-center items-center opacity-0 animate-fade-up-5">
            <Link
              href={"/home"}
              className="px-8 py-2 border-2 border-white rounded-xl text-white hover:text-[#82a3d1] hover:border-[#7d97bb] hover:bg-transparent"
            >
              <LuChevronRight size={30} />
            </Link>
          </div>
        </div>
      </div>
      <div className="opacity-0 animate-fade-in">
        <div className="absolute inset-x-0 top-0 z-10 h-[50vh] w-full bg-gradient-to-b from-[#121120] to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 z-10 h-[50vh] w-full bg-gradient-to-t from-[#121120] to-transparent"></div>
        <img
          className="absolute inset-0 bg-[#121120] h-[100dvh] w-full object-cover opacity-25 transition-all duration-2000"
          fetchPriority="high"
          srcSet="/bg-header.webp"
          src="/bg-header.webp"
          alt="background-image"
          decoding="async"
          style={{ color: "transparent" }}
        />
      </div>
    </div>
  );
};

export default HeaderSection;
