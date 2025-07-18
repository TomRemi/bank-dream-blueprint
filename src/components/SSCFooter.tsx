import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  ExternalLink,
  Clock,
  Users
} from "lucide-react";

const SSCFooter = () => {
  const locations = [
    {
      city: "Chennai",
      address: "123, Anna Salai, T. Nagar, Chennai - 600017",
      phone: "+91 98765 43210",
      email: "chennai@shankarbankingacademy.com"
    },
    {
      city: "Delhi",
      address: "456, Connaught Place, New Delhi - 110001", 
      phone: "+91 98765 43211",
      email: "delhi@shankarbankingacademy.com"
    },
    {
      city: "Bangalore",
      address: "789, MG Road, Bangalore - 560001",
      phone: "+91 98765 43212", 
      email: "bangalore@shankarbankingacademy.com"
    }
  ];

  const socialLinks = [
    { icon: Facebook, url: "#", label: "Facebook" },
    { icon: Twitter, url: "#", label: "Twitter" },
    { icon: Instagram, url: "#", label: "Instagram" },
    { icon: Youtube, url: "#", label: "YouTube" }
  ];

  const quickLinks = [
    "About Us", "Courses", "Success Stories", "Current Affairs", 
    "Mock Tests", "Study Materials", "Faculty", "Contact Us"
  ];

  const legalLinks = [
    "Terms & Conditions", "Privacy Policy", "Refund Policy", "Disclaimer"
  ];

  return (
    <footer className="bg-footer text-footer-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 font-poppins">
              Shankar Banking Academy
            </h3>
            <p className="text-footer-foreground/80 mb-6 font-poppins">
              India's leading coaching institute for SSC, Banking, and other competitive exams. 
              With over 15 years of experience and 20,000+ successful students.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary" className="bg-accent text-accent-foreground">
                <Users className="w-3 h-3 mr-1" />
                20K+ Students
              </Badge>
              <Badge variant="secondary" className="bg-primary text-primary-foreground">
                <Clock className="w-3 h-3 mr-1" />
                15+ Years
              </Badge>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className="text-footer-foreground/80 hover:text-accent hover:bg-footer-foreground/10"
                    asChild
                  >
                    <a href={social.url} aria-label={social.label}>
                      <IconComponent className="w-5 h-5" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-poppins">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-footer-foreground/80 hover:text-accent transition-colors font-poppins text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Centers */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-poppins">Our Centers</h4>
            <div className="space-y-4">
              {locations.map((location, index) => (
                <div key={index} className="text-sm">
                  <h5 className="font-semibold text-footer-foreground font-poppins">{location.city}</h5>
                  <p className="text-footer-foreground/80 font-poppins">{location.address}</p>
                  <div className="flex items-center mt-1">
                    <Phone className="w-3 h-3 mr-1" />
                    <span className="text-footer-foreground/80 font-poppins">{location.phone}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-poppins">Get In Touch</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-accent" />
                <span className="text-footer-foreground/80 font-poppins">+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-accent" />
                <span className="text-footer-foreground/80 font-poppins">info@shankarbankingacademy.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 mt-1 text-accent" />
                <span className="text-footer-foreground/80 font-poppins">
                  Head Office: Anna Salai, Chennai
                </span>
              </div>
            </div>

            <Card className="bg-footer-foreground/10 border-footer-foreground/20">
              <CardContent className="p-4">
                <h5 className="font-semibold text-footer-foreground mb-2 font-poppins">
                  Free Demo Session
                </h5>
                <p className="text-footer-foreground/80 text-sm mb-3 font-poppins">
                  Book your free demo session now
                </p>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-poppins">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-footer-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-footer-foreground/60 text-sm font-poppins">
              © 2024 Shankar Banking Academy. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-footer-foreground/60 hover:text-accent text-sm transition-colors font-poppins"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SSCFooter;