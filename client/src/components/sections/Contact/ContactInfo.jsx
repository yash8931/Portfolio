import { FaEnvelope, FaLinkedinIn, FaGithub } from "react-icons/fa";

const contactItems = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "your@email.com",
    href: "mailto:your@email.com",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    value: "Let's connect professionally",
    href: "https://www.linkedin.com/",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "Explore my work",
    href: "https://github.com/",
  },
];

function ContactInfo() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-950 p-6 text-white shadow-(--shadow-sm) sm:p-8">
      <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-indigo-400">
        GET IN TOUCH
      </span>

      <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
        Have an idea?
        <span className="block text-indigo-400">Let's talk.</span>
      </h2>

      <p className="mt-4 text-xs leading-6 text-slate-400 sm:text-sm">
        I'm always open to interesting projects, collaborations and
        opportunities where I can learn, contribute and create something
        valuable.
      </p>

      <div className="mt-8 space-y-3">
        {contactItems.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-3.5 transition-all duration-300 hover:border-indigo-400/30 hover:bg-white/10"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-indigo-400 transition group-hover:bg-indigo-500 group-hover:text-white">
                <Icon />
              </span>

              <span className="min-w-0">
                <span className="block text-[10px] font-medium uppercase tracking-wider text-slate-500">
                  {item.label}
                </span>

                <span className="mt-1 block truncate text-xs font-semibold text-slate-200">
                  {item.value}
                </span>
              </span>
            </a>
          );
        })}
      </div>

      <div className="mt-8 border-t border-white/10 pt-6">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />

          <span className="text-[10px] font-semibold text-slate-400">
            Open to opportunities
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
