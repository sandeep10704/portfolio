import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
      I'm Sandeep, a passionate developer with a strong foundation in Java, Python, and JavaScript. I have hands-on experience in building web applications using Spring Boot, React, and PostgreSQL, and I'm actively learning deep learning with TensorFlow. My interests lie in problem-solving, machine learning, and backend development, with a focus on integrating large language models (LLMs) into applications.

Currently pursuing my B.Tech in Computer Science and Engineering at SRM University AP, I have a solid grasp of data structures, algorithms, and cryptography.

I thrive on learning, innovation, and staying consistent in my goals. Let's build something amazing together!
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
