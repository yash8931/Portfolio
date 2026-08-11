import PageLayout from "../../layout/PageLayout";
import Container from "../../ui/Container";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

function Contact() {
  return (
    <PageLayout>
      <section className="min-h-[calc(100vh-68px)] bg-slate-50 py-16 sm:py-20">
        <Container>
          {/* Header */}
          <div className="mb-10 max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600">
              ✦ LET'S CONNECT
            </span>

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Let's build something
              <span className="block text-indigo-600">
                meaningful together.
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
              Have a project in mind, want to collaborate, or simply want to say
              hello? I'd love to hear from you.
            </p>
          </div>

          {/* Contact Content */}
          <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
            <ContactInfo />
            <ContactForm />
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}

export default Contact;
