import FadeContent from "./FadeContent";
import heroImg from "@/assets/hero-community.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <img src={heroImg} alt="African founders community" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-warm-gradient opacity-85" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/95 via-transparent to-deep-navy/50" />
      </div>

      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-3xl">
          <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} delay={200}>
            <p className="text-electric-teal font-medium text-sm md:text-base tracking-widest uppercase mb-4">
              For Founders & Entrepreneurs in Africa
            </p>
          </FadeContent>
          <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} delay={400}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-secondary-foreground leading-tight mb-6">
              Your Mind. Your Body.{" "}
              <span className="text-gradient-warm italic">Your Buddy.</span>
            </h1>
          </FadeContent>
          <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} delay={600}>
            <p className="text-lg md:text-xl text-secondary-foreground/75 max-w-xl mb-8 font-body leading-relaxed">
              We help you access unique international networks and mentorships through discussions and memorable moments. Welcome to Buddy.com
            </p>
          </FadeContent>
          <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} delay={800}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/subscribe"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-semibold hover:opacity-90 transition-opacity text-center"
              >
                Join the Waitlist
              </a>
              <a
                href="#benefits"
                className="border border-secondary-foreground/30 text-secondary-foreground px-8 py-4 rounded-lg text-base font-semibold hover:bg-secondary-foreground/10 transition-colors text-center"
              >
                Explore Benefits
              </a>
            </div>
          </FadeContent>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
