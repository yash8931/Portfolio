import SlideUp from "../../animations/SlideUp";
import { Trophy, ChartNoAxesCombined, Link2, Rocket } from "lucide-react";

const icons = [
  {
    icon: Trophy,
    wrapper: "bg-orange-50 text-orange-500",
  },
  {
    icon: ChartNoAxesCombined,
    wrapper: "bg-emerald-50 text-emerald-500",
  },
  {
    icon: Link2,
    wrapper: "bg-sky-50 text-sky-500",
  },
  {
    icon: Rocket,
    wrapper: "bg-violet-50 text-violet-500",
  },
];

function AchievementCard({ achievements = [] }) {
  const fallbackAchievements = [
    {
      value: "98%+",
      title: "AI Model Accuracy",
    },
    {
      value: "35%+",
      title: "Performance Improvement",
    },
    {
      value: "20+",
      title: "APIs Developed",
    },
    {
      value: "2",
      title: "Enterprise Projects Live",
    },
  ];

  const items =
    achievements.length > 0 ? achievements.slice(0, 4) : fallbackAchievements;

  return (
    <SlideUp>
      <article className="group h-full min-h-[330px] rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_2px_12px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
        {/* Header */}
        <div className="flex items-center gap-2">
          <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-indigo-50">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
          </span>

          <span className="text-[10px] font-bold uppercase tracking-wide text-indigo-600">
            ACHIEVEMENTS
          </span>
        </div>

        {/* Achievement list */}
        <div className="mt-6 space-y-4">
          {items.map((item, index) => {
            const Icon = icons[index]?.icon || Trophy;
            const wrapper =
              icons[index]?.wrapper || "bg-indigo-50 text-indigo-500";

            const value =
              item.value || item.metric || item.title?.split(" ")[0] || "—";

            const title =
              item.description ||
              item.label ||
              item.name ||
              (item.value ? item.title : item.title);

            return (
              <div
                key={`${title}-${index}`}
                className="flex items-center gap-4"
              >
                {/* Icon */}
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${wrapper}`}
                >
                  <Icon size={19} strokeWidth={1.8} />
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <p className="text-[15px] font-bold leading-none text-slate-900">
                    {value}
                  </p>

                  <p className="mt-1.5 text-[10px] leading-4 text-slate-600">
                    {title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </article>
    </SlideUp>
  );
}

export default AchievementCard;
