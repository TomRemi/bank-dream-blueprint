import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  Users, 
  Monitor, 
  MapPin, 
  Play,
  CheckCircle,
  Timer
} from "lucide-react";

const UpcomingBatchSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 8,
    minutes: 45,
    seconds: 30
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const batchDetails = [
    {
      mode: "Online Live",
      icon: Monitor,
      schedule: "Mon-Fri: 7:00 AM - 9:00 AM",
      duration: "6 Months",
      seats: "50 seats available",
      features: ["Live Interactive Classes", "Recorded Sessions", "Digital Notes", "Online Mock Tests"]
    },
    {
      mode: "Weekend Batch",
      icon: Calendar,
      schedule: "Sat-Sun: 9:00 AM - 6:00 PM",
      duration: "8 Months",
      seats: "30 seats available", 
      features: ["Intensive Weekend Classes", "Doubt Clearing", "Printed Materials", "Physical Mock Tests"]
    },
    {
      mode: "Hybrid Mode",
      icon: MapPin,
      schedule: "Flexible Timing",
      duration: "6 Months",
      seats: "40 seats available",
      features: ["Online + Offline", "Personal Mentoring", "Study Materials", "Performance Analysis"]
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-poppins">
            Upcoming Batch Details
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-poppins">
            Join our next batch and start your SSC CGL preparation journey
          </p>
        </div>

        {/* Countdown Timer */}
        <Card className="shadow-card mb-12 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <Timer className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold text-foreground font-poppins">
                Next Batch Starts In
              </h3>
            </div>
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-6">
              <div className="bg-card p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary font-poppins">{timeLeft.days}</div>
                <div className="text-sm text-muted-foreground font-poppins">Days</div>
              </div>
              <div className="bg-card p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary font-poppins">{timeLeft.hours}</div>
                <div className="text-sm text-muted-foreground font-poppins">Hours</div>
              </div>
              <div className="bg-card p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary font-poppins">{timeLeft.minutes}</div>
                <div className="text-sm text-muted-foreground font-poppins">Minutes</div>
              </div>
              <div className="bg-card p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary font-poppins">{timeLeft.seconds}</div>
                <div className="text-sm text-muted-foreground font-poppins">Seconds</div>
              </div>
            </div>
            <Badge variant="secondary" className="bg-accent text-accent-foreground px-4 py-2 text-lg">
              Early Bird Discount: 25% OFF
            </Badge>
          </CardContent>
        </Card>

        {/* Batch Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {batchDetails.map((batch, index) => {
            const IconComponent = batch.icon;
            return (
              <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300 hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground font-poppins">{batch.mode}</h3>
                      <Badge variant="outline" className="mt-1 font-poppins">Popular</Badge>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm font-poppins">{batch.schedule}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm font-poppins">{batch.duration}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Users className="w-4 h-4 mr-2" />
                      <span className="text-sm font-poppins">{batch.seats}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {batch.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground font-poppins">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full font-poppins font-semibold">
                    <Play className="w-4 h-4 mr-2" />
                    Register for This Batch
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-card">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 font-poppins">
                What's Included in Every Batch
              </h3>
              <ul className="space-y-2">
                {[
                  "Comprehensive study materials",
                  "Weekly mock tests and assessments",
                  "Personal mentoring sessions",
                  "Doubt clearing through multiple channels",
                  "Performance tracking and analysis",
                  "Interview preparation guidance"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    <span className="text-muted-foreground font-poppins">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 font-poppins">
                Special Offers
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
                  <p className="font-semibold text-foreground font-poppins">Early Bird Discount</p>
                  <p className="text-sm text-muted-foreground font-poppins">25% off for registrations before batch start</p>
                </div>
                <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="font-semibold text-foreground font-poppins">Referral Bonus</p>
                  <p className="text-sm text-muted-foreground font-poppins">₹2,000 discount for every successful referral</p>
                </div>
                <div className="p-3 bg-secondary/10 rounded-lg border border-secondary/20">
                  <p className="font-semibold text-foreground font-poppins">Group Discount</p>
                  <p className="text-sm text-muted-foreground font-poppins">Additional 10% off for groups of 3 or more</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UpcomingBatchSection;