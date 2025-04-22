import HeroSection from "../Homepage/HeroSection";
import BenefitsSection from "../Homepage/BenefitsSection";
import HowItWorks from "../Homepage/HowItWorks";
import IndustryFocus from "../Homepage/IndustryFocus";
import ImpactSection from "../Homepage/ImpactSection";
import CallToAction from "../Homepage/CallToAction";
import Navbar from "../Navbar";
export default function HomePage() {

    
    return (
      <div className="p-6">
        <Navbar/>
        <div className="bg-gray-50 text-gray-800">
      <HeroSection productImage="/images/factory-hero.jpg" />
      <BenefitsSection />
      <HowItWorks />
      <IndustryFocus comparisonImage="/images/factory-comparison.jpg" />
      <ImpactSection chartImage="/images/impact-chart.png" testimonialImage="/images/supervisor.jpg" />
      <CallToAction ctaImage="/images/factory-cta.jpg" />
    </div>
      </div>
    );
  }
  