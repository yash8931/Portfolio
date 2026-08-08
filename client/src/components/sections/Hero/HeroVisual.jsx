import Floating from "../../animations/Floating";
import profilePhoto from "../../../assets/profile/profilePhoto.png";
import leewayhertzLogo from "../../../assets/company/leewayhertzLogo.jpeg";

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-100/70 blur-3xl"
      />

      {/* Decorative dots */}
      <div
        aria-hidden="true"
        className="absolute left-3 top-28 grid grid-cols-4 gap-2 opacity-50"
      >
        {Array.from({ length: 16 }).map((_, index) => (
          <span
            key={index}
            className="h-1.5 w-1.5 rounded-full bg-indigo-300"
          />
        ))}
      </div>

      {/* Decorative circle */}
      <div
        aria-hidden="true"
        className="absolute right-16 top-4 h-20 w-20 rounded-full border border-indigo-100"
      />

      {/* Main image area */}
      <Floating duration={5} distance={8}>
        <div className="relative mx-auto aspect-[0.86] w-[78%] overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-100 via-white to-indigo-100 shadow-[var(--shadow-lg)]">
          {/* Temporary profile placeholder */}
          <img
            src={profilePhoto}
            alt="Yashendra Singh"
            className="h-full w-full object-cover object-top"
          />

          {/* Top light effect */}
          <div className="absolute left-1/2 top-8 h-24 w-24 -translate-x-1/2 rounded-full bg-white/80 blur-2xl" />
        </div>
      </Floating>

      {/* Currently working card */}
      <div className="absolute right-0 top-8 w-[190px] rounded-2xl border border-slate-200/80 bg-gray-200 p-4 shadow-[var(--shadow-md)] backdrop-blur-xl">
        <p className="text-[10px] font-medium text-slate-400">
          Currently Working At
        </p>

        <div className="mt-2 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-950 text-xs font-bold text-white">
            <img
              src={leewayhertzLogo}
              alt="LeewayHertz"
              className="h-full w-full object-cover object-top"
            />
          </div>

          <div>
            <p className="text-xs font-bold text-slate-900">LeewayHertz</p>

            <p className="text-[10px] text-slate-500">Software Engineer</p>
          </div>
        </div>
      </div>

      {/* Focus area card */}
      <div className="absolute bottom-24 right-0 w-[180px] rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-[var(--shadow-md)] backdrop-blur-xl">
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
            ✦
          </div>

          <div>
            <p className="text-[10px] text-slate-400">Focus Area</p>

            <p className="mt-1 text-xs font-semibold text-slate-900">
              AI Agents
            </p>

            <p className="text-[10px] text-slate-500">Full Stack</p>
          </div>
        </div>
      </div>

      {/* Projects completed card */}
      <div className="absolute bottom-4 left-0 w-[145px] rounded-2xl border border-slate-200/80 bg-white/95 p-4 shadow-[var(--shadow-md)]">
        <p className="text-[10px] text-slate-400">Projects Completed</p>

        <p className="mt-1 text-2xl font-bold text-indigo-600">10+</p>

        <p className="text-[10px] text-slate-500">Successfully delivered</p>
      </div>
    </div>
  );
}

export default HeroVisual;
