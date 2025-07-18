import { Card, CardContent } from "@/components/ui/card";
import { 
  Monitor, 
  FileText, 
  Users, 
  MessageSquare, 
  Award, 
  Briefcase,
  Calendar,
  PlayCircle,
  Download,
  Clock
} from "lucide-react";

const SSCCourseFeatures = () => {
  const features = [
    {
      icon: Calendar,
      title: "Daily Mock Tests",
      description: "Comprehensive practice sets covering all topics with detailed solutions and performance analysis.",
      color: "text-primary"
    },
    {
      icon: Monitor,
      title: "Online + Offline Classes",
      description: "Flexible learning with live online sessions and recorded classes for your convenience.",
      color: "text-secondary"
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Experienced teachers from Chennai & Delhi with proven track records in SSC coaching.",
      color: "text-accent"
    },
    {
      icon: PlayCircle,
      title: "LMS Access",
      description: "Complete learning management system with video lectures, notes, and progress tracking.",
      color: "text-primary"
    },
    {
      icon: MessageSquare,
      title: "Telegram Doubt Solving",
      description: "Instant doubt clearing through dedicated Telegram groups and one-on-one sessions.",
      color: "text-secondary"
    },
    {
      icon: Award,
      title: "Mentorship Support",
      description: "Personal mentoring and motivational support to keep you focused and confident.",
      color: "text-accent"
    },
    {
      icon: Download,
      title: "Study Materials",
      description: "Comprehensive PDF notes, current affairs updates, and downloadable resources.",
      color: "text-primary"
    },
    {
      icon: Clock,
      title: "Flexible Timings",
      description: "Morning and evening batches to suit working professionals and students.",
      color: "text-secondary"
    },
    {
      icon: Briefcase,
      title: "Placement Support",
      description: "Post-training placement assistance and interview preparation guidance.",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-poppins">
            Course Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-poppins">
            Everything you need to excel in SSC CGL examination
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300 hover-lift group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-muted group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2 font-poppins">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm font-poppins">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Success Statistics */}
        <div className="mt-16 bg-card p-8 rounded-lg shadow-card">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-2 font-poppins">20,000+</h3>
              <p className="text-muted-foreground font-poppins">Students Trained</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary mb-2 font-poppins">85%</h3>
              <p className="text-muted-foreground font-poppins">Success Rate</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary mb-2 font-poppins">15+</h3>
              <p className="text-muted-foreground font-poppins">Years Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary mb-2 font-poppins">500+</h3>
              <p className="text-muted-foreground font-poppins">Mock Tests</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SSCCourseFeatures;