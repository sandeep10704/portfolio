import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";

const btn =
  "group flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/10";

const ProjectNavigation = ({ prev, next }) => {
  return (
    <div className="absolute top-1/2 left-0 right-0 z-30 flex -translate-y-1/2 justify-between px-4 pointer-events-none">

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: .9 }}
        onClick={prev}
        className={`${btn} pointer-events-auto`}
      >
        <FiChevronLeft
          className="text-white group-hover:text-cyan-300"
          size={28}
        />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: .9 }}
        onClick={next}
        className={`${btn} pointer-events-auto`}
      >
        <FiChevronRight
          className="text-white group-hover:text-cyan-300"
          size={28}
        />
      </motion.button>

    </div>
  );
};

export default ProjectNavigation;