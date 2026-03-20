import FadeContent from "./FadeContent";

const CTASection = () => {
  return (
    <section id="join" className="py-24 md:py-32 bg-warm-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_50%,hsl(174,72%,46%,0.4),transparent_60%)]" />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_70%_80%,hsl(350,85%,62%,0.3),transparent_50%)]" />
      <div className="container relative z-10 text-center">
        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
          <div className="max-w-2xl mx-auto">
            <p className="text-electric-teal font-semibold text-sm tracking-widest uppercase mb-4">Ready to Start?</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-secondary-foreground mb-6 leading-tight">
              Every Great Founder Deserves a <span className="italic text-electric-teal">Buddy</span>
            </h2>
            <p className="text-secondary-foreground/75 text-lg mb-10 leading-relaxed">
              Join a community that cares about the whole you — mind, body, and purpose.
              Your journey doesn't have to be lonely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/subscribe"
                className="bg-primary text-primary-foreground px-10 py-4 rounded-lg font-semibold text-base hover:opacity-90 transition-opacity"
              >
                Join the Waitlist
              </a>
              <a
                href="#"
                className="border border-secondary-foreground/30 text-secondary-foreground px-10 py-4 rounded-lg font-semibold text-base hover:bg-secondary-foreground/10 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </FadeContent>
      </div>
    </section>
  );
};

export default CTASection;
