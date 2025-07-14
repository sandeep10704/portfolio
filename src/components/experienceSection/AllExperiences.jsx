import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Machine Learning Engineer",
    project: "Housing Price Prediction Model",
    date: "jun 03 25 - july 31",
    responsibilities: [
      "Developed \"Employee Burnout Prediction\" using Linear Regression, analyzing employee datasets..",
      "Gained hands-on experience in data preprocessing, feature engineering, and regression modeling",
      "Strengthened skills in machine learning algorithms, data analysis, and predictive modeling",
    ],
  },
  
  {
    job: "ccc digital india private limited Inter",
    project: "Spam Detection Model",
    date: "jun 02 25- Aug 02 25 ",
    responsibilities: [
      "Developed responsive web interfaces using React.js",
      "Integrated Firebase for authentication and real-time database.",
      "Implemented CRUD operations with Firestore for data management",
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
