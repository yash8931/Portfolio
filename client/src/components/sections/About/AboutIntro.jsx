import { ArrowRight } from "lucide-react";

import SlideUp from "../../animations/SlideUp";
import Button from "../../ui/Button";

const accentMap = {
  yellow: {
    box: "border-amber-200 bg-amber-50/60",
    icon: "border-amber-300 bg-amber-100 text-amber-600",
  },

  orange: {
    box: "border-orange-200 bg-orange-50/60",
    icon: "border-orange-300 bg-orange-100 text-orange-600",
  },

  green: {
    box: "border-emerald-200 bg-emerald-50/60",
    icon: "border-emerald-300 bg-emerald-100 text-emerald-600",
  },

  pink: {
    box: "border-fuchsia-200 bg-fuchsia-50/60",
    icon: "border-fuchsia-300 bg-fuchsia-100 text-fuchsia-600",
  },
};

function AboutIntro({ data }) {
  return (
    <div className="relative">
      {/* Eyebrow */}
      <SlideUp delay={0}>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-600">
            {data.eyebrow}
          </span>

          <span className="h-px w-8 bg-indigo-200" />
        </div>
      </SlideUp>

      {/* Heading */}
      <SlideUp delay={0.1}>
        <h2 className="mt-4 max-w-xl text-3xl font-bold leading-[1.1] tracking-tight text-slate-950 sm:text-4xl">
          Building the future
          <span className="block">
            with{" "}
            <span className="bg-linear-to-r from-indigo-600 to-fuchsia-500 bg-clip-text text-transparent">
              AI & Code
            </span>
          </span>
        </h2>
      </SlideUp>

      {/* Description */}
      <SlideUp delay={0.2}>
        <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-[15px]">
          {data.description}
        </p>
      </SlideUp>

      {/* Qualities */}
      <SlideUp delay={0.3}>
        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
          {data.highlights.map((item) => {
            const Icon = item.icon;
            const accent = accentMap[item.accent] || accentMap.blue;

            return (
              <div
                key={item.title}
                className={`group rounded-2xl border p-3.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm ${accent.box}`}
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-105 ${accent.icon}`}
                >
                  <Icon size={18} strokeWidth={2} />
                </div>

                <p className="mt-3 text-xs font-bold text-slate-900">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </SlideUp>

      {/* CTA */}
      <SlideUp delay={0.4}>
        <div className="mt-8">
          <Button href="#experience" variant="secondary">
            More About Me
            <ArrowRight size={15} strokeWidth={2} />
          </Button>
        </div>
      </SlideUp>
    </div>
  );
}

export default AboutIntro;
