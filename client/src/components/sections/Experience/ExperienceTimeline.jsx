import ExperienceTimelineItem from "./ExperienceTimelineItem";
import { experienceData } from "../../../data/experience";

function ExperienceTimeline() {
  return (
    <div className="relative">
      {/* Vertical timeline */}
      <div
        aria-hidden="true"
        className="absolute left-[189px] top-6 hidden h-[calc(100%-48px)] w-px bg-gradient-to-b from-indigo-200 via-slate-200 to-transparent lg:block"
      />

      <div className="space-y-8">
        {experienceData.map((experience, index) => (
          <div key={experience.id} className="relative">
            {/* Timeline node */}
            <div
              aria-hidden="true"
              className="absolute left-[182px] top-8 hidden h-4 w-4 rounded-full border-4 border-white bg-indigo-500 shadow-sm ring-1 ring-indigo-100 lg:block"
            />

            <ExperienceTimelineItem experience={experience} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceTimeline;
