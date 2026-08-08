import ProjectCard from "./ProjectCard";
import FeaturedProject from "./FeaturedProject";
import { projectsData } from "../../../data/projects";

function Projects() {
  const featuredProject = projectsData.find(
    (project) => project.featured
  );

  const otherProjects = projectsData.filter(
    (project) => !project.featured
  );

  return (
    <div id="projects">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-indigo-600">
            ✦ PROJECTS
          </span>

          <h2 className="mt-2 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
            Featured Projects
          </h2>
        </div>

        <button
          type="button"
          className="hidden rounded-lg border border-slate-200 bg-white px-3 py-2 text-[10px] font-semibold text-slate-600 shadow-sm transition hover:border-indigo-200 hover:text-indigo-600 sm:block"
        >
          View All Projects →
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {featuredProject && (
          <FeaturedProject
            project={featuredProject}
          />
        )}

        {otherProjects.slice(0, 1).map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;