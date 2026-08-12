import Container from "../ui/Container";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/yash8931",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yashendra-singh8931/",
  },
  {
    label: "Email",
    href: "mailto:singhyashendra321@gmail.com",
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <Container>
        <div className="grid grid-cols-1 items-center gap-4 py-4 sm:grid-cols-3 sm:gap-0">
          {/* Left */}
          <div className="text-center sm:text-left">
            <p className="font-semibold text-slate-900">Yashendra Singh</p>

            <p className="mt-1 text-xs text-slate-500">
              Building intelligent and scalable digital experiences.
            </p>
          </div>

          {/* Center */}
          <div className="text-center">
            <p className="text-xs text-slate-500">
              © {currentYear} Yashendra Singh. All rights reserved.
            </p>
          </div>

          {/* Right */}
          <div className="flex items-center justify-center gap-2 sm:justify-end">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 transition-colors hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
