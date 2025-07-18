import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Award, BookOpen } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in">
          <Badge variant="secondary" className="bg-accent text-accent-foreground font-medium px-4 py-2">
            <Users className="w-4 h-4 mr-2" />
            10,000+ Students Trained
          </Badge>
          <Badge variant="secondary" className="bg-accent text-accent-foreground font-medium px-4 py-2">
            <Award className="w-4 h-4 mr-2" />
            Best Faculty in South India
          </Badge>
          <Badge variant="secondary" className="bg-accent text-accent-foreground font-medium px-4 py-2">
            <BookOpen className="w-4 h-4 mr-2" />
            Expert-Led Training
          </Badge>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins mb-6 leading-tight animate-fade-in">
          Crack SBI PO with India's Leading Banking Academy
        </h1>
        
        {/* Subheading */}
        <p className="text-xl sm:text-2xl font-poppins font-light mb-8 opacity-90 animate-fade-in">
          Join our expert-led course and take the first step toward your dream banking career.
        </p>
        
        {/* CTA Button */}
        <div className="animate-fade-in">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-poppins font-bold text-lg px-8 py-4 rounded-[10px] shadow-hover transition-all duration-300 hover:scale-105 hover:shadow-2xl uppercase tracking-wide"
          >
            Enroll Now
          </Button>
        </div>
        
        {/* Secondary Info */}
        <p className="mt-6 text-sm opacity-75 font-poppins">
          Limited seats available. Start your journey today!
        </p>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;