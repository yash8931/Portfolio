import Container from "../ui/Container";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";

function SkillsProjects() {
  return (
    <section className="border-b border-slate-100 bg-white py-12 sm:py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.25fr] lg:items-start">
          <Skills />

          <Projects />
        </div>
      </Container>
    </section>
  );
}

export default SkillsProjects;