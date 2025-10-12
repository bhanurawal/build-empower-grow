import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const caseStudies = [
  {
    company: "Global Financial Services Leader",
    industry: "Banking & Finance",
    challenge: "A Fortune 500 financial institution needed to migrate 50+ teams from legacy systems to modern cloud infrastructure. Traditional consulting quotes exceeded $20M with 18-month timelines and no capability building.",
    approach: [
      "Embedded coaches in 5 pilot teams",
      "Developed internal migration playbook collaboratively",
      "Trained 150+ staff on cloud architecture and DevOps",
      "Established centers of excellence led by client staff",
    ],
    results: [
      "40% faster delivery compared to initial estimates",
      "Zero external dependency after 6 months",
      "Client team independently scaled approach to 45 additional teams",
      "Saved $12M vs. traditional consulting approach",
    ],
    testimonial: {
      quote: "They made themselves obsolete in the best possible way. Our team now runs circles around what we thought was possible.",
      author: "Chief Technology Officer",
    },
  },
  {
    company: "Regional Healthcare Provider",
    industry: "Healthcare",
    challenge: "Complex HIPAA-compliant digital transformation affecting patient care systems. Internal team lacked experience with regulatory requirements and modern delivery practices.",
    approach: [
      "Compliance mentoring alongside technical delivery",
      "Created tailored governance frameworks",
      "Trained 80+ clinical and IT staff",
      "Established ongoing compliance review processes",
    ],
    results: [
      "100% audit success across all regulatory requirements",
      "Staff fully trained and confident in 12 weeks",
      "Ongoing capability for future healthcare IT initiatives",
      "Patient satisfaction scores increased 35%",
    ],
    testimonial: {
      quote: "We didn't just get a system—we got a team that knows how to build and maintain systems at this complexity level.",
      author: "Chief Information Officer",
    },
  },
  {
    company: "Fast-Growth Tech Startup",
    industry: "Technology",
    challenge: "Rapid scaling from 50 to 300 employees created chaos in delivery. Projects were failing, quality was suffering, and the team was burning out.",
    approach: [
      "Established agile frameworks adapted to startup culture",
      "Mentored engineering leaders on scaling practices",
      "Created sustainable delivery cadences",
      "Built internal training and onboarding programs",
    ],
    results: [
      "3x increase in team productivity within 4 months",
      "Delivery predictability improved from 30% to 90%",
      "Established continuous improvement culture",
      "Team retention increased by 45%",
    ],
    testimonial: {
      quote: "They helped us grow up without growing old. We kept our startup energy but gained enterprise capabilities.",
      author: "VP of Engineering",
    },
  },
  {
    company: "Manufacturing Conglomerate",
    industry: "Manufacturing",
    challenge: "Digital transformation across 12 business units with siloed teams and inconsistent practices. Previous consultants created dependencies that cost millions annually.",
    approach: [
      "Cross-functional enablement program",
      "Shared services and communities of practice",
      "Leadership development for internal champions",
      "Reusable frameworks and templates",
    ],
    results: [
      "Standardized delivery practices across all business units",
      "50% reduction in project failure rate",
      "Internal team now mentors other divisions",
      "Annual consulting spend reduced by $5M",
    ],
    testimonial: {
      quote: "For the first time in decades, we're not dependent on external firms. We're the experts now.",
      author: "Chief Operating Officer",
    },
  },
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
              Success <span className="text-primary">Stories</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Real transformations from organizations that chose empowerment over dependency.
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border-border shadow-medium">
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">{study.industry}</Badge>
                  </div>
                  <CardTitle className="text-3xl font-display mb-4">{study.company}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3">The Challenge</h3>
                    <p className="text-muted-foreground">{study.challenge}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3">Our Approach</h3>
                    <ul className="space-y-2">
                      {study.approach.map((item, idx) => (
                        <li key={idx} className="text-muted-foreground flex items-start">
                          <span className="text-accent mr-2">→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3">The Results</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-start bg-secondary/50 p-4 rounded-lg">
                          <span className="text-accent mr-2 text-xl">✓</span>
                          <span className="text-foreground">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-primary text-primary-foreground p-6 rounded-xl">
                    <p className="text-lg italic mb-3">"{study.testimonial.quote}"</p>
                    <p className="text-sm opacity-90">— {study.testimonial.author}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center bg-gradient-accent text-accent-foreground rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Let's discuss how we can help transform your organization's capabilities.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Start Your Transformation
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudies;
