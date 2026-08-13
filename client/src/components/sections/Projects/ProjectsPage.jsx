import PageLayout from "../../layout/PageLayout";
import Container from "../../ui/Container";

import ProjectsPageHeader from "./ProjectsPageHeader";
import ProjectsGrid from "./ProjectsGrid";

function ProjectsPage() {
  return (
    <PageLayout>
      <main className="min-h-screen bg-transparent">
        {/* Page Header */}
        <section className="border-b border-slate-100/70 bg-white/55 py-16 backdrop-blur-[2px] sm:py-20 lg:py-24">
          <Container>
            <ProjectsPageHeader />
          </Container>
        </section>

        {/* Projects */}
        <section className="bg-transparent py-16 sm:py-20 lg:py-24">
          <Container>
            <ProjectsGrid />
          </Container>
        </section>
      </main>
    </PageLayout>
  );
}

export default ProjectsPage;
