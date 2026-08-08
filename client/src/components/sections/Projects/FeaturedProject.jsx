import SlideUp from "../../animations/SlideUp";

function FeaturedProject({ project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[var(--shadow-md)]">
      {/* Project preview */}
      <div className="relative h-[145px] overflow-hidden bg-gradient-to-br from-slate-100 via-indigo-50 to-violet-100">
        <div className="absolute inset-x-5 top-5 rounded-lg border border-white/80 bg-white/90 p-2.5 shadow-lg backdrop-blur transition-transform duration-500 group-hover:-translate-y-1">
          <div className="flex items-center gap-1.5 border-b border-slate-100 pb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
            <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
            <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
          </div>

          <div className="mt-2 grid grid-cols-[35px_1fr] gap-2">
            <div className="rounded bg-slate-100" />

            <div>
              <div className="h-2 w-20 rounded bg-indigo-100" />

              <div className="mt-2 grid grid-cols-3 gap-1.5">
                <div className="h-8 rounded bg-slate-50" />
                <div className="h-8 rounded bg-indigo-50" />
                <div className="h-8 rounded bg-violet-50" />
              </div>
            </div>
          </div>
        </div>

        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-1 text-[8px] font-bold text-indigo-600 shadow-sm">
          LIVE
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center justify-between">
          <span className="text-[8px] font-bold uppercase tracking-wider text-indigo-600">
            {project.category}
          </span>

          <span className="text-[9px] text-slate-400">
            {project.year}
          </span>
        </div>

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
              className="rounded-md bg-slate-50 px-1.5 py-1 text-[8px] font-medium text-slate-500"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <a
            href={project.links.live}
            className="text-[9px] font-semibold text-indigo-600 hover:text-indigo-700"
          >
            View Project →
          </a>

          <a
            href={project.links.github}
            className="text-[9px] font-semibold text-slate-500 hover:text-slate-900"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </article>
  );
}

export default FeaturedProject;