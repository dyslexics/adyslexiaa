import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const points = [
  "Dyslexia is neurological in origin — not a sign of low intelligence",
  "Early screening and intervention are the most effective approaches",
  "Structured literacy programs can help every learner succeed",
  "Dyslexic thinkers often excel in creativity and problem-solving",
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
            What is Dyslexia?
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
            Dyslexia is a specific learning disability that affects reading,
            writing, and spelling. It is the most common learning disability,
            affecting up to 20% of the population. With the right support,
            individuals with dyslexia can achieve extraordinary things.
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
            Signs of Dyslexia
          </h3>
          <div className="space-y-4">
            {[
              { age: "Preschool", signs: "Difficulty learning nursery rhymes, recognizing letters, or learning the alphabet" },
              { age: "Elementary", signs: "Slow reading speed, trouble sounding out new words, avoiding reading aloud" },
              { age: "Teens & Adults", signs: "Poor spelling, difficulty summarizing, slow reading of unfamiliar material" },
            ].map((item) => (
              <div key={item.age} className="rounded-lg bg-secondary p-4">
                <div className="mb-1 text-sm font-semibold text-primary">
                  {item.age}
                </div>
                <p className="text-sm text-muted-foreground">{item.signs}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
