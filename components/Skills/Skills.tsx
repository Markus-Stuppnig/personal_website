"use client";

import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "@/components/Skills/skillsData";
import { useInView } from "react-intersection-observer";
import Heading from "@/components/miscellaneous/Heading";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    scale: 1,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <section
      id="skills"
      className="flex flex-col items-center w-full mt-[5rem]"
    >
      <div className="flex flex-col items-center w-11/12 md:w-1/2 max-w-[53rem] text-center">
        <Heading>My skills</Heading>
        <ul className="flex flex-wrap justify-center gap-2 text-md md:text-lg text-gray-800">
          {skillsData.map((skill, index) => (
            <motion.li
              ref={ref}
              className="bg-white font-medium rounded-xl px-3 md:px-5 py-3 shadow-xl backdrop-filter backdrop-blur-lg bg-opacity-40"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileHover={{ scale: 1.04 }}
              animate={inView ? "animate" : "initial"}
              custom={index}
              transition={{ duration: 0.1 }}
              viewport={{ once: false }}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
