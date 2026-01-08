import React from "react";
import Hero from "./pages/hero-section";
import ProjectsSection from "./pages/projects/projects-section";
import ExperienceSection from "./pages/experience/experience-section";

const page = () => {
  return (
    <>
      <Hero />
      <ExperienceSection />
      <ProjectsSection />
    </>
  );
};

export default page;
