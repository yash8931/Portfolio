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

import { SiTailwindcss, SiExpress, SiMongodb, SiMysql } from "react-icons/si";

import { skillsData } from "../../../data/skills";

const iconMap = {
  react: {
    icon: FaReact,
    color: "text-[#61DAFB]",
    background: "bg-[#61DAFB]/10",
  },

  html: {
    icon: FaHtml5,
    color: "text-[#E34F26]",
    background: "bg-[#E34F26]/10",
  },

  css: {
    icon: FaCss3Alt,
    color: "text-[#1572B6]",
    background: "bg-[#1572B6]/10",
  },

  javascript: {
    icon: FaJs,
    color: "text-[#D6B900]",
    background: "bg-[#F7DF1E]/20",
  },

  tailwind: {
    icon: SiTailwindcss,
    color: "text-[#06B6D4]",
    background: "bg-[#06B6D4]/10",
  },

  bootstrap: {
    icon: FaBootstrap,
    color: "text-[#7952B3]",
    background: "bg-[#7952B3]/10",
  },

  node: {
    icon: FaNodeJs,
    color: "text-[#339933]",
    background: "bg-[#339933]/10",
  },

  express: {
    icon: SiExpress,
    color: "text-slate-800",
    background: "bg-slate-100",
  },

  mongodb: {
    icon: SiMongodb,
    color: "text-[#47A248]",
    background: "bg-[#47A248]/10",
  },

  mysql: {
    icon: SiMysql,
    color: "text-[#4479A1]",
    background: "bg-[#4479A1]/10",
  },

  azure: {
    icon: FaMicrosoft,
    color: "text-[#0078D4]",
    background: "bg-[#0078D4]/10",
  },

  docker: {
    icon: FaDocker,
    color: "text-[#2496ED]",
    background: "bg-[#2496ED]/10",
  },

  git: {
    icon: FaGitAlt,
    color: "text-[#F05032]",
    background: "bg-[#F05032]/10",
  },

  github: {
    icon: FaGithub,
    color: "text-[#24292F]",
    background: "bg-slate-100",
  },
};

const categoryMeta = {
  Frontend: {
    number: "01",
    description: "Building responsive, accessible and modern user interfaces.",
    accent: "from-cyan-400 to-blue-500",
  },

  Backend: {
    number: "02",
    description:
      "Developing APIs, server-side applications and data-driven systems.",
    accent: "from-emerald-400 to-green-500",
  },

  "AI / ML": {
    number: "03",
    description:
      "Working with AI systems, LLMs, agents and prompt-driven workflows.",
    accent: "from-violet-400 to-fuchsia-500",
  },

  "Cloud / DevOps": {
    number: "04",
    description:
      "Development workflows, cloud platforms, containers and source control.",
    accent: "from-blue-400 to-indigo-500",
  },
};

function TechnologyIcon({ technology }) {
  const config = iconMap[technology.icon];

  if (config) {
    const Icon = config.icon;

    return (
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${config.background}`}
      >
        <Icon className={`text-xl ${config.color}`} aria-hidden="true" />
      </div>
    );
  }

  const initials = technology.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-50 to-fuchsia-50">
      <span className="text-[10px] font-bold text-indigo-600">{initials}</span>
    </div>
  );
}

function SkillCategory({ skill }) {
  const meta = categoryMeta[skill.category] || {
    number: "00",
    description: "Technologies and tools used in my development workflow.",
    accent: "from-indigo-400 to-violet-500",
  };

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[var(--shadow-md)] sm:p-7">
      {/* Decorative gradient */}
      <div
        className={`absolute right-0 top-0 h-32 w-32 rounded-full bg-gradient-to-br ${meta.accent} opacity-[0.07] blur-2xl transition-opacity duration-300 group-hover:opacity-[0.12]`}
        aria-hidden="true"
      />

      {/* Category header */}
      <div className="relative flex items-start justify-between">
        <div>
          <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-indigo-600">
            {meta.number}
          </span>

          <h2 className="mt-2 text-xl font-bold tracking-tight text-slate-950">
            {skill.category}
          </h2>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-100 bg-indigo-50 text-xs font-bold text-indigo-600">
          {String(skill.technologies.length).padStart(2, "0")}
        </div>
      </div>

      {/* Description */}
      <p className="relative mt-4 max-w-md text-xs leading-6 text-slate-500">
        {meta.description}
      </p>

      {/* Technology list */}
      <div className="relative mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {skill.technologies.map((technology) => (
          <div
            key={technology.name}
            className="group/technology flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/60 px-3 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-100 hover:bg-white hover:shadow-md"
          >
            <TechnologyIcon technology={technology} />

            <div className="min-w-0">
              <p className="truncate text-[10px] font-bold text-slate-800">
                {technology.name}
              </p>

              <p className="mt-0.5 text-[9px] text-slate-400">Technology</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

function SkillsGrid() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {skillsData.map((skill) => (
        <SkillCategory key={skill.category} skill={skill} />
      ))}
    </div>
  );
}

export default SkillsGrid;
