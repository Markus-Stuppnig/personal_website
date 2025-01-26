"use client";

import React from "react";
import Image from "next/image";
import { data } from "@/components/miscellaneous/generalData";
import Heading from "../miscellaneous/Heading";

export default function About() {
  return (
    <section
      id="about"
      className="flex justify-center w-full md:h-screen items-center"
    >
      <div className="flex flex-col md:flex-row items-center w-full">
        <a
          href="https://en.wikipedia.org/wiki/Carpe_diem"
          target="_blank"
          className="flex w-full md:w-1/2 items-center justify-center md:ml-[10vw] animate-slidein"
        >
          <Image
            src={data.slogan_img}
            alt={data.slogan_alt_text}
            width={1000}
            height={1000}
            priority={true}
            className="zoom-on-hover-200"
          />
        </a>
        <div className="flex flex-col w-4/5 md:w-1/2 md:text-center md:mr-[10vh]">
          <Heading
            color="secondary"
            size="text-xl md:text-3xl"
            className="sm:mt-[5rem] mb-5"
          >
            {data.name}
          </Heading>
          <Heading
            color="secondary"
            size="text-md md:text-mdPlus"
            weight="font-medium"
          >
            {data.main_title}
          </Heading>
        </div>
      </div>
    </section>
  );
}
