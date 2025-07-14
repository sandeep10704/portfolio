import SingleSkill from "./SingleSkill";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiSpringboot } from "react-icons/si";
import { SiSpringsecurity } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTensorflow } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { SiOpenai } from "react-icons/si"; // placeholder for LangGraph, LangChain, Autogen
import { FaServer } from "react-icons/fa"; // placeholder for Microservices
import { SiRender } from "react-icons/si"; // if render doesn't exist, fallback to FaServer or SiNetlify
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [

  {
    skill: "Spring Boot",
    icon: SiSpringboot,
  },

  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "TensorFlow",
    icon: SiTensorflow,
  },
  {
    skill: "LangGraph",
    icon: SiOpenai, 
  },
  {
    skill: "LangChain",
    icon: SiOpenai,
  },
  {
    skill: "Render",
    icon: SiRender, 
  },
  {
    skill: "Redux",
    icon: SiRedux,
  },
  {
    skill: "Firebase",
    icon: SiFirebase,
  },
  {
    skill: "FastAPI",
    icon: SiFastapi,
  },
  {
    skill: "Microservices",
    icon: FaServer, 
  },
];


const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1400px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
