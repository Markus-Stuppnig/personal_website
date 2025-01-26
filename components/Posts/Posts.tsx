import React from "react";
import { postsData } from "./postsData";
import PostsSection from "@/components/Posts/PostsSection";
import Heading from "@/components/miscellaneous/Heading";
import SectionDivider from "@/components/miscellaneous/SectionDivider";

export default function Posts() {
  return (
    <section
      id="projects"
      className="mt-[5rem] flex flex-col justify-center items-center"
    >
      <div className="mt-[4rem] mb-[14rem] flex justify-center items-center w-[300rem] h-[35rem] bg-secondary transform rotate-[3.5deg]">
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

      <div className="flex flex-col h-full">
        {postsData.map((item, index) => (
          <React.Fragment key={index}>
            <PostsSection post={item} index={index} />
            <SectionDivider height="h-[15rem]" />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
