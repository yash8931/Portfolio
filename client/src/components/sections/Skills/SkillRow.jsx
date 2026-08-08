import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaDocker,
  FaMicrosoft,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

const iconMap = {
  react: FaReact,
  html: FaHtml5,
  css: FaCss3Alt,
  javascript: FaJs,
  tailwind: SiTailwindcss,
  bootstrap: FaBootstrap,

  node: FaNodeJs,
  express: SiExpress,
  mongodb: SiMongodb,
  mysql: SiMysql,

  // AI icons intentionally use fallback initials
  openai: null,
  ai: null,
  llm: null,
  prompt: null,

  azure: FaMicrosoft,
  docker: FaDocker,
  git: FaGitAlt,
  github: FaGithub,
};

function SkillRow({ skill }) {
  return (
    <div className="group flex min-h-[76px] items-center border-b border-slate-100 py-4 last:border-b-0">
      {/* Category */}
      <div className="w-[115px] shrink-0">
        <h3 className="text-xs font-bold text-slate-900">
          {skill.category}
        </h3>
      </div>

      {/* Technologies */}
      <div className="flex flex-1 flex-wrap items-center gap-3">
        {skill.technologies.map((technology) => {
          const Icon = iconMap[technology.icon];

          return (
            <div
              key={technology.name}
              title={technology.name}
              className="group/icon flex h-9 w-9 items-center justify-center rounded-lg border border-slate-100 bg-white text-slate-500 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-100 hover:bg-indigo-50 hover:text-indigo-600"
            >
              {Icon ? (
                <Icon className="text-[18px]" />
              ) : (
                <span className="text-[9px] font-bold">
                  {technology.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 3)
                    .toUpperCase()}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SkillRow;