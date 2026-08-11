import SlideUp from "../../animations/SlideUp";

function ProjectsPageHeader() {
  return (
    <div className="max-w-3xl">
      <SlideUp>
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600">
          ✦ PROJECTS
        </span>
      </SlideUp>

      <SlideUp delay={0.1}>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
          Things I've
          <span className="block text-indigo-600">built & shipped.</span>
        </h1>
      </SlideUp>

      <SlideUp delay={0.2}>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
          A collection of projects, experiments, and products I've worked on —
          from web applications to AI-powered solutions.
        </p>
      </SlideUp>
    </div>
  );
}

export default ProjectsPageHeader;
