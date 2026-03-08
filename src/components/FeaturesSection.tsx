import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Heart, Users } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Understanding Dyslexia",
    description:
      "Learn the science behind dyslexia, its signs at different ages, and how early identification changes lives.",
  },
  {
    icon: GraduationCap,
    title: "Educational Resources",
    description:
      "Access evidence-based tools, lesson plans, and strategies designed for educators and parents alike.",
  },
  {
    icon: Users,
    title: "Community Support",
    description:
      "Connect with families, mentors, and professionals who understand the dyslexia journey.",
  },
  {
    icon: Heart,
    title: "Advocacy & Research",
    description:
      "We champion policy change and fund groundbreaking research to improve outcomes for all learners.",
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
            How We Make a Difference
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            From classrooms to Capitol Hill, we work to ensure that dyslexia is
            understood, identified, and addressed.
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
