import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Anitha R.",
      position: "SBI PO Officer",
      image: "👩‍💼",
      quote: "Thanks to Shankar Academy, I cleared SBI PO in my first attempt! The mock tests and faculty guidance were exceptional.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      position: "SBI PO Officer",
      image: "👨‍💼",
      quote: "The bilingual support and comprehensive study materials made all the difference. Highly recommend this course!",
      rating: 5
    },
    {
      name: "Priya Sharma",
      position: "Banking Aspirant",
      image: "👩‍🎓",
      quote: "Live classes with doubt clearing sessions helped me understand complex concepts easily. Best investment for my career!",
      rating: 5
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="bg-accent text-accent-foreground font-medium px-4 py-2 mb-4">
            Success Stories
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-foreground mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg font-poppins text-muted-foreground max-w-2xl mx-auto">
            Join thousands of successful banking professionals who achieved their dreams with our guidance.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background border border-border shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105 relative overflow-hidden group">
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-accent/20 group-hover:text-accent/40 transition-colors duration-300">
                <Quote className="w-8 h-8" />
              </div>
              
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-card-foreground font-poppins mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center">
                  <div className="text-2xl mr-3">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-poppins font-semibold text-card-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground font-poppins">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Preview Placeholder */}
        <div className="mt-12 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 border border-border">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-2/3 text-left mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold font-poppins text-foreground mb-2">
                    Watch Our Success Stories
                  </h3>
                  <p className="text-muted-foreground font-poppins">
                    See how our students transformed their careers with our comprehensive SBI PO training program.
                  </p>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 shadow-hover">
                    <div className="w-0 h-0 border-l-[12px] border-l-primary-foreground border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;