import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  
  {
    job: "Machine Learning Engineer",
    project: "Spam Detection Model",
    date: "Completed",
    responsibilities: [
      "Built a spam detection model using NLTK.",
      "Implemented text preprocessing and feature extraction.",
      "Trained and evaluated the model for accuracy.",
    ],
  },
  {
    job: "Machine Learning Engineer",
    project: "Housing Price Prediction Model",
    date: "Completed",
    responsibilities: [
      "Developed a predictive model using Random Forest and other ML techniques.",
      "Preprocessed and analyzed housing dataset.",
      "Optimized model performance for better accuracy.",
    ],
  },
  {
    job: "Backend Developer",
    project: "Quiz Application Backend",
    date: "Ongoing",
    responsibilities: [
      "Developing the backend using Spring Boot.",
      "Designing RESTful APIs for quiz management.",
      "Ensuring security and scalability of the application.",
    ],
  },
];


const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
