import SlideUp from "../../animations/SlideUp";

function ExperiencePageHeader() {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <SlideUp>
        <span className="inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-600">
          Professional Journey
        </span>
      </SlideUp>

      <SlideUp delay={0.08}>
        <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
          Experience that
          <span className="block">
            <span className="text-indigo-600">builds impact.</span>
          </span>
        </h1>
      </SlideUp>

      <SlideUp delay={0.16}>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
          A detailed look at my professional journey, the products I have worked
          on, the responsibilities I have handled, and the technologies I have
          used along the way.
        </p>
      </SlideUp>

      <SlideUp delay={0.24}>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-[10px] font-semibold text-slate-600 shadow-sm">
            Problem Solving
          </span>

          <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-[10px] font-semibold text-slate-600 shadow-sm">
            Full Stack Development
          </span>

          <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-[10px] font-semibold text-slate-600 shadow-sm">
            AI &amp; Automation
          </span>
        </div>
      </SlideUp>
    </div>
  );
}

export default ExperiencePageHeader;
