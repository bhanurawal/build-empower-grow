import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PhilosophyPreview = () => {
  return (
    <section className="py-24 bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Empowerment Over Dependency
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Traditional consulting creates long-term dependencies. We build long-term capabilities.
            </p>
            <p className="text-lg mb-8 opacity-90">
              Our approach is fundamentally different: we succeed when you no longer need us. 
              Every engagement is designed to transfer knowledge, build confidence, and establish 
              sustainable practices within your organization.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/philosophy">Learn Our Philosophy</Link>
            </Button>
          </div>

          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-accent-foreground">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Assess & Align</h3>
                <p className="opacity-90">
                  Understand your team's current capabilities and project goals.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-accent-foreground">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Embed & Enable</h3>
                <p className="opacity-90">
                  Work side-by-side with your team, transferring knowledge in real-time.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-accent-foreground">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Transition & Transform</h3>
                <p className="opacity-90">
                  Gradually step back as your team takes full ownership and control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophyPreview;
