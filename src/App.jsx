import { lazy, Suspense } from "react";
import Loader from "./FullScreenLoader";
// import SectionLoader from "./SectionLoader";

const NavbarMain = lazy(() => import("./components/navbar/NavbarMain"));
const HeroMain = lazy(() => import("./components/heroSection/HeroMain"));
const HeroGradient = lazy(() => import("./components/heroSection/HeroGradient"));
const SubHeroMain = lazy(() => import("./components/subHeroSection/SubHeroMain"));
const AboutMeMain = lazy(() => import("./components/aboutMeSection/AboutMeMain"));
const SkillsMain = lazy(() => import("./components/skillsSection/SkillsMain"));
const SubSkills = lazy(() => import("./components/skillsSection/SubSkills"));
const ExperienceMain = lazy(() => import("./components/experienceSection/ExperienceMain"));
const ProjectsMain = lazy(() => import("./components/projectsSection/ProjectsMain"));
const ContactMeMain = lazy(() => import("./components/contactMeSection/ContactMeMain"));
const FooterMain = lazy(() => import("./components/footer/FooterMain"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <main className="font-body text-white relative overflow-hidden">

        {/* <Suspense fallback={<SectionLoader />}> */}
          <NavbarMain />
        {/* </Suspense> */}

        {/* <Suspense fallback={<SectionLoader />}> */}
          <HeroMain />
        {/* </Suspense> */}

        {/* <Suspense fallback={<SectionLoader />}> */}
          <HeroGradient />
        {/* </Suspense> */}

        {/* <Suspense fallback={<SectionLoader />}> */}
          <SubHeroMain />
        {/* </Suspense> */}

        {/* <Suspense fallback={<SectionLoader />}> */}
          <AboutMeMain />
        {/* </Suspense> */}

        {/* <Suspense fallback={<SectionLoader />}> */}
          <SkillsMain />
        {/* </Suspense> */}

        {/* <Suspense fallback={<SectionLoader />}> */}
          <SubSkills />
        {/* </Suspense> */}

        {/* <Suspense fallback={<SectionLoader />}> */}
          <ExperienceMain />
        {/* </Suspense> */}

        {/* <Suspense fallback={<SectionLoader />}> */}
          <ProjectsMain />
        {/* </Suspense> */}

        {/* <Suspense fallback={<SectionLoader />}> */}
          <ContactMeMain />
        {/* </Suspense> */}

        {/* <Suspense fallback={<SectionLoader />}> */}
          <FooterMain />
        {/* </Suspense> */}

      </main>
    </Suspense>
  );
}

export default App;