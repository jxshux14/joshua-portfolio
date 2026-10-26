import TransitionLink from "./TransitionLink";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <p className="footer-name">Joshua Pangilinan</p>
          <p className="footer-role">Web Developer</p>
          <p className="footer-tagline">
            Building responsive, functional, and user-friendly web
            experiences.
          </p>
        </div>

        <div className="footer-links">
          <span className="footer-heading">Quick links</span>
          <nav>
            {links.map((l) => (
              <TransitionLink key={l.href} href={l.href} label={l.label}>
                {l.label}
              </TransitionLink>
            ))}
          </nav>
        </div>

        <div className="footer-connect">
          <span className="footer-heading">Let's connect</span>
          <div className="footer-icons">
            <a
              href="https://github.com/jxshux14"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.4 11.4 0 0 0-6 0C6.9 2.8 5.9 3.1 5.9 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.5 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a href="mailto:joshpangilinan14@gmail.com" aria-label="Email">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="m4 7 8 6 8-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/joshua-pangilinan-023842383/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.5 10.5v6M7.5 7.5v.01M11.5 16.5v-3.7c0-1.5 1-2.3 2.3-2.3 1.2 0 2.2.8 2.2 2.3v3.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Joshua Pangilinan. All rights reserved.</span>
      </div>
    </footer>
  );
}