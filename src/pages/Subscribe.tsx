import { Link } from "react-router-dom";
import FadeContent from "@/components/FadeContent";
import { Check, ArrowLeft } from "lucide-react";

const plans = [
  {
    name: "Free Plan",
    tagline: "For those ready to start a startup",
    price: "Free",
    features: [
      "WhatsApp Society of youth entrepreneurs & founders",
      "Everyday community support",
      "Monthly book review",
      "Basic startup resources",
    ],
    accent: "electric-teal",
    delay: 200,
  },
  {
    name: "Growing Founder Plan",
    tagline: "For founders running active startups",
    price: "$7",
    features: [
      "Private Discord Society",
      "Everyday community support",
      "Monthly book review",
      "Fitness plan & accountability partner",
      "Bi-monthly mental health discussions for founders",
      "Optional basic business analysis",
    ],
    accent: "lime-pop",
    popular: true,
    delay: 400,
  },
  {
    name: "Legendary Founder Plan",
    tagline: "For founders running businesses 5–10 years",
    price: "GHS 239",
    features: [
      "Private Discord Society",
      "Everyday community support",
      "Monthly book review",
      "Fitness plan & accountability partner/s",
      "Bi-monthly mental health discussions",
      "Monthly therapy sessions",
      "Youth founder mentorship",
      "Be part of the child education mission",
      "Bi-annual outdoor events",
      "Optional basic business analysis",
    ],
    accent: "vibrant-coral",
    delay: 600,
  },
  {
    name: "Grand Founder Plan",
    tagline: "For founders with 10+ years in the game",
    price: "GHS 499",
    features: [
      "Private Discord Society",
      "Everyday community support",
      "Monthly book club with peers",
      "Fitness plan & accountability Buddy",
      "Bi-monthly mental health discussions",
      "Weekly therapy sessions",
      "Become a mentor",
      "Be part of the child education mission",
      "Bi-annual outdoor events",
    ],
    accent: "golden-energy",
    delay: 800,
  },
];

const accentStyles: Record<string, { border: string; bg: string; text: string; badge: string }> = {
  "electric-teal": {
    border: "border-electric-teal/30",
    bg: "bg-electric-teal/10",
    text: "text-electric-teal",
    badge: "bg-electric-teal text-primary-foreground",
  },
  "lime-pop": {
    border: "border-lime-pop/30",
    bg: "bg-lime-pop/10",
    text: "text-lime-pop",
    badge: "bg-lime-pop text-primary-foreground",
  },
  "vibrant-coral": {
    border: "border-vibrant-coral/30",
    bg: "bg-vibrant-coral/10",
    text: "text-vibrant-coral",
    badge: "bg-vibrant-coral text-accent-foreground",
  },
  "golden-energy": {
    border: "border-golden-energy/30",
    bg: "bg-golden-energy/10",
    text: "text-golden-energy",
    badge: "bg-golden-energy text-primary-foreground",
  },
};

const comparisonRows: { feature: string; free: boolean | string; growing: boolean | string; legendary: boolean | string; grand: boolean | string }[] = [
  { feature: "WhatsApp Society", free: true, growing: true, legendary: true, grand: true },
  { feature: "Private Discord Society", free: false, growing: true, legendary: true, grand: true },
  { feature: "Everyday Community Support", free: true, growing: true, legendary: true, grand: true },
  { feature: "Monthly Book Review / Club", free: true, growing: true, legendary: true, grand: "Peer club" },
  { feature: "Basic Startup Resources", free: true, growing: false, legendary: false, grand: false },
  { feature: "Fitness Plan & Accountability", free: false, growing: true, legendary: true, grand: true },
  { feature: "Bi-monthly Mental Health Discussions", free: false, growing: true, legendary: true, grand: true },
  { feature: "Business Analysis", free: false, growing: "Optional", legendary: "Optional", grand: false },
  { feature: "Therapy Sessions", free: false, growing: false, legendary: "Monthly", grand: "Weekly" },
  { feature: "Youth Founder Mentorship", free: false, growing: false, legendary: true, grand: false },
  { feature: "Become a Mentor", free: false, growing: false, legendary: false, grand: true },
  { feature: "Child Education Mission", free: false, growing: false, legendary: true, grand: true },
  { feature: "Bi-annual Outdoor Events", free: false, growing: false, legendary: true, grand: true },
];

const Subscribe = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-warm-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_50%,hsl(174,72%,46%,0.4),transparent_60%)]" />
        <div className="container relative z-10 pt-8 pb-16 md:pb-24">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-secondary-foreground/70 hover:text-electric-teal transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <FadeContent blur duration={1000} easing="ease-out" initialOpacity={0}>
            <p className="text-electric-teal font-semibold text-sm tracking-widest uppercase mb-4">
              Choose Your Path
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-foreground leading-tight mb-4">
              Find Your <span className="italic text-electric-teal">Buddy</span> Plan
            </h1>
            <p className="text-secondary-foreground/70 text-lg max-w-2xl leading-relaxed">
              Every plan connects you with a community that cares about the whole you — mind, body, and purpose. Select the tier that matches your journey.
            </p>
          </FadeContent>
        </div>
      </div>

      {/* Plans Grid */}
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {plans.map((plan) => {
            const style = accentStyles[plan.accent];
            return (
              <FadeContent
                key={plan.name}
                blur
                duration={1000}
                easing="ease-out"
                initialOpacity={0}
                delay={plan.delay}
              >
                <div
                  className={`relative rounded-xl border ${style.border} bg-card p-6 h-full flex flex-col transition-all hover:shadow-lg hover:scale-[1.02]`}
                >
                  {plan.popular && (
                    <span className={`absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-bold ${style.badge}`}>
                      Most Popular
                    </span>
                  )}

                  <div className={`inline-flex w-fit px-3 py-1 rounded-full text-xs font-medium ${style.bg} ${style.text} mb-4`}>
                    {plan.tagline}
                  </div>

                  <h3 className="text-xl font-display font-bold text-foreground mb-1">
                    {plan.name}
                  </h3>
                  <p className={`text-2xl font-bold ${style.text} mb-6`}>
                    {plan.price}<span className="text-sm font-normal text-muted-foreground">{plan.price !== "Free" ? "/mo" : ""}</span>
                  </p>

                  <ul className="space-y-3 flex-1 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className={`w-4 h-4 mt-0.5 shrink-0 ${style.text}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://forms.gle/placeholder"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center px-6 py-3 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90 ${style.badge}`}
                  >
                    Subscribe To Join The Waitlist
                  </a>
                </div>
              </FadeContent>
            );
          })}
        </div>

        {/* Comparison Table */}
        <FadeContent blur duration={1000} easing="ease-out" initialOpacity={0} delay={900}>
          <div className="mt-20">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-8">
              Compare Plans at a Glance
            </h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-4 font-display font-semibold text-foreground min-w-[200px]">Feature</th>
                    <th className="p-4 text-center font-display font-semibold text-electric-teal min-w-[120px]">Free</th>
                    <th className="p-4 text-center font-display font-semibold text-lime-pop min-w-[120px]">Growing</th>
                    <th className="p-4 text-center font-display font-semibold text-vibrant-coral min-w-[120px]">Legendary</th>
                    <th className="p-4 text-center font-display font-semibold text-golden-energy min-w-[120px]">Grand</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? "bg-card" : "bg-muted/20"}>
                      <td className="p-4 text-foreground font-medium">{row.feature}</td>
                      {[row.free, row.growing, row.legendary, row.grand].map((val, j) => (
                        <td key={j} className="p-4 text-center">
                          {val === true ? (
                            <Check className="w-5 h-5 text-electric-teal mx-auto" />
                          ) : val === false ? (
                            <span className="text-muted-foreground/40">—</span>
                          ) : (
                            <span className="text-muted-foreground text-xs">{val}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeContent>

        {/* Onboarding notice */}
        <FadeContent blur duration={1000} easing="ease-out" initialOpacity={0} delay={1100}>
          <div className="mt-16 max-w-2xl mx-auto text-center">
            <div className="rounded-xl border border-border bg-card p-8">
              <h3 className="text-lg font-display font-bold text-foreground mb-3">
                What Happens After You Subscribe?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Within <strong className="text-foreground">24 hours</strong> of subscribing, our team will reach out to you for a personal onboarding call. During this call we'll confirm your subscription, understand your needs, and get you set up in your chosen society — <em>before any payment is required</em>.
              </p>
            </div>
          </div>
        </FadeContent>
      </div>
    </div>
  );
};

export default Subscribe;
