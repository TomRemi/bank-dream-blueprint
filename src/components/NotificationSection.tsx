import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Users, GraduationCap, Banknote, BookOpen } from "lucide-react";

const NotificationSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-foreground mb-4">
            SBI PO Notification 2025
          </h2>
          <p className="text-lg font-poppins text-muted-foreground max-w-2xl mx-auto">
            Get all the important information about SBI PO recruitment, eligibility, and exam timeline.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Exam Timeline */}
          <Card className="bg-card border border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-poppins font-semibold text-card-foreground flex items-center gap-3">
                <Calendar className="w-6 h-6 text-primary" />
                Exam Timeline 2025
              </CardTitle>
              <CardDescription className="text-muted-foreground font-poppins">
                Important dates for SBI PO examination
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-border">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="font-poppins font-medium text-card-foreground">Application Start</span>
                </div>
                <span className="font-poppins text-primary font-semibold">March 2025</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="font-poppins font-medium text-card-foreground">Application End</span>
                </div>
                <span className="font-poppins text-primary font-semibold">April 2025</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="font-poppins font-medium text-card-foreground">Prelims Exam</span>
                </div>
                <span className="font-poppins text-primary font-semibold">May 2025</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="font-poppins font-medium text-card-foreground">Mains Exam</span>
                </div>
                <span className="font-poppins text-primary font-semibold">June 2025</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="font-poppins font-medium text-card-foreground">Interview</span>
                </div>
                <span className="font-poppins text-primary font-semibold">July 2025</span>
              </div>
            </CardContent>
          </Card>

          {/* Right Column - Eligibility & Details */}
          <Card className="bg-card border border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-poppins font-semibold text-card-foreground flex items-center gap-3">
                <Users className="w-6 h-6 text-primary" />
                Eligibility & Details
              </CardTitle>
              <CardDescription className="text-muted-foreground font-poppins">
                Check if you meet the requirements
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-border">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  <span className="font-poppins font-medium text-card-foreground">Education</span>
                </div>
                <span className="font-poppins text-card-foreground text-sm">Graduate (Any Stream)</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <div className="flex items-center gap-3">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="font-poppins font-medium text-card-foreground">Age Limit</span>
                </div>
                <span className="font-poppins text-card-foreground text-sm">21-30 Years</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <div className="flex items-center gap-3">
                  <Banknote className="w-4 h-4 text-primary" />
                  <span className="font-poppins font-medium text-card-foreground">Application Fee</span>
                </div>
                <span className="font-poppins text-card-foreground text-sm">₹750 (Gen/OBC)</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span className="font-poppins font-medium text-card-foreground">Total Vacancies</span>
                </div>
                <span className="font-poppins text-card-foreground text-sm">~2000 Posts</span>
              </div>
              <div className="bg-accent/10 p-4 rounded-lg mt-4">
                <h4 className="font-poppins font-semibold text-card-foreground mb-2">Starting Salary</h4>
                <p className="text-2xl font-poppins font-bold text-primary">₹41,960/month*</p>
                <p className="text-xs font-poppins text-muted-foreground mt-1">*Basic pay excluding allowances</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NotificationSection;