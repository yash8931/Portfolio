import { Routes, Route } from "react-router-dom";

import App from "../App";

import ScrollToHash from "./ScrollToHash";

import ExperiencePage from "../components/sections/Experience/ExperiencePage";
import ProjectsPage from "../components/sections/Projects/ProjectsPage";
import SkillsPage from "../components/sections/Skills/SkillsPage";
import Contact from "../components/sections/Contact/Contact";

function AppRoutes() {
  return (
    <>
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/experience" element={<ExperiencePage />} />

        <Route path="/projects" element={<ProjectsPage />} />

        <Route path="/skills" element={<SkillsPage />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
