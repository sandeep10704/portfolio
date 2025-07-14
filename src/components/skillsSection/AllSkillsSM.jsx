import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiFastapi, SiFirebase, SiOpenai, SiRender, SiSpringboot, SiTensorflow, SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaJava, FaPython, FaServer } from "react-icons/fa6";

const skills = [
  {
    skill: "Java",
    icon: FaJava,
  },
  {
    skill: "Python",
    icon: FaPython,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
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
    skill: "Autogen",
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


const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
