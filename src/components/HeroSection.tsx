import { motion } from "framer-motion";
import heroImg from "@/assets/hero-community.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="African founders community" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-warm-gradient opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/90 via-transparent to-warm-brown/40" />
      </div>

      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-golden font-medium text-sm md:text-base tracking-widest uppercase mb-4"
          >
            For Founders & Entrepreneurs in Africa
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6"
          >
            Your Mind. Your Body.{" "}
            <span className="text-golden italic">Your Buddy.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mb-8 font-body leading-relaxed"
          >
            A holistic wellness community built for African founders — combining mental health support, physical fitness, mentorship, and deep community bonds.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#join"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-semibold hover:opacity-90 transition-opacity text-center"
            >
              Become a Buddy
            </a>
            <a
              href="#benefits"
              className="border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg text-base font-semibold hover:bg-primary-foreground/10 transition-colors text-center"
            >
              Explore Benefits
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
