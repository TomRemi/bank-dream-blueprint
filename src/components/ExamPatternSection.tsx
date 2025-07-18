import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, FileText, Users } from "lucide-react";

const ExamPatternSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-foreground mb-4">
            SBI PO Exam Pattern 2025
          </h2>
          <p className="text-lg font-poppins text-muted-foreground max-w-2xl mx-auto">
            Complete breakdown of the examination structure and syllabus for all three phases.
          </p>
        </div>

        {/* Exam Pattern Tabs */}
        <Tabs defaultValue="prelims" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="prelims" className="font-poppins font-medium">
              Phase 1: Prelims
            </TabsTrigger>
            <TabsTrigger value="mains" className="font-poppins font-medium">
              Phase 2: Mains
            </TabsTrigger>
            <TabsTrigger value="interview" className="font-poppins font-medium">
              Phase 3: Interview
            </TabsTrigger>
          </TabsList>

          {/* Prelims Tab */}
          <TabsContent value="prelims">
            <Card className="bg-card border border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-poppins font-semibold text-card-foreground flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-primary" />
                  Preliminary Examination
                </CardTitle>
                <CardDescription className="text-muted-foreground font-poppins">
                  Online objective test with 100 questions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <div className="text-2xl font-bold font-poppins text-primary mb-2">100</div>
                    <div className="text-sm font-poppins text-muted-foreground">Total Questions</div>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <div className="text-2xl font-bold font-poppins text-primary mb-2">100</div>
                    <div className="text-sm font-poppins text-muted-foreground">Total Marks</div>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <div className="text-2xl font-bold font-poppins text-primary mb-2">60</div>
                    <div className="text-sm font-poppins text-muted-foreground">Minutes</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-background rounded-lg border border-border">
                    <div>
                      <h4 className="font-poppins font-semibold text-card-foreground">English Language</h4>
                      <p className="text-sm font-poppins text-muted-foreground">Grammar, vocabulary, comprehension</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="mb-1">30 Questions</Badge>
                      <div className="text-xs font-poppins text-muted-foreground">20 minutes</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-background rounded-lg border border-border">
                    <div>
                      <h4 className="font-poppins font-semibold text-card-foreground">Quantitative Aptitude</h4>
                      <p className="text-sm font-poppins text-muted-foreground">Number series, data interpretation, arithmetic</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="mb-1">35 Questions</Badge>
                      <div className="text-xs font-poppins text-muted-foreground">20 minutes</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-background rounded-lg border border-border">
                    <div>
                      <h4 className="font-poppins font-semibold text-card-foreground">Reasoning Ability</h4>
                      <p className="text-sm font-poppins text-muted-foreground">Logical reasoning, puzzles, coding-decoding</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="mb-1">35 Questions</Badge>
                      <div className="text-xs font-poppins text-muted-foreground">20 minutes</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Mains Tab */}
          <TabsContent value="mains">
            <Card className="bg-card border border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-poppins font-semibold text-card-foreground flex items-center gap-3">
                  <FileText className="w-6 h-6 text-primary" />
                  Main Examination
                </CardTitle>
                <CardDescription className="text-muted-foreground font-poppins">
                  Objective + Descriptive test with comprehensive syllabus
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <div className="text-2xl font-bold font-poppins text-primary mb-2">155</div>
                    <div className="text-sm font-poppins text-muted-foreground">Total Questions</div>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <div className="text-2xl font-bold font-poppins text-primary mb-2">200</div>
                    <div className="text-sm font-poppins text-muted-foreground">Total Marks</div>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <div className="text-2xl font-bold font-poppins text-primary mb-2">180</div>
                    <div className="text-sm font-poppins text-muted-foreground">Minutes</div>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <div className="text-2xl font-bold font-poppins text-primary mb-2">50</div>
                    <div className="text-sm font-poppins text-muted-foreground">Essay Marks</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-background rounded-lg border border-border">
                    <div>
                      <h4 className="font-poppins font-semibold text-card-foreground">Reasoning & Computer Aptitude</h4>
                      <p className="text-sm font-poppins text-muted-foreground">Advanced reasoning + computer knowledge</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="mb-1">45 Questions</Badge>
                      <div className="text-xs font-poppins text-muted-foreground">60 minutes</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-background rounded-lg border border-border">
                    <div>
                      <h4 className="font-poppins font-semibold text-card-foreground">Data Analysis & Interpretation</h4>
                      <p className="text-sm font-poppins text-muted-foreground">Charts, graphs, data interpretation</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="mb-1">35 Questions</Badge>
                      <div className="text-xs font-poppins text-muted-foreground">45 minutes</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-background rounded-lg border border-border">
                    <div>
                      <h4 className="font-poppins font-semibold text-card-foreground">General/Economy/Banking Awareness</h4>
                      <p className="text-sm font-poppins text-muted-foreground">Current affairs, banking, economy</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="mb-1">40 Questions</Badge>
                      <div className="text-xs font-poppins text-muted-foreground">35 minutes</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-background rounded-lg border border-border">
                    <div>
                      <h4 className="font-poppins font-semibold text-card-foreground">English Language</h4>
                      <p className="text-sm font-poppins text-muted-foreground">Grammar, vocabulary, comprehension</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="mb-1">35 Questions</Badge>
                      <div className="text-xs font-poppins text-muted-foreground">40 minutes</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-accent/10 rounded-lg border border-accent/20">
                    <div>
                      <h4 className="font-poppins font-semibold text-card-foreground">Descriptive Test</h4>
                      <p className="text-sm font-poppins text-muted-foreground">Essay writing + letter writing</p>
                    </div>
                    <div className="text-right">
                      <Badge className="mb-1 bg-accent text-accent-foreground">2 Questions</Badge>
                      <div className="text-xs font-poppins text-muted-foreground">30 minutes</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Interview Tab */}
          <TabsContent value="interview">
            <Card className="bg-card border border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-poppins font-semibold text-card-foreground flex items-center gap-3">
                  <Users className="w-6 h-6 text-primary" />
                  Group Exercise & Interview
                </CardTitle>
                <CardDescription className="text-muted-foreground font-poppins">
                  Final selection round with group discussion and personal interview
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <h4 className="font-poppins font-semibold text-card-foreground mb-2 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        Group Exercise
                      </h4>
                      <ul className="space-y-2 text-sm font-poppins text-muted-foreground">
                        <li>• Group discussion on current topics</li>
                        <li>• Leadership and communication skills</li>
                        <li>• Team coordination assessment</li>
                        <li>• Duration: 15-20 minutes</li>
                      </ul>
                      <Badge className="mt-3 bg-accent text-accent-foreground">20 Marks</Badge>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-secondary/5 rounded-lg">
                      <h4 className="font-poppins font-semibold text-card-foreground mb-2 flex items-center gap-2">
                        <Users className="w-4 h-4 text-secondary" />
                        Personal Interview
                      </h4>
                      <ul className="space-y-2 text-sm font-poppins text-muted-foreground">
                        <li>• Banking awareness questions</li>
                        <li>• Personal background discussion</li>
                        <li>• Current affairs and general knowledge</li>
                        <li>• Duration: 15-25 minutes</li>
                      </ul>
                      <Badge className="mt-3 bg-secondary text-secondary-foreground">30 Marks</Badge>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-background rounded-lg border border-border">
                  <h4 className="font-poppins font-semibold text-card-foreground mb-3">Final Selection Criteria</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold font-poppins text-primary">25%</div>
                      <div className="text-sm font-poppins text-muted-foreground">Mains Exam</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold font-poppins text-primary">10%</div>
                      <div className="text-sm font-poppins text-muted-foreground">Group Exercise</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold font-poppins text-primary">15%</div>
                      <div className="text-sm font-poppins text-muted-foreground">Interview</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ExamPatternSection;