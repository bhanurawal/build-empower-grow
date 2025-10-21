import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const cases = [
  {
    company: "Global Financial Services",
    industry: "Banking",
    challenge: "Legacy systems migration affecting 50+ teams",
    results: ["40% faster delivery", "Zero external dependency", "Team independently scaled to 3 more projects"],
  },
  {
    company: "Healthcare Provider",
    industry: "Healthcare",
    challenge: "Compliance-heavy digital transformation",
    results: ["100% audit success", "Staff trained in 12 weeks", "Ongoing capability for future initiatives"],
  },
  {
    company: "Industrial Sector Leader",
    industry: "Environmental & Industrial",
    challenge: "Agentic AI transformation for GHG emissions reporting and regulatory compliance",
    results: ["50% of workforce assigned to new business development", "30% reduction in data quality issues, 70% on-time delivery", "50% reduction in audit findings", "70% accuracy vs. manual reports"],
  },
];

const CaseStudiesPreview = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Proven <span className="text-primary">Transformations</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Real results from organizations that chose empowerment over dependency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {cases.map((caseStudy, index) => (
            <Card key={index} className="border-border shadow-soft hover:shadow-medium transition-all">
              <CardHeader>
                <Badge className="w-fit mb-2">{caseStudy.industry}</Badge>
                <CardTitle className="text-xl font-display">{caseStudy.company}</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">{caseStudy.challenge}</p>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-3 text-primary">Key Results:</h4>
                <ul className="space-y-2">
                  {caseStudy.results.map((result, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      {result}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link to="/case-studies">View All Case Studies</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesPreview;
