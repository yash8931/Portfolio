import { useState } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";

import SlideUp from "../../animations/SlideUp";
import Button from "../../ui/Button";

const tabs = [
  {
    id: "journey",
    label: "My Journey",
  },
  {
    id: "what-i-do",
    label: "What I Do",
  },
  {
    id: "goals",
    label: "My Goals",
  },
];

function JourneyTimeline({ items }) {
  return (
    <div className="relative mt-7">
      {/* Timeline line */}
      <div className="absolute bottom-3 left-[5px] top-3 w-px bg-slate-200" />

      <div className="space-y-6">
        {items.map((item) => (
          <div key={item.year} className="relative flex gap-4">
            {/* Timeline dot */}
            <div className="relative z-10 mt-1 flex h-3 w-3 shrink-0 items-center justify-center rounded-full border-2 border-white bg-indigo-500 ring-1 ring-indigo-100" />

            <div className="grid min-w-0 flex-1 grid-cols-[42px_1fr] gap-3">
              <span className="pt-0.5 text-[10px] font-bold text-slate-400">
                {item.year}
              </span>

              <div>
                <h3 className="text-xs font-bold leading-5 text-slate-900 sm:text-sm">
                  {item.title}
                </h3>

                <p className="mt-1 text-[10px] leading-5 text-slate-500 sm:text-[11px]">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ListContent({ items }) {
  return (
    <div className="mt-7 space-y-3">
      {items.map((item, index) => (
        <div
          key={`${item}-${index}`}
          className="flex gap-3 rounded-xl border border-slate-100 bg-slate-50/60 p-3 transition-colors hover:border-indigo-100 hover:bg-indigo-50/40"
        >
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-[9px] font-bold text-indigo-600">
            {String(index + 1).padStart(2, "0")}
          </span>

          <p className="text-xs leading-5 text-slate-600">{item}</p>
        </div>
      ))}
    </div>
  );
}

function JourneyCard({ data }) {
  const [activeTab, setActiveTab] = useState("journey");

  return (
    <SlideUp delay={0.15}>
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
        <div className="grid lg:grid-cols-[1fr_155px]">
          {/* Main content */}
          <div className="p-5 sm:p-7">
            {/* Tabs */}
            <div className="flex items-center gap-7 border-b border-slate-100">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative whitespace-nowrap pb-3 text-[10px] font-bold transition-colors sm:text-xs ${
                      isActive
                        ? "text-indigo-600"
                        : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    {tab.label}

                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-indigo-500" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Content */}
            {activeTab === "journey" && (
              <JourneyTimeline items={data.journey} />
            )}

            {activeTab === "what-i-do" && <ListContent items={data.whatIDo} />}

            {activeTab === "goals" && <ListContent items={data.goals} />}
          </div>

          {/* Stats panel */}
          <div className="flex flex-col justify-between border-t border-slate-100 bg-gradient-to-b from-indigo-50/80 via-white to-fuchsia-50/70 p-5 sm:p-7 lg:border-l lg:border-t-0">
            <div className="space-y-7">
              {/* Experience */}
              <div>
                <p className="text-3xl font-bold tracking-tight text-indigo-600">
                  {data.stats.experience}
                </p>

                <p className="mt-1 max-w-[100px] text-[10px] leading-4 text-slate-500">
                  {data.stats.experienceLabel}
                </p>
              </div>

              {/* Projects */}
              <div>
                <p className="text-3xl font-bold tracking-tight text-fuchsia-500">
                  {data.stats.projects}
                </p>

                <p className="mt-1 max-w-[100px] text-[10px] leading-4 text-slate-500">
                  {data.stats.projectsLabel}
                </p>
              </div>
            </div>

            {/* Resume */}
            <div className="mt-8">
              <Button
                href="#resume"
                variant="secondary"
                className="w-full justify-center text-[10px]"
              >
                Download Resume
                <ArrowDown size={13} />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 opacity-70" />
      </div>
    </SlideUp>
  );
}

export default JourneyCard;
