import { motion } from "framer-motion";

const ProjectIndicator = ({
  total,
  current,
  onChange,
}) => {
  return (
    <div className="mt-10 flex justify-center gap-3">

      {Array.from({ length: total }).map((_, i) => (

        <motion.button
          key={i}
          onClick={() => onChange(i)}
          whileTap={{ scale: .8 }}
          className={`relative h-3 rounded-full transition-all duration-500 ${
            current === i
              ? "w-12 bg-cyan-400"
              : "w-3 bg-white/20 hover:bg-white/50"
          }`}
        >
          {current === i && (
            <motion.div
              layoutId="dot"
              className="absolute inset-0 rounded-full bg-cyan-400"
            />
          )}
        </motion.button>

      ))}

    </div>
  );
};

export default ProjectIndicator;