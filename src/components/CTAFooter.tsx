import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Phone, Mail } from "lucide-react";

const CTAFooter = () => {
  return (
    <footer className="bg-footer text-footer-foreground">
      {/* Main CTA Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency Badge */}
          <Badge variant="secondary" className="bg-accent text-accent-foreground font-medium px-4 py-2 mb-6">
            <Clock className="w-4 h-4 mr-2" />
            Limited Seats Available
          </Badge>
          
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins mb-6 leading-tight">
            Ready to Start Your SBI PO Journey?
          </h2>
          
          {/* Subheading */}
          <p className="text-lg sm:text-xl font-poppins font-light mb-8 opacity-90 max-w-2xl mx-auto">
            Limited seats available. Enroll now and get early-bird discounts. Take the first step toward your dream banking career today!
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-poppins font-bold text-lg px-8 py-4 rounded-[10px] shadow-hover transition-all duration-300 hover:scale-105 uppercase tracking-wide w-full sm:w-auto"
            >
              Join Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-footer-foreground text-footer-foreground hover:bg-footer-foreground hover:text-footer font-poppins font-semibold text-lg px-8 py-4 rounded-[10px] transition-all duration-300 w-full sm:w-auto"
            >
              Download Brochure
            </Button>
          </div>
          
          {/* Special Offer */}
          <div className="inline-block bg-primary/20 border-2 border-primary rounded-lg px-6 py-3">
            <p className="text-primary font-poppins font-semibold">
              🎉 Early Bird Offer: Save up to 30% - Ends Soon!
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="border-t border-footer-foreground/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Academy Info */}
            <div>
              <h3 className="text-xl font-bold font-poppins mb-4">
                Shankar Banking Academy
              </h3>
              <p className="text-footer-foreground/80 font-poppins leading-relaxed">
                India's leading banking exam preparation institute with 15+ years of excellence in training.
              </p>
            </div>

            {/* Contact Details */}
            <div>
              <h4 className="text-lg font-semibold font-poppins mb-4">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-accent" />
                  <span className="text-footer-foreground/80 font-poppins">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-accent" />
                  <span className="text-footer-foreground/80 font-poppins">info@shankarbanking.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-accent mt-1" />
                  <span className="text-footer-foreground/80 font-poppins">
                    123 Banking Street, Chennai, Tamil Nadu - 600001
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold font-poppins mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#course" className="text-footer-foreground/80 hover:text-accent font-poppins transition-colors duration-300">Course Details</a></li>
                <li><a href="#faculty" className="text-footer-foreground/80 hover:text-accent font-poppins transition-colors duration-300">Our Faculty</a></li>
                <li><a href="#testimonials" className="text-footer-foreground/80 hover:text-accent font-poppins transition-colors duration-300">Success Stories</a></li>
                <li><a href="#contact" className="text-footer-foreground/80 hover:text-accent font-poppins transition-colors duration-300">Contact</a></li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold font-poppins mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-accent/20 hover:bg-accent rounded-full flex items-center justify-center transition-colors duration-300">
                  <span className="text-accent hover:text-accent-foreground">📘</span>
                </a>
                <a href="#" className="w-10 h-10 bg-accent/20 hover:bg-accent rounded-full flex items-center justify-center transition-colors duration-300">
                  <span className="text-accent hover:text-accent-foreground">📱</span>
                </a>
                <a href="#" className="w-10 h-10 bg-accent/20 hover:bg-accent rounded-full flex items-center justify-center transition-colors duration-300">
                  <span className="text-accent hover:text-accent-foreground">🐦</span>
                </a>
                <a href="#" className="w-10 h-10 bg-accent/20 hover:bg-accent rounded-full flex items-center justify-center transition-colors duration-300">
                  <span className="text-accent hover:text-accent-foreground">📺</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-footer-foreground/20 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-footer-foreground/60 font-poppins">
            © 2024 Shankar Banking Academy. All rights reserved. | 
            <a href="#" className="hover:text-accent transition-colors duration-300 ml-1">Privacy Policy</a> | 
            <a href="#" className="hover:text-accent transition-colors duration-300 ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default CTAFooter;