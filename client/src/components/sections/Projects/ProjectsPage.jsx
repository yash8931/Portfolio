import PageLayout from "../../layout/PageLayout";
import Container from "../../ui/Container";

import ProjectsPageHeader from "./ProjectsPageHeader";
import ProjectsGrid from "./ProjectsGrid";

function ProjectsPage() {
  return (
    <PageLayout>
      <main className="min-h-screen bg-slate-50">
        {/* Page Header */}
        <section className="border-b border-slate-100 bg-white pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
          <Container>
            <ProjectsPageHeader />
          </Container>
        </section>

        {/* Projects */}
        <section className="py-16 sm:py-20 lg:py-24">
          <Container>
            <ProjectsGrid />
          </Container>
        </section>
      </main>
    </PageLayout>
  );
}

export default ProjectsPage;
