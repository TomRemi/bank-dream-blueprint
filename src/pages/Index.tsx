import SSCHeroSection from "@/components/SSCHeroSection";
import AboutSSCSection from "@/components/AboutSSCSection";
import TiersBreakdownSection from "@/components/TiersBreakdownSection";
import SSCCourseFeatures from "@/components/SSCCourseFeatures";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import EligibilitySection from "@/components/EligibilitySection";
import UpcomingBatchSection from "@/components/UpcomingBatchSection";
import RegistrationForm from "@/components/RegistrationForm";
import FloatingCTA from "@/components/FloatingCTA";
import SSCFooter from "@/components/SSCFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <SSCHeroSection />
      
      {/* About SSC CGL */}
      <AboutSSCSection />
      
      {/* Tiers Breakdown */}
      <TiersBreakdownSection />
      
      {/* Course Features */}
      <SSCCourseFeatures />
      
      {/* Why Choose Us */}
      <WhyChooseUsSection />
      
      {/* Eligibility Criteria */}
      <EligibilitySection />
      
      {/* Upcoming Batch Details */}
      <UpcomingBatchSection />
      
      {/* Registration Form */}
      <RegistrationForm />
      
      {/* Footer */}
      <SSCFooter />
      
      {/* Floating CTA */}
      <FloatingCTA />
    </div>
  );
};

export default Index;
