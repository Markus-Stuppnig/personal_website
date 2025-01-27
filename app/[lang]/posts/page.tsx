"use client";

import Posts from "@/components/Posts/Posts";
import { postsData } from "@/components/Posts/postsData";
import Heading from "@/components/miscellaneous/Heading";
import SectionDivider from "@/components/miscellaneous/SectionDivider";
import React from "react";

export default function PostsPage() {
  function onChange(value: string) {
    console.log("Search query:", value);
  }

  return (
    <main
      id="posts"
      className="mt-[5rem] flex flex-col justify-center items-center"
    >
      <div className="mt-[4rem] mb-[7rem] flex justify-center items-center w-[300rem] h-[35rem] bg-secondary transform rotate-[3.5deg]">
        <div className="flex flex-col w-full text-white text-center transform -rotate-[3.5deg]">
          <Heading
            color="white"
            size="text-xl md:text-3xl"
            weight="font-semibold"
            className="mb-5"
          >
            Posts
          </Heading>
          <Heading
            color="white"
            size="text-base md:text-basePlus"
            weight="font-medium"
            capitalize={false}
          >
            This page is about my life
          </Heading>
        </div>
      </div>

      <div className="flex justify-center w-full mb-[5rem]">
        <div className="w-4/5">
          <input
            type="text"
            placeholder={"Search..."}
            onChange={(e) => onChange(e.target.value)}
            className="w-[25rem] p-2 border rounded-full focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-10 w-4/5">
        {postsData.map((item, index) => (
          <div
            key={index}
            className="relative rounded-[2.8rem] bg-[#ccc] h-50 zoom-on-hover-200"
          >
            {item.imagePath}
            <div className="absolute bottom-0 bg-[#eee] w-full h-10 rounded-b-[2.8rem] flex items-center justify-center">
              {item.title}
            </div>
          </div>
        ))}
      </div>
      <SectionDivider height="h-[5rem] md:h-[10rem]" />
    </main>
  );
}
