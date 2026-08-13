import PageLayout from "../../layout/PageLayout";
import Container from "../../ui/Container";

import SkillsPageHeader from "./SkillsPageHeader";
import SkillsGrid from "./SkillsGrid";

function SkillsPage() {
  return (
    <PageLayout>
      <main className="min-h-screen bg-transparent">
        {/* Page Header */}
        <section className="border-b border-slate-100/70 bg-white/55 py-16 backdrop-blur-[2px] sm:py-20 lg:py-24">
          <Container>
            <SkillsPageHeader />
          </Container>
        </section>

        {/* Skills */}
        <section className="bg-transparent py-16 sm:py-20 lg:py-24">
          <Container>
            <SkillsGrid />
          </Container>
        </section>
      </main>
    </PageLayout>
  );
}

export default SkillsPage;
