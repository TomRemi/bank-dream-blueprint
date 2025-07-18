import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Calculator, PenTool, Keyboard, Clock, Users } from "lucide-react";

const TiersBreakdownSection = () => {
  const tiers = [
    {
      id: "tier1",
      title: "Tier I",
      subtitle: "Preliminary Examination",
      icon: BookOpen,
      duration: "60 minutes",
      questions: "100 Questions",
      marks: "200 Marks",
      subjects: [
        { name: "General Intelligence & Reasoning", questions: 25, marks: 50 },
        { name: "General Awareness", questions: 25, marks: 50 },
        { name: "Quantitative Aptitude", questions: 25, marks: 50 },
        { name: "English Comprehension", questions: 25, marks: 50 }
      ]
    },
    {
      id: "tier2", 
      title: "Tier II",
      subtitle: "Main Examination",
      icon: Calculator,
      duration: "Multiple Sessions",
      questions: "Varies by Paper",
      marks: "200 Marks each",
      subjects: [
        { name: "Paper I: Quantitative Abilities", questions: 100, marks: 200 },
        { name: "Paper II: English Language & Comprehension", questions: 200, marks: 200 },
        { name: "Paper III: Statistics", questions: 100, marks: 200 },
        { name: "Paper IV: General Studies (Finance & Economics)", questions: 100, marks: 200 }
      ]
    },
    {
      id: "tier3",
      title: "Tier III", 
      subtitle: "Descriptive Paper",
      icon: PenTool,
      duration: "60 minutes",
      questions: "Essay/Letter/Application",
      marks: "100 Marks",
      subjects: [
        { name: "Essay Writing", questions: "1", marks: 50 },
        { name: "Letter/Application Writing", questions: "1", marks: 50 },
        { name: "Precis Writing", questions: "Optional", marks: "Bonus" }
      ]
    },
    {
      id: "tier4",
      title: "Tier IV",
      subtitle: "Skill Test",
      icon: Keyboard,
      duration: "15 minutes",
      questions: "Typing/Data Entry",
      marks: "Qualifying",
      subjects: [
        { name: "Data Entry Speed Test (DEST)", questions: "2000 depressions", marks: "15 min" },
        { name: "Computer Proficiency Test (CPT)", questions: "Various modules", marks: "45 min" },
        { name: "Document Verification", questions: "Certificate check", marks: "Final step" }
      ]
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-poppins">
            SSC CGL Exam Tiers Breakdown
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-poppins">
            Complete guide to all four tiers of SSC CGL examination
          </p>
        </div>

        <Tabs defaultValue="tier1" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            {tiers.map((tier) => {
              const IconComponent = tier.icon;
              return (
                <TabsTrigger 
                  key={tier.id} 
                  value={tier.id}
                  className="flex flex-col gap-2 p-4 h-auto font-poppins"
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="font-semibold">{tier.title}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {tiers.map((tier) => {
            const IconComponent = tier.icon;
            return (
              <TabsContent key={tier.id} value={tier.id}>
                <Card className="shadow-card">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <IconComponent className="w-8 h-8 text-primary mr-4" />
                      <div>
                        <h3 className="text-2xl font-bold text-foreground font-poppins">{tier.title}</h3>
                        <p className="text-muted-foreground font-poppins">{tier.subtitle}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-8">
                      <div className="flex items-center p-4 bg-muted rounded-lg">
                        <Clock className="w-5 h-5 text-primary mr-3" />
                        <div>
                          <p className="font-semibold text-foreground font-poppins">Duration</p>
                          <p className="text-sm text-muted-foreground font-poppins">{tier.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center p-4 bg-muted rounded-lg">
                        <BookOpen className="w-5 h-5 text-primary mr-3" />
                        <div>
                          <p className="font-semibold text-foreground font-poppins">Questions</p>
                          <p className="text-sm text-muted-foreground font-poppins">{tier.questions}</p>
                        </div>
                      </div>
                      <div className="flex items-center p-4 bg-muted rounded-lg">
                        <Users className="w-5 h-5 text-primary mr-3" />
                        <div>
                          <p className="font-semibold text-foreground font-poppins">Total Marks</p>
                          <p className="text-sm text-muted-foreground font-poppins">{tier.marks}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-foreground mb-4 font-poppins">Subject-wise Breakdown</h4>
                      {tier.subjects.map((subject, index) => (
                        <div key={index} className="flex justify-between items-center p-4 bg-background rounded-lg border">
                          <span className="font-medium text-foreground font-poppins">{subject.name}</span>
                          <div className="flex gap-4 text-sm text-muted-foreground font-poppins">
                            <span>{subject.questions} Qs</span>
                            <span>{subject.marks} Marks</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};

export default TiersBreakdownSection;