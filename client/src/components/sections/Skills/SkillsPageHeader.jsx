import SlideUp from "../../animations/SlideUp";

function SkillsPageHeader() {
  return (
    <div className="max-w-3xl">
      <SlideUp>
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600">
          ✦ SKILLS
        </span>
      </SlideUp>

      <SlideUp delay={0.1}>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
          Tools I use to
          <span className="block text-indigo-600">build things.</span>
        </h1>
      </SlideUp>

      <SlideUp delay={0.2}>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
          My technical toolkit spans frontend development, backend engineering,
          AI, cloud, and modern development workflows.
        </p>
      </SlideUp>
    </div>
  );
}

export default SkillsPageHeader;
