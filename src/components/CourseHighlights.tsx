import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Monitor, 
  FileCheck, 
  FileText, 
  Video, 
  MessageCircleQuestion, 
  Languages 
} from "lucide-react";

const CourseHighlights = () => {
  const features = [
    {
      icon: Monitor,
      title: "Live Online Classes",
      description: "Interactive Zoom sessions with top faculty for real-time learning and engagement."
    },
    {
      icon: FileCheck,
      title: "Mock Tests",
      description: "Real-exam-level mock tests with detailed performance analysis and improvement tips."
    },
    {
      icon: FileText,
      title: "PDF Notes",
      description: "Downloadable comprehensive study materials covering complete syllabus."
    },
    {
      icon: Video,
      title: "Video Recordings",
      description: "Unlimited access to recorded sessions for revision and flexible learning."
    },
    {
      icon: MessageCircleQuestion,
      title: "Doubt Clearing",
      description: "Regular doubt-solving sessions with experienced faculty for concept clarity."
    },
    {
      icon: Languages,
      title: "Bilingual Support",
      description: "Course available in both English & Tamil for better understanding."
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-foreground mb-4">
            Why Choose Our SBI PO Course?
          </h2>
          <p className="text-lg font-poppins text-muted-foreground max-w-2xl mx-auto">
            Comprehensive training program designed by banking experts to ensure your success in SBI PO examination.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card border border-border shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105 hover:-translate-y-2 group"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-poppins font-semibold text-card-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground font-poppins leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="group">
            <div className="text-3xl sm:text-4xl font-bold font-poppins text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
              10,000+
            </div>
            <div className="text-sm font-poppins text-muted-foreground uppercase tracking-wide">
              Students Trained
            </div>
          </div>
          <div className="group">
            <div className="text-3xl sm:text-4xl font-bold font-poppins text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
              95%
            </div>
            <div className="text-sm font-poppins text-muted-foreground uppercase tracking-wide">
              Success Rate
            </div>
          </div>
          <div className="group">
            <div className="text-3xl sm:text-4xl font-bold font-poppins text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
              15+
            </div>
            <div className="text-sm font-poppins text-muted-foreground uppercase tracking-wide">
              Years Experience
            </div>
          </div>
          <div className="group">
            <div className="text-3xl sm:text-4xl font-bold font-poppins text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
              500+
            </div>
            <div className="text-sm font-poppins text-muted-foreground uppercase tracking-wide">
              Mock Tests
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHighlights;