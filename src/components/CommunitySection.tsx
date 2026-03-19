import FadeContent from "./FadeContent";
import patternBg from "@/assets/pattern-bg.jpg";

const CommunitySection = () => {
  return (
    <section id="community" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src={patternBg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
            <p className="text-lime-pop font-semibold text-sm tracking-widest uppercase mb-3">The Buddy.com Way</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              Built on Trust,{" "}
              <span className="italic text-primary">Not Judgement</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              The founder journey in Africa is uniquely challenging. Buddy.com creates a safe space where you can be vulnerable — 
              sharing your wins, losses, fears, and dreams with people who truly understand.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Whether it's weekly therapy, daily community chats, or sweating it out with your fitness Buddy — 
              you're never alone on this journey.
            </p>
            <div className="mt-8">
              <p className="text-lime-pop font-semibold text-sm tracking-widest uppercase mb-4">Our Values</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Equality", color: "bg-electric-teal/10 text-electric-teal border-electric-teal/20" },
                  { label: "Empathy", color: "bg-vibrant-coral/10 text-vibrant-coral border-vibrant-coral/20" },
                  { label: "Respect", color: "bg-soft-violet/10 text-soft-violet border-soft-violet/20" },
                  { label: "Unity", color: "bg-lime-pop/10 text-lime-pop border-lime-pop/20" },
                  { label: "Spirit", color: "bg-golden-energy/10 text-golden-energy border-golden-energy/20" },
                  { label: "Purpose", color: "bg-primary/10 text-primary border-primary/20" },
                ].map((value) => (
                  <span key={value.label} className={`${value.color} font-semibold text-sm px-4 py-2 rounded-full border`}>
                    {value.label}
                  </span>
                ))}
              </div>
            </div>
          </FadeContent>

          <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} delay={200}>
            <div className="space-y-4">
              {[
                { emoji: "🧠", title: "Mental Health First", text: "Professional therapy sessions adapted for the unique pressures of building in Africa." },
                { emoji: "💪", title: "Physical Wellness", text: "Your Buddy keeps you accountable — home workouts, gym routines, and a dedicated coach." },
                { emoji: "🌍", title: "Pan-African Community", text: "Bi-annual outdoor events, tours and sightseeing trips connecting founders across the continent." },
                { emoji: "📚", title: "Growth & Learning", text: "Monthly book reviews, mentorship programs, and a mission to uplift child education in Africa." },
              ].map((item) => (
                <div key={item.title} className="bg-card rounded-xl p-5 border border-border flex gap-4 items-start hover:shadow-md transition-shadow">
                  <span className="text-2xl">{item.emoji}</span>
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeContent>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
