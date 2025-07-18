import HeroSection from "@/components/HeroSection";
import CourseHighlights from "@/components/CourseHighlights";
import TestimonialSection from "@/components/TestimonialSection";
import NotificationSection from "@/components/NotificationSection";
import ExamPatternSection from "@/components/ExamPatternSection";
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
      
      {/* Notification Summary */}
      <NotificationSection />
      
      {/* Exam Pattern */}
      <ExamPatternSection />
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* CTA Footer */}
      <CTAFooter />
    </div>
  );
};

export default Index;
