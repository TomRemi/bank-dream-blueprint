import HeroSection from "@/components/HeroSection";
import CourseHighlights from "@/components/CourseHighlights";
import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import CTAFooter from "@/components/CTAFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Course Highlights */}
      <CourseHighlights />
      
      {/* Testimonials */}
      <TestimonialSection />
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* CTA Footer */}
      <CTAFooter />
    </div>
  );
};

export default Index;
