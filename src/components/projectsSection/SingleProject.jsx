import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({ name, year, image, link }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.15 }}
      whileHover={{ y: -8 }}
      className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-[#111827] shadow-2xl transition-all duration-500 hover:border-blue-500/60 hover:shadow-blue-500/30"
    >
      {/* Image */}
      <div className="relative h-[260px] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
        />

        {/* Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-[#0b112090] to-transparent"></div>

        {/* Blue Glow */}
        <div className="absolute -bottom-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-blue-500/30 blur-3xl opacity-0 transition duration-700 group-hover:opacity-100"></div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white transition group-hover:text-blue-400">
              {name}
            </h2>

            <p className="mt-1 text-sm text-gray-400">
              {year}
            </p>
          </div>

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white transition duration-300 group-hover:rotate-45 group-hover:bg-orange">
            <BsFillArrowUpRightCircleFill size={22} />
          </div>
        </div>
      </div>

      {/* Animated Border */}
      <div className="absolute inset-0 rounded-3xl border border-transparent transition-all duration-500 group-hover:border-blue-400/40"></div>
    </motion.a>
  );
};

export default SingleProject;