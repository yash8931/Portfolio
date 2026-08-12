import SkillRow from "./SkillRow";
import { skillsData } from "../../../data/skills";
import { Link } from "react-router-dom";

function Skills() {
  return (
    <div id="skills">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-indigo-600">
            ✦ SKILLS
          </span>

          <h2 className="mt-2 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
            Tech Stack
          </h2>
        </div>

        <Link
          to="/skills"
          className="hidden rounded-lg border border-slate-200 bg-white px-3 py-2 text-[10px] font-semibold text-slate-600 shadow-sm transition hover:border-indigo-200 hover:text-indigo-600 sm:block"
        >
          View All Skills →
        </Link>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-linear-to-br from-slate-100 via-indigo-50 to-violet-100 px-4 shadow-[var(--shadow-sm)] sm:px-5">
        {skillsData.map((skill) => (
          <SkillRow key={skill.category} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
