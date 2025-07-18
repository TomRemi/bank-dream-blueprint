import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, X } from "lucide-react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsVisible(scrollTop > 300); // Show after scrolling 300px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in the SSC CGL course. Can you please provide more details?");
    const phoneNumber = "919876543210"; // Replace with actual WhatsApp number
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+919876543210', '_self');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isExpanded && (
        <div className="mb-4 bg-card border border-border rounded-lg shadow-lg p-4 max-w-xs animate-fade-in">
          <div className="flex justify-between items-start mb-3">
            <h4 className="font-semibold text-foreground font-poppins text-sm">
              Need Help?
            </h4>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(false)}
              className="h-6 w-6 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-muted-foreground text-xs mb-3 font-poppins">
            Get instant answers about our SSC CGL course
          </p>
          <div className="space-y-2">
            <Button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-poppins text-xs"
              size="sm"
            >
              <MessageCircle className="w-3 h-3 mr-2" />
              WhatsApp Us
            </Button>
            <Button
              onClick={handleCallClick}
              variant="outline"
              className="w-full font-poppins text-xs"
              size="sm"
            >
              <Phone className="w-3 h-3 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-3">
        {/* Main CTA Button */}
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:scale-110 transition-all duration-300"
          size="sm"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>

        {/* WhatsApp Button */}
        <Button
          onClick={handleWhatsAppClick}
          className="h-12 w-12 rounded-full bg-green-600 hover:bg-green-700 shadow-lg hover:scale-110 transition-all duration-300"
          size="sm"
        >
          <MessageCircle className="h-5 w-5" />
        </Button>
      </div>

      {/* Pulse animation for attention */}
      <div className="absolute inset-0 rounded-full bg-primary opacity-30 animate-ping"></div>
    </div>
  );
};

export default FloatingCTA;