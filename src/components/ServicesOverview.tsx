import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Shield, Rocket } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Embedded Delivery Coaching",
    description: "Our experts work alongside your team, mentoring them through real project execution while building lasting capabilities.",
  },
  {
    icon: Target,
    title: "Staff Upskilling & Enablement",
    description: "Comprehensive training programs that transform your workforce into confident, capable project leaders.",
  },
  {
    icon: Shield,
    title: "Governance & Compliance",
    description: "Mentor your team on best practices for governance, risk management, and regulatory compliance.",
  },
  {
    icon: Rocket,
    title: "Sustainable Transformation",
    description: "Not a one-off project methodology, but a repeatable growth engine that builds long-term resilience and positions your company as a pattern innovator and thought leader.",
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Services That <span className="text-accent">Empower</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            We partner with you to build capabilities that last long after we're gone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="border-border shadow-soft hover:shadow-medium transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-4">
                  <service.icon className="text-accent-foreground" size={24} />
                </div>
                <CardTitle className="text-2xl font-display">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-gradient-primary">
            <Link to="/services">Explore All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
