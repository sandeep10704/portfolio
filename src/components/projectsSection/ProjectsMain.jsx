import React from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";


import quizImg from "../../../public/images/quiz.png";
import smsImg from "../../../public/images/sms.png";
import shopliteImg from "../../../public/images/shoplite.png";

const projects = [
  {
    name: "Deep Learning for Speech Recognition",
    year: "2025",
    align: "right",
    image: quizImg,
    link: "https://github.com/sandeep10704/CNN-using-kaggle-dateset/tree/main",
  },
  {
    name: "Spam Detection Model",
    year: "2024",
    align: "left",
    image: smsImg,
    link: "https://github.com/sandeep10704/sms_spam_dectection",
  },
  {
    name: "SHOPlite",
    year: "2024",
    align: "right",
    image: shopliteImg,
    link: "https://artha-viz.vercel.app/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => (
          <SingleProject
            key={index}
            name={project.name}
            year={project.year}
            align={project.align}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;
