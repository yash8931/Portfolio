import Navbar from "./Navbar";
import Footer from "./Footer";
import InteractiveBackground from "../ui/InteractiveBackground";

function PageLayout({ children }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-50 text-[var(--color-text-primary)]">
      <InteractiveBackground />

      <div className="relative z-10">
        <Navbar />

        <main>{children}</main>

        <Footer />
      </div>
    </div>
  );
}

export default PageLayout;
