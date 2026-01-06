import React from "react";
import Hero from "./components/hero-section";
import ExperienceSection from "./components/experience-section";
import ProjectsSection from "./components/projects-section";

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
