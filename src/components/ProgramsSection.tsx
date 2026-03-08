import { motion } from "framer-motion";
import { Award, BookOpen, Globe, GraduationCap, Users, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  {
    icon: Award,
    title: "ADA Accredited",
    description:
      "Meets rigorous standards in research-based content, practical applicability, and professional ethics.",
  },
  {
    icon: BookOpen,
    title: "AFS Method & Test",
    description:
      "Includes the standardized AFS Dyslexia Test and the structured AFS Method for attention, perception, and literacy.",
  },
  {
    icon: Globe,
    title: "Internationally Recognized",
    description:
      "Join educators from 65+ countries with a certification respected and accepted worldwide.",
  },
  {
    icon: Users,
    title: "Flexible Online Learning",
    description:
      "Complete at your own pace from anywhere, with ongoing support and guidance for busy educators.",
  },
];

const audience = [
  "Classroom teachers",
  "Special education professionals",
  "Learning specialists & tutors",
  "Psychologists & school counselors",
  "Homeschool educators",
  "Anyone passionate about supporting learners with dyslexia",
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="bg-muted/40 py-20 md:py-28">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Now Enrolling
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            ADA-Accredited Dyslexia Trainer Certification
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            The internationally recognized professional training for educators,
            specialists, and tutors who want to make a meaningful difference in the
            lives of learners with dyslexia — relaunched stronger than ever.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6 shadow-card"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-card-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Who Should Enroll + CTA */}
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-5 text-2xl font-bold text-foreground">
              Who Should Enroll?
            </h3>
            <ul className="space-y-3">
              {audience.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-card p-8 shadow-card"
          >
            <h3 className="mb-3 text-xl font-bold text-card-foreground">
              Free Preview Lesson Available
            </h3>
            <p className="mb-6 text-muted-foreground">
              Experience the program firsthand — Lesson 1 alone gives educators
              insights they can begin using immediately. No commitment required.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <a
                  href="https://www.dyslexiacertificate.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Start Free Lesson
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://www.dyslexiacertificate.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enroll Now
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
