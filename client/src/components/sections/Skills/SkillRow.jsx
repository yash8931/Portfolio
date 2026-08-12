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
  FaLightbulb,
  FaRobot,
  FaCode,
} from "react-icons/fa";

import { SiTailwindcss, SiExpress, SiMongodb, SiMysql } from "react-icons/si";

const iconMap = {
  // Frontend
  react: FaReact,
  html: FaHtml5,
  css: FaCss3Alt,
  javascript: FaJs,
  tailwind: SiTailwindcss,
  bootstrap: FaBootstrap,

  // Backend
  node: FaNodeJs,
  express: SiExpress,
  mongodb: SiMongodb,
  mysql: SiMysql,

  // AI / ML
  openai: FaRobot,
  ai: FaRobot,
  llm: FaCode,
  prompt: FaLightbulb,

  // Cloud / DevOps
  azure: FaMicrosoft,
  docker: FaDocker,
  git: FaGitAlt,
  github: FaGithub,
};

const iconColorMap = {
  // Frontend
  react: "text-[#61DAFB]",
  html: "text-[#E34F26]",
  css: "text-[#1572B6]",
  javascript: "text-[#F7DF1E]",
  tailwind: "text-[#06B6D4]",
  bootstrap: "text-[#7952B3]",

  // Backend
  node: "text-[#339933]",
  express: "text-slate-900",
  mongodb: "text-[#47A248]",
  mysql: "text-[#4479A1]",

  // AI / ML
  openai: "text-[#10A37F]",
  ai: "text-violet-600",
  llm: "text-indigo-600",
  prompt: "text-orange-500",

  // Cloud / DevOps
  azure: "text-[#0078D4]",
  docker: "text-[#2496ED]",
  git: "text-[#F05032]",
  github: "text-[#181717]",
};

function SkillRow({ skill }) {
  return (
    <div className="group flex min-h-19 items-center border-slate-100 py-4 not-last:border-b">
      {/* Category */}
      <div className="w-28.75 shrink-0">
        <h3 className="text-xs font-bold text-slate-900">{skill.category}</h3>
      </div>

      {/* Technologies */}
      <div className="flex flex-1 flex-wrap items-center gap-3">
        {skill.technologies.map((technology) => {
          const Icon = iconMap[technology.icon];
          const iconColor = iconColorMap[technology.icon] || "text-slate-500";

          return (
            <div
              key={technology.name}
              title={technology.name}
              className="group/icon flex h-9 w-9 items-center justify-center rounded-lg border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-200 hover:shadow-md"
            >
              {Icon ? (
                <Icon
                  className={`text-[18px] ${iconColor} transition-transform duration-300 group-hover/icon:scale-110`}
                />
              ) : (
                <span className={`text-[9px] font-bold ${iconColor}`}>
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
