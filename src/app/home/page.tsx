import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { LuChevronRight } from "react-icons/lu";

const Home = () => {
  return (
    <div className="bg-[#020618] min-h-screen h-full flex justify-center items-center p-7">
      <div className="relative bg-[#0F172B] min-h-[calc(100vh-60px)] max-h-fit w-full border rounded-sm border-[#314158] opacity-80 flex flex-col justify-between">
        <Header />
        <div className="flex justify-center p-8">
          <div className="flex flex-col gap-8 justify-center items-center w-full">
            <div className="flex flex-col items-start gap-1.5">
              <p className="text-[#90A1B9] text-xl">Hi all, I am</p>
              <h1 className="text-white font-semibold text-5xl">
                Deep Singh Yadav
              </h1>
              <h2 className="text-3xl flex justify-center items-center text-[#615FFF]">
                <LuChevronRight /> Full-stack developer
              </h2>
            </div>
            <div>
              <p className="text-[#90A1B9]">// find my profile on</p>
              <div className="flex gap-1.5">
                <span className="text-[#6172ff]">const</span>
                <span className="text-[#43d9ad]">githublink</span>
                <span className="text-white">=</span>
                <Link
                  className="text-[#e99287]"
                  href={"https://github.com/DeepSingh10"}
                >
                  "https://github.com/DeepSingh10"
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 justify-center items-center w-full">
            <Image
              className="z-10 opacity-40"
              src={"/code-snippet.png"}
              height={183}
              width={560}
              alt="code-snippet"
            />
            <Image
              className="z-10"
              src={"/code-snippet.png"}
              height={183}
              width={560}
              alt="code-snippet"
            />
            <Image
              className="z-10 opacity-40"
              src={"/code-snippet.png"}
              height={183}
              width={560}
              alt="code-snippet"
            />
          </div>
        </div>
        <Footer />
        <div className="absolute bg-green-300 h-[250px] w-[250px] rounded-full top-18 right-120 blur-3xl"></div>
        <div className="absolute bg-blue-400 h-[200px] w-[400px] rounded-full top-70 right-40 -rotate-30 blur-3xl"></div>
      </div>
    </div>
  );
};

export default Home;
