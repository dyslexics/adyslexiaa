import adaLogo from "@/assets/ada-logo.webp";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <img src={adaLogo} alt="American Dyslexia Association" className="h-9 w-auto" />
            </div>
            <p className="text-sm text-muted-foreground">
              The American Dyslexia Association helps dyslexic learners thrive
              through the proven AFS Method — used by teachers, parents, and
              experts worldwide for 25+ years.
            </p>
          </div>

          {[
            {
              title: "AFS Method",
              links: ["What is AFS?", "Attention Training", "Function Training", "Symptom Training"],
            },
            {
              title: "Programs",
              links: ["AFS Certification", "Workshops", "For Teachers", "For Parents"],
            },
            {
              title: "Organization",
              links: ["About ADA", "Our Experts", "Research", "Contact"],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="mb-3 text-sm font-semibold text-foreground">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} American Dyslexia Association. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
