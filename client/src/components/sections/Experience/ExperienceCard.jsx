import SlideUp from "../../animations/SlideUp";

function ExperienceCard({ experience }) {
  return (
    <SlideUp>
      <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[var(--shadow-md)] transition-shadow duration-300 hover:shadow-[var(--shadow-lg)]">
        <div className="grid lg:grid-cols-[230px_1fr_310px]">

          {/* Company */}
          <div className="border-b border-slate-100 p-5 sm:p-6 lg:border-b-0 lg:border-r">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white shadow-sm">
                YS
              </div>

              <div className="min-w-0">
                <h3 className="text-sm font-bold leading-5 text-slate-900">
                  {experience.company}
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  {experience.role}
                </p>
              </div>
            </div>

            <div className="mt-5">
              <p className="text-xs font-medium text-slate-700">
                {experience.type}
              </p>

              <p className="mt-1 text-[11px] text-slate-500">
                {experience.duration}
              </p>
            </div>

            <span className="mt-4 inline-flex rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-600">
              {experience.status}
            </span>
          </div>

          {/* Responsibilities */}
          <div className="p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Responsibilities
            </p>

            <p className="mt-3 text-xs leading-5 text-slate-600">
              {experience.description}
            </p>

            <ul className="mt-4 space-y-2.5">
              {experience.responsibilities.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-[11px] leading-5 text-slate-600"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Technologies */}
            <div className="mt-5 flex flex-wrap gap-2">
              {experience.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-medium text-slate-600"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div className="border-t border-slate-100 bg-slate-50/50 p-5 sm:p-6 lg:border-l lg:border-t-0">
            <div className="grid grid-cols-2 gap-3">
              {experience.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-slate-100 bg-white p-3 text-center"
                >
                  <p className="text-xl font-bold text-indigo-600">
                    {metric.value}
                  </p>

                  <p className="mt-1 text-[9px] leading-4 text-slate-500">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </article>
    </SlideUp>
  );
}

export default ExperienceCard;