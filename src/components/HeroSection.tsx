import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-illustration.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-secondary py-20 md:py-28">
      <div className="container grid items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            The AFS Method — 25 Years of Success
          </span>
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            A Different Approach to{" "}
            <span className="text-primary">Help Dyslexic Learners</span>
          </h1>
          <p className="mb-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Teachers, parents, and experts have been working with the
            Attention–Function–Symptom Method successfully worldwide for over
            25 years. Discover how the AFS Method can unlock every learner's potential.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg">
              Discover the AFS Method <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Get Started Today
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-2xl shadow-card">
            <img
              src={heroImage}
              alt="Diverse group of children reading together in a library"
              className="w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
