import { projectsData } from "../../../data/projects";

import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";

function ProjectsGrid() {
  const featuredProjects = projectsData.filter((project) => project.featured);

  const otherProjects = projectsData.filter((project) => !project.featured);

  return (
    <div className="space-y-10">
      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section>
          <div className="mb-5">
            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-indigo-600">
              FEATURED
            </span>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
              Featured Projects
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <FeaturedProject key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <section>
          <div className="mb-5">
            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
              MORE WORK
            </span>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
              More Projects
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default ProjectsGrid;
