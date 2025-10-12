import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Philosophy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6 text-center">
              Our <span className="text-primary">Philosophy</span>
            </h1>
            <p className="text-xl text-muted-foreground text-center mb-16">
              Why we're fundamentally different from traditional consulting firms.
            </p>

            <div className="prose prose-lg max-w-none mb-16">
              <div className="bg-gradient-subtle rounded-2xl p-8 mb-12">
                <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                  The Problem with Traditional Consulting
                </h2>
                <p className="text-muted-foreground mb-4">
                  Traditional consulting firms have a business model problem: their revenue depends on keeping you dependent. 
                  They deploy their own teams, use their own methodologies, and maintain control of critical knowledge. 
                  When they leave, you're often no better equipped than when they arrived.
                </p>
                <p className="text-muted-foreground">
                  This creates a cycle of dependency where organizations repeatedly hire consultants for similar projects, 
                  never building the internal capabilities needed for sustainable success.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <Card className="border-destructive/20 bg-destructive/5">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-destructive mb-4">Traditional Consulting</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-destructive mr-2">✕</span>
                        Deploy external teams
                      </li>
                      <li className="flex items-start">
                        <span className="text-destructive mr-2">✕</span>
                        Use proprietary methodologies
                      </li>
                      <li className="flex items-start">
                        <span className="text-destructive mr-2">✕</span>
                        Maintain knowledge ownership
                      </li>
                      <li className="flex items-start">
                        <span className="text-destructive mr-2">✕</span>
                        Create long-term dependencies
                      </li>
                      <li className="flex items-start">
                        <span className="text-destructive mr-2">✕</span>
                        Optimize for billable hours
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-accent/20 bg-accent/5">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-accent mb-4">Our Approach</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        Enable your existing teams
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        Use your tools and processes
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        Transfer all knowledge
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        Build sustainable capabilities
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        Optimize for your independence
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-primary text-primary-foreground rounded-2xl p-8 mb-12">
                <h2 className="text-3xl font-display font-bold mb-6">
                  Our Core Principles
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">1. Empowerment Over Dependency</h3>
                    <p className="opacity-90">
                      We measure success by how quickly you no longer need us. Every engagement is designed 
                      to build your team's confidence and capabilities.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">2. Knowledge Transfer as Priority One</h3>
                    <p className="opacity-90">
                      We don't hoard knowledge—we systematically transfer it. Every decision, every framework, 
                      every lesson learned becomes your organizational asset.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">3. Use Your Tools, Your Way</h3>
                    <p className="opacity-90">
                      We adapt to your environment, not the other way around. We work with your tools, 
                      your processes, and your culture to ensure sustainable adoption.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">4. Teach to Fish</h3>
                    <p className="opacity-90">
                      We don't just deliver projects—we teach your team how to deliver projects. 
                      The goal is replicable success, not one-time wins.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">5. Long-Term Partnership</h3>
                    <p className="opacity-90">
                      While we optimize for your independence, we remain available as strategic advisors 
                      and mentors as you tackle increasingly complex challenges.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/30 rounded-2xl p-8">
                <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                  The Result: Sustainable Transformation
                </h2>
                <p className="text-muted-foreground mb-4">
                  When you work with us, you're not just getting a project delivered—you're investing in your 
                  organization's long-term capabilities. Your team becomes more confident, more skilled, and 
                  more independent with each engagement.
                </p>
                <p className="text-muted-foreground mb-4">
                  This approach requires more upfront investment in training and mentorship, but the ROI is 
                  exponentially higher. Instead of hiring consultants for every major initiative, you develop 
                  internal expertise that compounds over time.
                </p>
                <p className="text-muted-foreground">
                  Our most successful clients haven't needed us for years—and that's exactly how we designed it.
                </p>
              </div>
            </div>

            <div className="text-center bg-gradient-accent text-accent-foreground rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Ready to Break the Consulting Cycle?
              </h2>
              <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                Let's discuss how we can help you build capabilities that last.
              </p>
              <a
                href="/contact"
                className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Schedule a Discovery Call
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Philosophy;
