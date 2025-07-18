import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, GraduationCap, FileText } from "lucide-react";

const AboutSSCSection = () => {
  const departments = [
    "Central Board of Direct Taxes (CBDT)",
    "Central Board of Indirect Taxes (CBIC)", 
    "Department of Revenue",
    "Ministry of External Affairs",
    "Ministry of Railways",
    "Department of Posts",
    "National Investigation Agency (NIA)",
    "Intelligence Bureau (IB)"
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-poppins">
            About BANKING
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-poppins">
            Staff Selection Commission Combined Graduate Level Examination
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-card hover:shadow-hover transition-all duration-300 hover-lift">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <FileText className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-xl font-bold text-foreground font-poppins">What is SSC CGL?</h3>
              </div>
              <p className="text-muted-foreground font-poppins">
                SSC CGL is a competitive examination conducted by the Staff Selection Commission 
                to recruit candidates for Group B and Group C posts in various government 
                departments and ministries. The exam consists of four tiers with different 
                assessment methods.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-hover transition-all duration-300 hover-lift">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-xl font-bold text-foreground font-poppins">Who Should Apply?</h3>
              </div>
              <p className="text-muted-foreground font-poppins">
                Graduates between 18-32 years seeking prestigious government positions 
                with job security, good salary packages, and career growth opportunities. 
                Perfect for those passionate about serving the nation through public service.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-card p-8 rounded-lg shadow-card">
          <div className="flex items-center mb-6">
            <Building2 className="w-8 h-8 text-primary mr-3" />
            <h3 className="text-2xl font-bold text-foreground font-poppins">Departments Covered</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {departments.map((dept, index) => (
              <div key={index} className="flex items-center p-3 bg-muted rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                <span className="text-sm font-medium text-foreground font-poppins">{dept}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSSCSection;