"use client";

import React, { useState } from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import heroBg from "../../assets/hero-bg.svg";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../lib/motion";

export const HeroContent = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Fullstack Developer</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Rahul Singh Chauhan
            </span>{" "}
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className={
            "text-lg text-gray-400 my-5 max-w-[600px]" +
            (showMore ? "" : " max-h-[150px] overflow-hidden line-clamp")
          }
        >
          I&apos;m a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development.As a Software Development Engineer, I
          specialize in Frontend and Backend Development, Android Application
          Development, and Database Management. My technical expertise extends
          to Automation, Microservices, Continuous Integration/Continuous
          Deployment (CI/CD), and AWS cloud services. With a solid foundation in
          logic-building and problem-solving, I thrive in dynamic environments
          where I can leverage my skills to deliver high-quality software
          solutions. I have a proven track record of developing efficient and
          scalable applications, implementing automation to streamline
          processes, and deploying robust systems on AWS. Passionate about
          continuous learning and staying updated with the latest industry
          trends, I am always ready to embrace new challenges and opportunities.
          My goal is to contribute to innovative projects and collaborate with
          forward-thinking teams to drive technological advancements.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show less" : "Show more"}
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <img
          src={heroBg}
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
