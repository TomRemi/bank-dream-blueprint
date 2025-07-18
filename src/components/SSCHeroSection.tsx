import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Play, Users, Trophy, Clock } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const SSCHeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in">
          <Badge variant="secondary" className="bg-accent text-accent-foreground border-0 px-4 py-2">
            <Users className="w-4 h-4 mr-2" />
            20,000+ Students Trained
          </Badge>
          <Badge variant="secondary" className="bg-accent text-accent-foreground border-0 px-4 py-2">
            <Trophy className="w-4 h-4 mr-2" />
            India's #1 SSC Academy
          </Badge>
          <Badge variant="secondary" className="bg-accent text-accent-foreground border-0 px-4 py-2">
            <Clock className="w-4 h-4 mr-2" />
            15+ Years Experience
          </Badge>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up font-poppins">
          Join India's #1 SSC CGL 
          <span className="block text-accent">Coaching Program</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-up font-poppins font-light">
          Tier I to Tier IV – Expert-Led Training with Free Demo Sessions
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-poppins font-semibold">
            <Play className="w-5 h-5 mr-2" />
            Join Free Demo
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary font-poppins font-semibold">
            <Download className="w-5 h-5 mr-2" />
            Download Syllabus PDF
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SSCHeroSection;