import SlideUp from "../../animations/SlideUp";

function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[var(--shadow-md)]">
      <div className="relative h-[145px] overflow-hidden bg-gradient-to-br from-blue-50 via-white to-fuchsia-50">
        <div className="absolute inset-x-5 top-6 rounded-lg border border-white bg-white/90 p-2.5 shadow-lg backdrop-blur transition-transform duration-500 group-hover:-translate-y-1">
          <div className="flex gap-1.5">
            <div className="h-2 w-16 rounded bg-indigo-100" />
            <div className="ml-auto h-2 w-8 rounded bg-emerald-100" />
          </div>

          <div className="mt-3 h-16 rounded bg-slate-50" />
        </div>

        <span className="absolute right-3 top-3 rounded-full bg-emerald-50 px-2 py-1 text-[8px] font-semibold text-emerald-600">
          Live
        </span>
      </div>

      <div className="p-4">
        <span className="text-[8px] font-bold uppercase tracking-wider text-indigo-600">
          {project.category}
        </span>

        <h3 className="mt-2 text-sm font-bold text-slate-900">
          {project.title}
        </h3>

        <p className="mt-2 line-clamp-2 text-[10px] leading-4 text-slate-500">
          {project.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-1">
          {project.technologies.slice(0, 4).map((technology) => (
            <span
              key={technology}
              className="rounded-md bg-slate-50 px-1.5 py-1 text-[8px] text-slate-500"
            >
              {technology}
            </span>
          ))}
        </div>

        <a
          href={project.links.live}
          className="mt-4 inline-block text-[9px] font-semibold text-indigo-600 hover:text-indigo-700"
        >
          View Project →
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;