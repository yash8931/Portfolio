import SlideUp from "../../animations/SlideUp";

function SkillCard({ skill, index }) {
  return (
    <SlideUp delay={index * 0.08}>
      <article className="group h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[var(--shadow-md)] sm:p-6">
        <div className="flex items-start justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-lg text-indigo-600 transition-transform duration-300 group-hover:scale-105">
            {skill.icon}
          </div>

          <span className="text-xs font-medium text-slate-400">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <h3 className="mt-5 text-base font-bold text-slate-900">
          {skill.category}
        </h3>

        <p className="mt-2 text-xs leading-5 text-slate-500">
          {skill.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {skill.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[10px] font-medium text-slate-600 transition-colors group-hover:border-indigo-100 group-hover:bg-indigo-50/50"
            >
              {technology}
            </span>
          ))}
        </div>
      </article>
    </SlideUp>
  );
}

export default SkillCard;