import { motion } from "framer-motion";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import "./project.css";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{
        y: -15,
        scale: 1.02,
        transition: {
          type: "spring",
          stiffness: 220,
          damping: 18,
        },
      }}
      className="project-card group"
    >
      {/* Animated Glow */}
      <div className="project-glow"></div>
       <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-cyan-500/20 blur-[130px] opacity-0 transition-all duration-700 group-hover:opacity-100"></div>
      {/* Image */}
      <div className="project-image">
      <motion.img
  src={project.image}
  alt={project.name}
  whileHover={{
    scale: 1.08,
  }}
  transition={{
    duration: .6,
  }}
  className="h-full w-full object-cover"
/>

        {/* Overlay */}
        <div className="project-overlay">
          <span>{project.category}</span>
        </div>
      </div>

      {/* Bottom Glass */}
      <div className="project-content">

        <div className="project-top">

          <div>
            <p className="project-year">
              {project.year}
            </p>

            <h2>{project.name}</h2>

            <p className="project-subtitle">
              {project.subtitle}
            </p>

          </div>

        </div>

        <div className="project-buttons">

          {project.live && (
            <motion.a
              whileTap={{ scale: .94 }}
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="live-btn"
            >
              Live Demo
              <BsArrowUpRight />
            </motion.a>
          )}

          {project.github && (
            <motion.a
              whileTap={{ scale: .94 }}
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="github-btn"
            >
              <BsGithub />
              Github
            </motion.a>
          )}

        </div>

      </div>
    </motion.div>
  );
};

export default ProjectCard;