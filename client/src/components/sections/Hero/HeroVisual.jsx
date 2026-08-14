import Floating from "../../animations/Floating";
import profilePhoto from "../../../assets/profile/profilePhoto.png";
import leewayhertzLogo from "../../../assets/company/leewayhertzLogo.jpeg";

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-130 px-4 sm:px-0">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-65 w-65 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-100/70 blur-3xl sm:h-90 sm:w-90"
      />

      {/* Decorative dots */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-20 grid grid-cols-4 gap-1.5 opacity-50 sm:left-3 sm:top-28 sm:gap-2"
      >
        {Array.from({ length: 16 }).map((_, index) => (
          <span
            key={index}
            className="h-1 w-1 rounded-full bg-indigo-300 sm:h-1.5 sm:w-1.5"
          />
        ))}
      </div>

      {/* Decorative circle */}
      <div
        aria-hidden="true"
        className="absolute right-5 top-0 h-14 w-14 rounded-full border border-indigo-100 sm:right-16 sm:top-4 sm:h-20 sm:w-20"
      />

      {/* Main image */}
      <Floating duration={5} distance={8}>
        <div className="relative mx-auto aspect-[0.86] w-[82%] overflow-hidden rounded-4xl bg-linear-to-br from-slate-100 via-white to-indigo-100 shadow-(--shadow-lg) sm:w-[78%] sm:rounded-5xl">
          <img
            src={profilePhoto}
            alt="Yashendra Singh"
            className="h-full w-full object-cover object-top"
          />

          <div className="absolute left-1/2 top-8 h-20 w-20 -translate-x-1/2 rounded-full bg-white/80 blur-2xl sm:h-24 sm:w-24" />
        </div>
      </Floating>

      {/* Currently working card */}
      <div className="absolute -right-2 top-5 w-31 rounded-2xl border border-slate-200/80 bg-white/90 p-2 shadow-(--shadow-md) backdrop-blur-xl sm:-right-4 sm:top-8 sm:w-39 sm:p-3">
        <p className="text-[8px] font-medium text-slate-400 sm:text-[9px]">
          Currently Working At
        </p>

        <div className="mt-1.5 flex items-center gap-1.5 sm:gap-2">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-slate-950 sm:h-8 sm:w-8">
            <img
              src={leewayhertzLogo}
              alt="LeewayHertz"
              className="h-full w-full object-cover object-top"
            />
          </div>

          <div className="min-w-0">
            <p className="truncate text-[9px] font-bold text-slate-900 sm:text-[10px]">
              LeewayHertz
            </p>

            <p className="truncate text-[7px] text-slate-500 sm:text-[9px]">
              Software Engineer
            </p>
          </div>
        </div>
      </div>

      {/* Focus area card */}
      <div className="absolute -right-2 bottom-16 w-30 rounded-2xl border border-slate-200/80 bg-white/90 p-2 shadow-(--shadow-md) backdrop-blur-xl sm:-right-4 sm:bottom-20 sm:w-37 sm:p-3">
        <div className="flex items-start gap-1.5 sm:gap-2">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-xs text-indigo-600 sm:h-8 sm:w-8">
            ✦
          </div>

          <div className="min-w-0">
            <p className="text-[8px] text-slate-400 sm:text-[9px]">
              Focus Area
            </p>

            <p className="mt-1 text-[9px] font-semibold text-slate-900 sm:text-[10px]">
              AI Agents
            </p>

            <p className="text-[8px] text-slate-500 sm:text-[9px]">
              Full Stack
            </p>
          </div>
        </div>
      </div>

      {/* Projects completed */}
      <div className="absolute -left-2 bottom-3 w-28 rounded-2xl border border-slate-200/80 bg-white/95 p-2 shadow-(--shadow-md) backdrop-blur-xl sm:-left-4 sm:bottom-6 sm:w-32 sm:p-3">
        <p className="text-[8px] text-slate-400 sm:text-[9px]">
          Projects Completed
        </p>

        <p className="mt-1 text-lg font-bold text-indigo-600 sm:text-xl">10+</p>

        <p className="text-[8px] text-slate-500 sm:text-[9px]">
          Successfully delivered
        </p>
      </div>
    </div>
  );
}

export default HeroVisual;
