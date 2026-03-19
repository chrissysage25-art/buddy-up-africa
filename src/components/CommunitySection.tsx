import { motion } from "framer-motion";
import patternBg from "@/assets/pattern-bg.jpg";

const CommunitySection = () => {
  return (
    <section id="community" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src={patternBg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-earth-green font-semibold text-sm tracking-widest uppercase mb-3">The Buddy Way</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              Built on Trust,{" "}
              <span className="italic text-primary">Not Judgement</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              The founder journey in Africa is uniquely challenging. Buddy creates a safe space where you can be vulnerable — 
              sharing your wins, losses, fears, and dreams with people who truly understand.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Whether it's weekly therapy, daily community chats, or sweating it out with your fitness Buddy — 
              you're never alone on this journey.
            </p>
            <div className="flex gap-8">
              {[
                { num: "100+", label: "Active Founders" },
                { num: "12", label: "African Countries" },
                { num: "52", label: "Weekly Sessions/yr" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-display font-bold text-primary">{stat.num}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
