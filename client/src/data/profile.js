import {
  FaLightbulb,
  FaGraduationCap,
  FaUsers,
  FaBullseye,
} from "react-icons/fa";

export const profileData = {
  about: {
    eyebrow: "ABOUT ME",

    title: "Building the future with AI & Code",

    description:
      "I’m an Agentic AI Engineer and MERN Stack Developer with a passion for creating scalable web applications and intelligent AI solutions. I love turning complex problems into simple, beautiful and efficient solutions.",

    highlights: [
      {
        title: "Problem Solver",
        icon: FaLightbulb,
        accent: "yellow",
      },
      {
        title: "Quick Learner",
        icon: FaGraduationCap,
        accent: "orange",
      },
      {
        title: "Team Player",
        icon: FaUsers,
        accent: "green",
      },
      {
        title: "Detail Oriented",
        icon: FaBullseye,
        accent: "pink",
      },
    ],
  },

  journey: [
    {
      year: "2020",
      title: "Started my coding journey",
      description:
        "Began with programming fundamentals and explored problem solving through code.",
    },
    {
      year: "2022",
      title: "Web Development",
      description:
        "Started building full-stack applications and working with modern web technologies.",
    },
    {
      year: "2023",
      title: "AI & Cloud",
      description:
        "Explored AI, machine learning and cloud technologies while building intelligent applications.",
    },
    {
      year: "2025",
      title: "Agentic AI Engineer",
      description:
        "Focused on building AI agents, automation workflows and enterprise-grade solutions.",
    },
  ],

  whatIDo: [
    "Build scalable MERN applications",
    "Design AI-powered workflows",
    "Develop intelligent AI agents",
    "Integrate APIs and cloud services",
  ],

  goals: [
    "Build impactful AI products",
    "Become a strong full-stack engineer",
    "Explore advanced Agentic AI systems",
    "Work on challenging real-world problems",
  ],

  stats: {
    experience: "1.5+",
    experienceLabel: "Years of Experience",

    projects: "10+",
    projectsLabel: "Projects Completed",
  },
};
