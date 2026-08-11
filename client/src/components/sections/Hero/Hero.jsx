import Container from "../../ui/Container";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-slate-100 py-10 sm:py-16 lg:py-24"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-72 w-72 rounded-full bg-indigo-100/40 blur-3xl sm:h-96 sm:w-96"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-10 h-80 w-80 rounded-full bg-blue-50/60 blur-3xl sm:right-0 sm:top-0 sm:h-125 sm:w-125"
      />

      <Container>
        <div className="relative grid items-center gap-10 sm:gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-8">
          <HeroContent />

          <div className="order-first w-full lg:order-last">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
