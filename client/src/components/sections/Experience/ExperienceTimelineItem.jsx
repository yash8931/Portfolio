import SlideUp from "../../animations/SlideUp";

function ExperienceTimelineItem({ experience, index }) {
  const initials = experience.company
    ?.split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <SlideUp delay={index * 0.08}>
      <article className="relative grid gap-6 lg:grid-cols-[180px_minmax(0,1fr)]">
        {/* Timeline */}
        <div className="hidden lg:block">
          <div className="sticky top-28">
            <p className="text-xs font-bold text-slate-900">
              {experience.duration}
            </p>

            {experience.location && (
              <p className="mt-1 text-[10px] leading-4 text-slate-400">
                {experience.location}
              </p>
            )}
          </div>
        </div>

        {/* Card */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,23,42,0.09)] sm:p-7">
          {/* Gradient accent */}
          <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-indigo-500 via-violet-500 to-fuchsia-500" />

          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            {/* Company */}
            <div className="flex gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                {experience.logo ? (
                  <img
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    className="h-full w-full object-contain p-2"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-sm font-bold text-indigo-600">
                    {initials}
                  </span>
                )}
              </div>

              <div>
                <h2 className="text-lg font-bold tracking-tight text-slate-950">
                  {experience.company}
                </h2>

                <p className="mt-1 text-sm font-semibold text-indigo-600">
                  {experience.role}
                </p>

                <div className="mt-2 flex flex-wrap gap-2 lg:hidden">
                  <span className="text-[10px] font-medium text-slate-400">
                    {experience.duration}
                  </span>

                  {experience.location && (
                    <>
                      <span className="text-slate-300">•</span>
                      <span className="text-[10px] font-medium text-slate-400">
                        {experience.location}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Status */}
            {experience.status && (
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-emerald-600">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {experience.status}
              </span>
            )}
          </div>

          {/* Divider */}
          <div className="my-6 h-px bg-slate-100" />

          {/* Description */}
          {experience.description && (
            <p className="max-w-3xl text-sm leading-7 text-slate-600">
              {experience.description}
            </p>
          )}

          {/* Responsibilities */}
          {experience.responsibilities?.length > 0 && (
            <div className="mt-6">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                Responsibilities
              </h3>

              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {experience.responsibilities.map((item, itemIndex) => (
                  <li
                    key={`${item}-${itemIndex}`}
                    className="flex gap-3 text-sm leading-6 text-slate-700"
                  >
                    <span className="mt-2.25 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          {experience.technologies?.length > 0 && (
            <div className="mt-7">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                Technologies
              </h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {experience.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-[10px] font-semibold text-slate-600"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </SlideUp>
  );
}

export default ExperienceTimelineItem;
