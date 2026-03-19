import FadeContent from "./FadeContent";
import {
  Shield, Heart, Dumbbell, Users, BookOpen,
  Compass, GraduationCap, Baby, MessageCircle, Calendar
} from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Private Discord Society",
    description: "Connect with fellow founders in a secure, privacy-first community. No intrusion, just genuine connections.",
    color: "text-primary",
  },
  {
    icon: MessageCircle,
    title: "Everyday Community Support",
    description: "Share your painful, regretful and joyful moments — business or personal. No judging, only support and honest advice.",
    color: "text-earth-green",
  },
  {
    icon: Heart,
    title: "Weekly Therapy Sessions",
    description: "Choose single, member group, or family sessions tailored to your needs. Professional care, your way.",
    color: "text-terracotta",
  },
  {
    icon: Dumbbell,
    title: "Fitness & Accountability",
    description: "Get a home workout/gym accountability partner (your Buddy!) plus a dedicated coach with personalised routines.",
    color: "text-primary",
  },
  {
    icon: Calendar,
    title: "Bi-Annual Outdoor Events",
    description: "Family games, competitions, travel, tours & sightseeing across Africa — twice a year, unforgettable experiences.",
    color: "text-golden",
  },
  {
    icon: GraduationCap,
    title: "Youth Founder Mentorship",
    description: "Youth founders get guidance from experienced leaders. Experienced founders build Africa's next generation of leaders.",
    color: "text-earth-green",
  },
  {
    icon: BookOpen,
    title: "Monthly Book Club",
    description: "Monthly book reviews and discussions designed to increase self-value and sharpen your entrepreneurial mind.",
    color: "text-terracotta",
  },
  {
    icon: Baby,
    title: "Child Education Mission",
    description: "Be part of a larger mission to improve child education & development across Africa. Impact beyond business.",
    color: "text-primary",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 md:py-32 bg-cream-gradient">
      <div className="container">
        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">What You Get</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
              Everything a Founder <span className="italic text-primary">Needs</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Buddy.com wraps mental wellness, physical health, community, and purpose into one powerful membership.
            </p>
          </div>
        </FadeContent>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <FadeContent key={b.title} blur={true} duration={800} easing="ease-out" initialOpacity={0} delay={i * 100}>
              <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group h-full">
                <div className={`${b.color} mb-4`}>
                  <b.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
              </div>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
