import { useState } from "react";
import Container from "../../ui/Container";
import SectionHeading from "../../ui/SectionHeading";
import { experienceData } from "../../../data/experience";

function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  const experience = experienceData[activeIndex];

  const previousExperience = () => {
    setActiveIndex((current) =>
      current === 0 ? experienceData.length - 1 : current - 1,
    );
  };

  const nextExperience = () => {
    setActiveIndex((current) =>
      current === experienceData.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section
      id="experience"
      className="border-b border-slate-100 bg-slate-50/40 py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="WORK EXPERIENCE"
            title="Where I've worked"
            description="A snapshot of my professional journey and the work I've contributed to."
          />

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[var(--shadow-md)]">
            <div className="grid lg:grid-cols-[1fr_0.38fr]">
              {/* Main experience */}
              <div className="p-6 sm:p-8 lg:p-10">
                {/* Top */}
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    {/* Company logo */}
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 text-sm font-bold text-indigo-600">
                      {experience.logo ? (
                        <img
                          src={experience.logo}
                          alt={`${experience.company} logo`}
                          className="h-full w-full object-contain p-2.5"
                          loading="lazy"
                        />
                      ) : (
                        experience.company
                          .split(" ")
                          .map((word) => word[0])
                          .join("")
                          .slice(0, 2)
                          .toUpperCase()
                      )}
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-indigo-600">
                        {experience.type}
                      </p>

                      <h3 className="mt-1 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
                        {experience.role}
                      </h3>

                      <p className="mt-1 text-sm font-semibold text-slate-700">
                        {experience.company}
                      </p>

                      <p className="mt-2 text-xs text-slate-400">
                        {experience.duration}
                        {experience.location ? ` · ${experience.location}` : ""}
                      </p>
                    </div>
                  </div>

                  {/* Navigation */}
                  {experienceData.length > 1 && (
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={previousExperience}
                        aria-label="Previous experience"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                      >
                        ←
                      </button>

                      <button
                        type="button"
                        onClick={nextExperience}
                        aria-label="Next experience"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                      >
                        →
                      </button>
                    </div>
                  )}
                </div>

                {/* Divider */}
                <div className="my-8 h-px bg-slate-100" />

                {/* Responsibilities */}
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                    Responsibilities
                  </p>

                  <ul className="mt-4 space-y-3">
                    {experience.responsibilities.map((responsibility) => (
                      <li
                        key={responsibility}
                        className="flex gap-3 text-sm leading-6 text-slate-600"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />

                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mt-8">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                    Technologies
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-[10px] font-semibold text-slate-600 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <aside className="border-t border-slate-100 bg-slate-50/70 p-6 sm:p-8 lg:border-l lg:border-t-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                  At a glance
                </p>

                <div className="mt-6 space-y-3">
                  {experience.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-2xl border border-slate-200 bg-white p-4"
                    >
                      <p className="text-2xl font-bold tracking-tight text-slate-950">
                        {metric.value}
                      </p>

                      <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-slate-400">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-indigo-100 bg-indigo-50 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-indigo-500">
                    Impact
                  </p>

                  <p className="mt-2 text-xs leading-5 text-indigo-900">
                    {experience.impact}
                  </p>
                </div>
              </aside>
            </div>
          </div>

          {/* Pagination */}
          {experienceData.length > 1 && (
            <div className="flex justify-center gap-1.5">
              {experienceData.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show experience ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    activeIndex === index
                      ? "w-7 bg-indigo-600"
                      : "w-1.5 bg-slate-300"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

export default Experience;
