import PageLayout from "./components/layout/PageLayout";

import Hero from "./components/sections/Hero/Hero";
import About from "./components/sections/About/About";
import Experience from "./components/sections/Experience/Experience";
import SkillsProjects from "./components/sections/SkillsProjects";
import Achievements from "./components/sections/Achievements/Achievements";

function App() {
  return (
    <PageLayout>
      {/* Hero */}
      <Hero />

      {/* About */}
      <About />

      {/* Work Experience */}
      <Experience />

      {/* Skills + Projects */}
      <SkillsProjects />

      {/* Achievements + GitHub + Testimonial + Contact */}
      <Achievements />
    </PageLayout>
  );
}

export default App;