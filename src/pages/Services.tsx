import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Shield, Rocket, GitBranch, BookOpen } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Embedded Delivery Coaching",
    description: "Our experts integrate directly into your team structure, providing hands-on guidance through every phase of project execution.",
    benefits: [
      "Real-time mentoring during active projects",
      "Knowledge transfer through doing, not just teaching",
      "Build muscle memory for complex delivery scenarios",
      "Continuous feedback and adjustment",
    ],
  },
  {
    icon: Target,
    title: "Staff Upskilling & Enablement",
    description: "Comprehensive training programs designed to elevate your team's capabilities across the entire project lifecycle.",
    benefits: [
      "Customized training based on skill gaps",
      "Hands-on workshops with real project scenarios",
      "Certification and competency frameworks",
      "Long-term career development pathways",
    ],
  },
  {
    icon: Shield,
    title: "Governance & Compliance Mentoring",
    description: "Navigate complex regulatory and governance requirements while building internal expertise.",
    benefits: [
      "Risk management frameworks tailored to your context",
      "Audit preparation and continuous compliance",
      "Governance best practices without bureaucracy",
      "Decision-making frameworks for complex scenarios",
    ],
  },
  {
    icon: Rocket,
    title: "Project Lifecycle Support",
    description: "End-to-end guidance using your tools, processes, and methodologies to ensure sustainable success.",
    benefits: [
      "Initiation and planning with your frameworks",
      "Execution support using your systems",
      "Quality assurance and testing guidance",
      "Post-delivery review and continuous improvement",
    ],
  },
  {
    icon: GitBranch,
    title: "Agile & DevOps Transformation",
    description: "Transform your delivery approach with modern practices that stick.",
    benefits: [
      "Agile adoption tailored to your culture",
      "DevOps pipeline establishment and optimization",
      "Continuous integration and deployment practices",
      "Team autonomy and self-organization",
    ],
  },
  {
    icon: BookOpen,
    title: "Knowledge Management Systems",
    description: "Establish robust knowledge capture and sharing systems for long-term organizational learning.",
    benefits: [
      "Documentation frameworks that teams actually use",
      "Communities of practice establishment",
      "Lessons learned capture and application",
      "Internal knowledge sharing platforms",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive enablement solutions designed to build lasting capabilities within your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-border shadow-soft hover:shadow-medium transition-all">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center mb-4">
                    <service.icon className="text-accent-foreground" size={28} />
                  </div>
                  <CardTitle className="text-2xl font-display">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3 text-primary">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-start">
                        <span className="text-accent mr-2 mt-1">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-gradient-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Not Sure Where to Start?
            </h2>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Every organization is unique. Let's discuss your specific challenges and design a custom enablement program.
            </p>
            <a
              href="/contact"
              className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Schedule a Discovery Call
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
