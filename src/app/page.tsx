import React from "react";
import Hero from "./pages/hero-section";
import ProjectsSection from "./pages/projects/projects-section";
import ExperienceSection from "./pages/experience/experience-section";
import BlogsSection from "./pages/blogs/blogs-section";
import AboutSection from "./pages/about/about-section";

const page = () => {
  return (
    <>
      <Hero />
      <ExperienceSection />
      <ProjectsSection />
      <BlogsSection />
      <AboutSection />
    </>
  );
};

export default page;
