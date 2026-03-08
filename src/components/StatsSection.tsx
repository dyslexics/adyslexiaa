import { motion } from "framer-motion";

const stats = [
  { value: "1 in 5", label: "People have dyslexia" },
  { value: "70-80%", label: "Of poor readers may have dyslexia" },
  { value: "50,000+", label: "Families supported annually" },
  { value: "48", label: "States with active programs" },
];

const StatsSection = () => {
  return (
    <section className="bg-primary py-16">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-extrabold text-primary-foreground md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-medium text-primary-foreground/75">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
