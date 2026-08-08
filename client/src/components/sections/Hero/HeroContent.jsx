import SlideUp from "../../animations/SlideUp";
import Badge from "../../ui/Badge";
import Button from "../../ui/Button";

function HeroContent() {
  return (
    <div className="max-w-2xl">
      {/* Greeting */}
      <SlideUp>
        <Badge>👋 Hello, I’m</Badge>
      </SlideUp>

      {/* Name + role */}
      <SlideUp delay={0.1}>
        <h1 className="mt-5 text-5xl font-bold leading-[1.02] tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-[4.25rem]">
          Yashendra Singh
        </h1>

        <h2 className="mt-2 bg-gradient-to-r from-indigo-600 via-blue-600 to-fuchsia-500 bg-clip-text text-4xl font-bold tracking-[-0.035em] text-transparent sm:text-5xl lg:text-[3.5rem]">
          Agentic AI Engineer
        </h2>
      </SlideUp>

      {/* Intro */}
      <SlideUp delay={0.2}>
        <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
          Full Stack Developer (MERN) | Building intelligent
          solutions with AI agents and modern web technologies.
        </p>
      </SlideUp>

      {/* Quick stats */}
      <SlideUp delay={0.3}>
        <div className="mt-6 flex flex-wrap gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-slate-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            1+ Years Experience
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-slate-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Available for opportunities
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-slate-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-red-400" />
            India
          </div>
        </div>
      </SlideUp>

      {/* CTA */}
      <SlideUp delay={0.4}>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Button href="#projects">
            View My Work
            <span aria-hidden="true">→</span>
          </Button>

          <Button href="#contact" variant="secondary">
            Contact Me
            <span aria-hidden="true">↗</span>
          </Button>
        </div>
      </SlideUp>

      {/* Social */}
      <SlideUp delay={0.5}>
        <div className="mt-8 flex items-center gap-4">
          <span className="text-xs font-medium text-slate-500">
            Connect with me
          </span>

          <div className="flex gap-2">
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-xs font-bold text-slate-600 shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:text-indigo-600"
            >
              in
            </a>

            <a
              href="#"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-xs font-bold text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:text-indigo-600"
            >
              GH
            </a>

            <a
              href="mailto:your-email@example.com"
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-xs font-bold text-slate-600 shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:text-indigo-600"
            >
              @
            </a>
          </div>
        </div>
      </SlideUp>
    </div>
  );
}

export default HeroContent;