import adaLogo from "@/assets/ada-logo.webp";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <BookOpen className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-foreground">ADA</span>
            </div>
            <p className="text-sm text-muted-foreground">
              The American Dyslexia Association empowers learners through
              research, education, and advocacy.
            </p>
          </div>

          {[
            {
              title: "Resources",
              links: ["What is Dyslexia?", "Screening Tools", "For Educators", "For Parents"],
            },
            {
              title: "Programs",
              links: ["Literacy Workshops", "Summer Camps", "Tutor Training", "Research Grants"],
            },
            {
              title: "Organization",
              links: ["About Us", "Our Team", "Careers", "Contact"],
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
