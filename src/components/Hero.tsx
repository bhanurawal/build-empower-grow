import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-consulting.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 bg-gradient-subtle -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight">
              ForgeLeap.
              <br />
              <span className="text-primary">Deliver.</span>
              <br />
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Transform.
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl">
              We don't just deliver projects—we transform your team's capabilities. 
              Build sustainable success through empowerment, not dependency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-gradient-primary shadow-medium hover:shadow-strong transition-all">
                <Link to="/contact">
                  Book Discovery Call
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/philosophy">
                  Our Philosophy
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Client Retention</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Teams Empowered</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">3x</p>
                <p className="text-sm text-muted-foreground">Faster Delivery</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img
                src={heroImage}
                alt="Team collaboration and mentoring"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-medium max-w-xs">
              <p className="font-semibold">
                "They didn't just deliver—they made us capable of delivering ourselves."
              </p>
              <p className="text-sm mt-2 opacity-90">— Fortune 500 CIO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
