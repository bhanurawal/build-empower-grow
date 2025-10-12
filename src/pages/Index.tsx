import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import CaseStudiesPreview from "@/components/CaseStudiesPreview";
import PhilosophyPreview from "@/components/PhilosophyPreview";
import BlogPreview from "@/components/BlogPreview";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ServicesOverview />
      <CaseStudiesPreview />
      <PhilosophyPreview />
      <BlogPreview />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
