import BuddyNavbar from "@/components/BuddyNavbar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import CommunitySection from "@/components/CommunitySection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <BuddyNavbar />
      <HeroSection />
      <BenefitsSection />
      <CommunitySection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default Index;
