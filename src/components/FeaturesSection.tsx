import { motion } from "framer-motion";
import { Eye, Puzzle, BookOpen, GraduationCap } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Attention Training",
    description:
      "The first pillar of AFS targets focused attention — training the ability to concentrate on letters, words, and numbers without distraction.",
  },
  {
    icon: Puzzle,
    title: "Function Training",
    description:
      "The second pillar strengthens sensory functions like visual and auditory perception, spatial orientation, and memory that are essential for reading and writing.",
  },
  {
    icon: BookOpen,
    title: "Symptom Training",
    description:
      "The third pillar addresses the specific reading, writing, and spelling errors directly — building fluency and confidence step by step.",
  },
  {
    icon: GraduationCap,
    title: "For Teachers & Parents",
    description:
      "The AFS Method equips educators and parents with practical, evidence-based tools they can use at home and in the classroom every day.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="resources" className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            The AFS Method — Three Pillars of Success
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            The Attention–Function–Symptom Method is a holistic, individualized
            approach that addresses the root causes of dyslexia — not just the symptoms.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-xl border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
