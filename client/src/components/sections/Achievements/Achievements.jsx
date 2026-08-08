import Container from "../../ui/Container";
import SlideUp from "../../animations/SlideUp";
import AchievementCard from "./AchievementCard";
import GitHubCard from "./GitHubCard";
import { achievementsData } from "../../../data/achievements";
import { Mail, Smartphone, MapPin, Send, Quote } from "lucide-react";

function TestimonialCard() {
  return (
    <SlideUp delay={0.1}>
      <article className="group h-full min-h-[330px] rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_2px_12px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
        {/* Header */}
        <div className="flex items-center gap-2">
          <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-indigo-50">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
          </span>

          <span className="text-[10px] font-bold uppercase tracking-wide text-indigo-600">
            TESTIMONIAL
          </span>
        </div>

        {/* Quote */}
        <div className="mt-7">
          <Quote
            size={32}
            strokeWidth={3}
            className="fill-indigo-100 text-indigo-300"
          />

          <p className="mt-3 max-w-[290px] text-[12px] leading-5 text-slate-600">
            Yashendra is a highly skilled developer with strong problem-solving
            abilities and great attention to detail. He consistently delivers
            high-quality solutions.
          </p>
        </div>

        {/* Person */}
        <div className="mt-7 flex items-center gap-3">
          {/* Temporary avatar */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-gradient-to-br from-indigo-100 to-fuchsia-100">
            <span className="text-xs font-bold text-indigo-600">YS</span>
          </div>

          <div>
            <p className="text-[11px] font-bold text-slate-900">Team Lead</p>

            <p className="mt-0.5 text-[10px] text-slate-500">LeewayHertz</p>
          </div>
        </div>
      </article>
    </SlideUp>
  );
}

function ConnectCard() {
  return (
    <SlideUp delay={0.15}>
      <article className="group h-full min-h-[330px] rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_2px_12px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
        {/* Header */}
        <div className="text-[10px] font-bold uppercase tracking-wide text-slate-900">
          LET'S CONNECT
        </div>

        {/* Main content */}
        <div className="mt-6">
          <h3 className="text-[14px] font-bold text-slate-900">
            Have a project in mind?
          </h3>

          <p className="mt-1.5 text-[12px] leading-5 text-slate-600">
            Let's build something amazing
            <br />
            together.
          </p>

          {/* CTA */}
          <a
            href="mailto:singhyashendra321@gmail.com"
            className="mt-4 flex h-10 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 text-[11px] font-semibold text-white shadow-sm transition-all duration-300 hover:bg-blue-700 hover:shadow-md"
          >
            Get In Touch
            <Send size={13} />
          </a>
        </div>

        {/* Contact details */}
        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-3">
            <Mail
              size={15}
              strokeWidth={1.8}
              className="shrink-0 text-slate-700"
            />

            <span className="truncate text-[10px] text-slate-700">
              singhyashendra321@gmail.com
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Smartphone
              size={15}
              strokeWidth={1.8}
              className="shrink-0 text-slate-700"
            />

            <span className="text-[10px] text-slate-700">+91-8004944879</span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin
              size={15}
              strokeWidth={1.8}
              className="shrink-0 text-slate-700"
            />

            <span className="text-[10px] text-slate-700">
              Kanpur Nagar, U.P., India
            </span>
          </div>
        </div>
      </article>
    </SlideUp>
  );
}

function Achievements() {
  return (
    <section
      id="achievements"
      className="border-b border-slate-100 bg-white py-8 sm:py-10"
    >
      <Container>
        <div className="grid gap-4 xl:grid-cols-4">
          {/* Achievements */}
          <AchievementCard achievements={achievementsData.achievements} />

          {/* GitHub */}
          <GitHubCard github={achievementsData.github} />

          {/* Testimonial */}
          <TestimonialCard />

          {/* Connect */}
          <ConnectCard />
        </div>
      </Container>
    </section>
  );
}

export default Achievements;
