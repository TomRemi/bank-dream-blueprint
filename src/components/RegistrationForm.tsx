import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { UserPlus, Phone, Mail, BookOpen, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const RegistrationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    tier: "",
    agreeTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.mobile || !formData.email || !formData.tier) {
      toast({
        title: "Please fill all required fields",
        variant: "destructive"
      });
      return;
    }

    if (!formData.agreeTerms) {
      toast({
        title: "Please agree to terms and conditions",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Registration Successful!",
      description: "We'll contact you within 24 hours with demo session details."
    });

    // Reset form
    setFormData({
      name: "",
      mobile: "",
      email: "",
      tier: "",
      agreeTerms: false
    });
  };

  const benefits = [
    "Free demo session worth ₹500",
    "Comprehensive study material",
    "Personal mentoring session",
    "Access to online portal",
    "WhatsApp doubt support",
    "Mock test series included"
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-poppins">
            Register for Free Demo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-poppins">
            Take the first step towards your SSC CGL success story
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Registration Form */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center font-poppins">
                <UserPlus className="w-6 h-6 text-primary mr-3" />
                Registration Form
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-poppins">Full Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="font-poppins"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mobile" className="font-poppins">Mobile Number *</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="mobile"
                      type="tel"
                      placeholder="Enter 10-digit mobile number"
                      className="pl-10 font-poppins"
                      value={formData.mobile}
                      onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="font-poppins">Email Address *</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      className="pl-10 font-poppins"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tier" className="font-poppins">Select Target Tier *</Label>
                  <Select value={formData.tier} onValueChange={(value) => setFormData({...formData, tier: value})}>
                    <SelectTrigger className="font-poppins">
                      <SelectValue placeholder="Choose your target tier" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tier1" className="font-poppins">Tier I Only</SelectItem>
                      <SelectItem value="tier1-2" className="font-poppins">Tier I & II</SelectItem>
                      <SelectItem value="complete" className="font-poppins">Complete Course (All Tiers)</SelectItem>
                      <SelectItem value="tier2" className="font-poppins">Tier II Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="terms" 
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) => setFormData({...formData, agreeTerms: checked as boolean})}
                  />
                  <Label htmlFor="terms" className="text-sm font-poppins">
                    I agree to the <span className="text-primary cursor-pointer hover:underline">Terms & Conditions</span> and <span className="text-primary cursor-pointer hover:underline">Privacy Policy</span>
                  </Label>
                </div>

                <Button type="submit" className="w-full font-poppins font-semibold">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Register for Free Demo
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Benefits Card */}
          <Card className="shadow-card bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4 font-poppins">
                  What You Get
                </h3>
                <p className="text-muted-foreground font-poppins">
                  Register now and unlock these exclusive benefits
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-foreground font-poppins">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-card p-6 rounded-lg text-center">
                <h4 className="text-lg font-semibold text-foreground mb-2 font-poppins">
                  Limited Time Offer
                </h4>
                <p className="text-2xl font-bold text-primary mb-2 font-poppins">
                  25% Early Bird Discount
                </p>
                <p className="text-sm text-muted-foreground font-poppins">
                  Valid for registrations this month
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground font-poppins mb-4">
            Need help with registration? Contact us directly
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center">
              <Phone className="w-4 h-4 text-primary mr-2" />
              <span className="font-poppins">+91 98765 43210</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 text-primary mr-2" />
              <span className="font-poppins">info@shankarbankingacademy.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;