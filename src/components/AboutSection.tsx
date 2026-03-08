import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const points = [
  "Dyslexia is neurological in origin — not a sign of low intelligence",
  "The AFS Method addresses attention, sensory functions, and symptoms together",
  "Individualized training plans lead to lasting improvement",
  "Dyslexic thinkers often excel in creativity, problem-solving, and big-picture thinking",
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-secondary py-20 md:py-28">
      <div className="container grid items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
            Why the AFS Method Works
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
            Unlike traditional approaches that focus only on reading drills, the
            AFS Method recognizes that dyslexia involves differences in attention
            and sensory perception. By training all three areas — Attention,
            Function, and Symptom — learners make deeper, more sustainable progress.
          </p>
          <ul className="space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl bg-card p-8 shadow-card"
        >
          <h3 className="mb-4 text-xl font-semibold text-card-foreground">
            Who Benefits from AFS?
          </h3>
          <div className="space-y-4">
            {[
              { group: "Children", detail: "Early intervention with AFS training helps children build strong foundations in reading, writing, and spelling" },
              { group: "Teens & Adults", detail: "It's never too late — the AFS Method helps older learners close gaps and gain confidence in literacy" },
              { group: "Teachers & Parents", detail: "AFS training and certification programs give educators and families the tools to support dyslexic learners every day" },
            ].map((item) => (
              <div key={item.group} className="rounded-lg bg-secondary p-4">
                <div className="mb-1 text-sm font-semibold text-primary">
                  {item.group}
                </div>
                <p className="text-sm text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
