import PageLayout from "../../layout/PageLayout";
import Container from "../../ui/Container";

import ExperiencePageHeader from "./ExperiencePageHeader";
import ExperienceTimeline from "./ExperienceTimeline";

function ExperiencePage() {
  return (
    <PageLayout>
      <main className="min-h-screen bg-slate-50">
        {/* Page Header */}
        <section className="border-b border-slate-100 bg-white pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
          <Container>
            <ExperiencePageHeader />
          </Container>
        </section>

        {/* Experience Timeline */}
        <section className="py-16 sm:py-20 lg:py-24">
          <Container>
            <ExperienceTimeline />
          </Container>
        </section>
      </main>
    </PageLayout>
  );
}

export default ExperiencePage;
