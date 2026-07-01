import ProjectsText from "./ProjectsText";
import ProjectCarousel from "./ProjectCarousel";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ProjectsMain = () => {
  return (
    <section
      id="projects"
      className="relative max-w-[1400px] mx-auto px-6"
    >
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
      >
        <ProjectsText />
      </motion.div>

      <ProjectCarousel />
    </section>
  );
};

export default ProjectsMain;