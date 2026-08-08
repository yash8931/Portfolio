import Container from "../../ui/Container";
import AboutIntro from "./AboutIntro";
import JourneyCard from "./JourneyCard";
import { profileData } from "../../../data/profile";

function About() {
  return (
    <section
      id="about"
      className="border-b border-slate-100 bg-white py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12">
          {/* Left content */}
          <AboutIntro data={profileData.about} />

          {/* Right journey card */}
          <JourneyCard
            data={{
              journey: profileData.journey,
              whatIDo: profileData.whatIDo,
              goals: profileData.goals,
              stats: profileData.stats,
            }}
          />
        </div>
      </Container>
    </section>
  );
}

export default About;
