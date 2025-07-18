import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, FileText, Users, CheckCircle } from "lucide-react";

const EligibilitySection = () => {
  const eligibilityPoints = [
    {
      icon: GraduationCap,
      title: "Educational Qualification",
      description: "Bachelor's degree from a recognized university",
      badge: "Required"
    },
    {
      icon: Calendar,
      title: "Age Criteria",
      description: "18-32 years (varies by post)",
      badge: "Flexible"
    },
    {
      icon: MapPin,
      title: "Nationality",
      description: "Indian citizen or eligible as per government norms",
      badge: "Mandatory"
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Valid certificates and identity proof",
      badge: "Essential"
    }
  ];

  const ageBreakdown = [
    { post: "Assistant Audit Officer", age: "18-30 years", qualification: "Bachelor's Degree" },
    { post: "Assistant Accounts Officer", age: "18-30 years", qualification: "Bachelor's Degree" },
    { post: "Junior Statistical Officer", age: "18-32 years", qualification: "Bachelor's with 60% in Mathematics" },
    { post: "Assistant Section Officer", age: "18-30 years", qualification: "Bachelor's Degree" },
    { post: "Upper Division Clerk", age: "18-27 years", qualification: "Bachelor's Degree" },
    { post: "Inspector", age: "18-30 years", qualification: "Bachelor's Degree" }
  ];

  const relaxations = [
    { category: "OBC (Other Backward Classes)", relaxation: "3 years" },
    { category: "SC/ST (Scheduled Castes/Tribes)", relaxation: "5 years" },
    { category: "PwD (Persons with Disabilities)", relaxation: "10 years" },
    { category: "Ex-Servicemen", relaxation: "3 years after deduction of military service" }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-poppins">
            Eligibility Criteria
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-poppins">
            Check if you meet the requirements for SSC CGL examination
          </p>
        </div>

        {/* Main Eligibility Points */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {eligibilityPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300 hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <Badge variant="secondary" className="mb-3 bg-accent text-accent-foreground">
                    {point.badge}
                  </Badge>
                  <h3 className="text-lg font-semibold text-foreground mb-2 font-poppins">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-poppins">
                    {point.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Age and Qualification Breakdown */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <Users className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold text-foreground font-poppins">
                  Post-wise Age Limits
                </h3>
              </div>
              <div className="space-y-3">
                {ageBreakdown.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <div>
                      <p className="font-medium text-foreground font-poppins">{item.post}</p>
                      <p className="text-sm text-muted-foreground font-poppins">{item.qualification}</p>
                    </div>
                    <Badge variant="outline" className="font-poppins">
                      {item.age}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <CheckCircle className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold text-foreground font-poppins">
                  Age Relaxations
                </h3>
              </div>
              <div className="space-y-3">
                {relaxations.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <p className="font-medium text-foreground font-poppins">{item.category}</p>
                    <Badge variant="secondary" className="bg-accent text-accent-foreground font-poppins">
                      +{item.relaxation}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Important Notes */}
        <Card className="shadow-card bg-card border-l-4 border-primary">
          <CardContent className="p-6">
            <div className="flex items-start">
              <FileText className="w-6 h-6 text-primary mr-4 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3 font-poppins">
                  Important Notes
                </h3>
                <ul className="space-y-2 text-muted-foreground font-poppins">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    Age is calculated as on the closing date of application submission
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    Candidates appearing in final year graduation can also apply
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    Physical fitness standards apply for certain posts
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    Medical examination may be required for specific positions
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EligibilitySection;