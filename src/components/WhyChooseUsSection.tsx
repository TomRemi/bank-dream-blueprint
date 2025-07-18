import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, CheckCircle, Award, TrendingUp, Users } from "lucide-react";

const WhyChooseUsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      position: "Assistant Section Officer, CBDT",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Shankar Academy's structured approach and excellent faculty helped me clear SSC CGL in my first attempt. The mock tests were exactly like the real exam!"
    },
    {
      name: "Rahul Kumar", 
      position: "Upper Division Clerk, Ministry of Railways",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The doubt clearing sessions and personal mentorship made all the difference. I couldn't have achieved this without their guidance."
    },
    {
      name: "Aditya Patel",
      position: "Junior Statistical Officer, Ministry of Statistics",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face", 
      rating: 5,
      text: "Best coaching institute for SSC preparation. The study materials and online classes are top-notch. Highly recommended!"
    }
  ];

  const achievements = [
    {
      icon: Users,
      title: "20,000+ Success Stories",
      description: "Students successfully placed in various government departments"
    },
    {
      icon: Award,
      title: "15+ Years of Excellence",
      description: "Proven track record in competitive exam coaching"
    },
    {
      icon: TrendingUp,
      title: "85% Success Rate",
      description: "Consistently high selection rates year after year"
    },
    {
      icon: Star,
      title: "Top Rated Institute",
      description: "Recognized as the best SSC coaching academy in South India"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-poppins">
            Why Choose Shankar Academy?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-poppins">
            Join thousands of successful candidates who achieved their dream jobs
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300 hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 font-poppins">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-poppins">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Student Testimonials */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8 font-poppins">
            Student Success Stories
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300 hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground font-poppins">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground font-poppins">{testimonial.position}</p>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                  <Quote className="w-8 h-8 text-muted-foreground mb-3" />
                  <p className="text-muted-foreground italic font-poppins">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications and Awards */}
        <div className="bg-card p-8 rounded-lg shadow-card text-center">
          <h3 className="text-xl font-bold text-foreground mb-6 font-poppins">
            Recognized Excellence
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="bg-accent text-accent-foreground px-4 py-2">
              <Award className="w-4 h-4 mr-2" />
              Best Coaching Institute 2023
            </Badge>
            <Badge variant="secondary" className="bg-secondary text-secondary-foreground px-4 py-2">
              <CheckCircle className="w-4 h-4 mr-2" />
              ISO Certified Institute
            </Badge>
            <Badge variant="secondary" className="bg-primary text-primary-foreground px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              5-Star Rated Academy
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;