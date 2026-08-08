import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";

function ComponentTest() {
  return (
    <main className="min-h-screen py-20">
      <Container>
        <SectionHeading
          eyebrow="Design System"
          title="Reusable components"
          description="These components will be reused throughout the portfolio."
          align="center"
        />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Badge>Agentic AI</Badge>

          <Badge variant="neutral">Full Stack</Badge>

          <Badge variant="accent">MERN</Badge>

          <Button>Primary Button</Button>

          <Button variant="secondary">
            Secondary Button
          </Button>

          <Button variant="ghost">
            Ghost Button
          </Button>
        </div>
      </Container>
    </main>
  );
}

export default ComponentTest;