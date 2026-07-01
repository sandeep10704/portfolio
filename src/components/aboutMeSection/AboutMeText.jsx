import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
     <p>
  I'm <strong>Sai Venkata Sandeep Garlapati</strong>, a Computer Science undergraduate at <strong>SRM University AP</strong> passionate about building scalable software and AI-driven applications. I enjoy solving complex problems and developing efficient backend systems using <strong>Java, Spring Boot, Python, React, PostgreSQL, and REST APIs</strong>.

  My interests span <strong>Backend Development, Machine Learning, Generative AI, MLOps, and Large Language Models (LLMs)</strong>. With a strong foundation in <strong>Data Structures & Algorithms, Mathematics, Object-Oriented Programming, DBMS, Operating Systems, Computer Networks, and Cryptography</strong>, I enjoy applying mathematical thinking to algorithm design, optimization, and AI. I'm committed to continuous learning and building impactful solutions that bridge software engineering and artificial intelligence.

  I'm always eager to learn, collaborate, and turn innovative ideas into real-world applications.
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
