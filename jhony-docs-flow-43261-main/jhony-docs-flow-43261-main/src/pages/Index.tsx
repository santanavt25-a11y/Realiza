import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import SolutionSection from "@/components/SolutionSection";
import DemoSection from "@/components/DemoSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialSection from "@/components/TestimonialSection";
import OfferSection from "@/components/OfferSection";
import TrustSection from "@/components/TrustSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingPapers from "@/components/FloatingPapers";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <FloatingPapers />
      <HeroSection />
      <PainSection />
      <SolutionSection />
      <DemoSection />
      <BenefitsSection />
      <TestimonialSection />
      <OfferSection />
      <TrustSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
