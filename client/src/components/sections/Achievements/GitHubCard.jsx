import SlideUp from "../../animations/SlideUp";
import { FaGithub } from "react-icons/fa";

function GitHubCard({ github }) {
  return (
    <SlideUp>
      <article className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_4px_20px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(15,23,42,0.10)] sm:p-6">
        {/* Header */}
        <div className="flex items-center gap-2">
          <FaGithub
            size={18}
            className="shrink-0 text-slate-950"
            aria-hidden="true"
          />

          <span className="text-[10px] font-bold uppercase tracking-wide text-indigo-600">
            GitHub Stats
          </span>
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div>
            <p className="text-2xl font-bold tracking-tight text-slate-950">
              {github.contributions}
            </p>

            <p className="mt-1 text-[9px] font-medium text-slate-500">
              Contributions
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold tracking-tight text-slate-950">
              {github.repositories}
            </p>

            <p className="mt-1 text-[9px] font-medium text-slate-500">
              Repositories
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold tracking-tight text-slate-950">
              {github.commits}
            </p>

            <p className="mt-1 text-[9px] font-medium text-slate-500">
              Commits
            </p>
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-5">
          <p className="text-2xl font-bold tracking-tight text-slate-950">
            {github.technologies}
          </p>

          <p className="mt-1 text-[9px] font-medium text-slate-500">
            Technologies
          </p>
        </div>

        {/* GitHub contribution graph */}
        <div className="mt-5 border-t border-slate-100 pt-4">
          <div className="mb-2 flex justify-between px-1">
            {[
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ].map((month) => (
              <span
                key={month}
                className="text-[7px] font-medium text-slate-400"
              >
                {month}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-24 gap-0.75">
            {Array.from({ length: 96 }).map((_, index) => {
              const intensity = index % 5;

              const intensityClasses = [
                "bg-emerald-50",
                "bg-emerald-100",
                "bg-emerald-200",
                "bg-emerald-400",
                "bg-emerald-600",
              ];

              return (
                <span
                  key={index}
                  className={`aspect-square rounded-xs ${intensityClasses[intensity]}`}
                  aria-hidden="true"
                />
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <p className="mt-4 text-[10px] leading-5 text-slate-500">
          Let's build something amazing together!
        </p>

        {/* GitHub button */}
        <a
          href={github.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-5 top-5 h-8 w-8 rounded-full border border-slate-200 bg-white opacity-0 shadow-sm transition-all duration-300 hover:border-indigo-200 hover:text-indigo-600 group-hover:opacity-100 sm:right-6 sm:top-6"
          aria-label="Open GitHub profile"
        >
          <span className="flex h-full w-full items-center justify-center">
            <FaGithub size={15} aria-hidden="true" />
          </span>
        </a>
      </article>
    </SlideUp>
  );
}

export default GitHubCard;
