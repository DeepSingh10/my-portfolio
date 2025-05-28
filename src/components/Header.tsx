"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const path = usePathname();
  console.log("g", path);

  return (
    <div className="w-full h-[45px] border-[#314158] border-b flex justify-between text-[#b4c8db]">
      <div className="flex w-full">
        <div className="border-r border-[#314158] w-full max-w-[275px] px-6 py-2">
          Deep Singh Yadav
        </div>
        <div
          className={`border-r border-[#314158] w-full max-w-fit px-6 text-center py-2 ${path === "/home" ? "border-b-amber-400 border-b-2 " : ""}`}
        >
          _hello
        </div>
        <Link
          href={"/about-me"}
          className={`border-r border-[#314158] w-full max-w-fit px-6 text-center py-2 ${path === "/about-me" ? "border-b-amber-400 border-b-2 " : ""}`}
        >
          _about_me
        </Link>
        <div
          className={`border-r border-[#314158] w-full max-w-fit px-6 text-center py-2 ${path === "/projects" ? "border-b-amber-400 border-b-2 " : ""}`}
        >
          _projects
        </div>
      </div>
      <div className="flex w-[20%] justify-end">
        <div
          className={`border-l border-[#314158] w-full max-w-fit px-6 text-center py-2 ${path === "/contact" ? "border-b-amber-400 border-b-2 " : ""}`}
        >
          _contact_me
        </div>
      </div>
    </div>
  );
};

export default Header;
