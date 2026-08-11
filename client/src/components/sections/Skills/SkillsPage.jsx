import PageLayout from "../../layout/PageLayout";
import Container from "../../ui/Container";

import SkillsPageHeader from "./SkillsPageHeader";
import SkillsGrid from "./SkillsGrid";

function SkillsPage() {
  return (
    <PageLayout>
      <main className="min-h-screen bg-slate-50">
        {/* Page Header */}
        <section className="border-b border-slate-100 bg-white pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
          <Container>
            <SkillsPageHeader />
          </Container>
        </section>

        {/* Skills */}
        <section className="py-16 sm:py-20 lg:py-24">
          <Container>
            <SkillsGrid />
          </Container>
        </section>
      </main>
    </PageLayout>
  );
}

export default SkillsPage;
