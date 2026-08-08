import Container from "../ui/Container";

const socialLinks = [
  {
    label: "GitHub",
    href: "#",
  },
  {
    label: "LinkedIn",
    href: "#",
  },
  {
    label: "Email",
    href: "mailto:your-email@example.com",
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container>
        <div className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-slate-900">
              Yashendra Singh
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Building intelligent and scalable digital experiences.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600 transition-colors hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-100 py-5 text-center text-xs text-slate-500">
          © {currentYear} Yashendra Singh. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;