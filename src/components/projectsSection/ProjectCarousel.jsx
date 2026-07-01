import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectNavigation from "./ProjectNavigation";
import ProjectIndicator from "./ProjectIndicator";
import projects from "./projects";

const CARD_WIDTH = 450;

const ProjectCarousel = () => {
  const carouselRef = useRef(null);

  const [width, setWidth] = useState(0);

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (!carouselRef.current) return;

      setWidth(
        carouselRef.current.scrollWidth -
          carouselRef.current.offsetWidth
      );
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const next = () => {
    setCurrent((prev) =>
      prev === projects.length - 1 ? prev : prev + 1
    );
  };

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? 0 : prev - 1));
  };

  return (
    <div className="relative w-full mt-20">

      {/* Background Glow */}

      <motion.div
        animate={{
          x: [-120, 120, -120],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[500px] w-[500px]
        -translate-x-1/2 -translate-y-1/2
        rounded-full bg-cyan-500/10 blur-[150px]"
      />

      {/* Navigation */}

      <ProjectNavigation
        next={next}
        prev={prev}
      />

      {/* Drag Area */}

      <motion.div
  className="overflow-hidden cursor-grab active:cursor-grabbing"
>

  <motion.div
    ref={carouselRef}
    drag="x"
    dragConstraints={{
      left: -width,
      right: 0,
    }}
    dragElastic={0.15}
    dragMomentum={true}
    whileTap={{
      cursor: "grabbing",
    }}
    transition={{
      type: "spring",
      stiffness: 180,
      damping: 20,
    }}
    animate={{
      x: -(current * CARD_WIDTH),
    }}
    className="flex gap-10 px-[10vw]"
  >

    {projects.map((project, index) => (

      <motion.div
        key={project.id}
        animate={{
          scale: current === index ? 1 : .88,
          opacity: current === index ? 1 : .45,
          filter:
            current === index
              ? "blur(0px)"
              : "blur(2px)",
        }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 18,
        }}
      >
        <ProjectCard
          project={project}
        />
      </motion.div>

    ))}

  </motion.div>

</motion.div>

      {/* Dots */}

      <ProjectIndicator
        total={projects.length}
        current={current}
        onChange={setCurrent}
      />
    </div>
  );
};

export default ProjectCarousel;