import Container from "../../ui/Container";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-slate-100 py-16 sm:py-20 lg:py-24"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-indigo-100/40 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-50/60 blur-3xl"
      />

      <Container>
        <div className="relative grid items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-8">
          <HeroContent />

          <div className="order-first lg:order-last">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;