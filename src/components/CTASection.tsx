import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section id="join" className="py-24 md:py-32 bg-warm-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_50%,hsl(38,90%,58%,0.4),transparent_60%)]" />
      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-golden font-semibold text-sm tracking-widest uppercase mb-4">Ready to Start?</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-6 leading-tight">
            Every Great Founder Deserves a <span className="italic text-golden">Buddy</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 leading-relaxed">
            Join a community that cares about the whole you — mind, body, and purpose.
            Your journey doesn't have to be lonely.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="bg-golden text-accent-foreground px-10 py-4 rounded-lg font-semibold text-base hover:opacity-90 transition-opacity"
            >
              Join the Waitlist
            </a>
            <a
              href="#"
              className="border border-primary-foreground/30 text-primary-foreground px-10 py-4 rounded-lg font-semibold text-base hover:bg-primary-foreground/10 transition-colors"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
