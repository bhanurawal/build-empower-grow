import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

const blogPosts = [
  {
    title: "Why Traditional Consulting is Broken",
    excerpt: "The consulting industry has a fundamental misalignment: firms profit from keeping clients dependent. Let's explore why this model fails organizations and what alternatives exist.",
    content: "Traditional consulting creates a dependency cycle that costs organizations millions while building no internal capabilities...",
    date: "March 15, 2025",
    readTime: "8 min read",
    category: "Industry Insights",
  },
  {
    title: "Building a Culture of Continuous Improvement",
    excerpt: "Practical frameworks for establishing sustainable delivery excellence within your organization, including Kaizen principles adapted for modern tech teams.",
    content: "Continuous improvement isn't just a manufacturing concept—it's essential for modern delivery organizations...",
    date: "March 10, 2025",
    readTime: "10 min read",
    category: "Best Practices",
  },
  {
    title: "The ROI of Empowerment",
    excerpt: "Measuring the long-term value of building internal capabilities versus hiring external teams. Real data from Fortune 500 transformations.",
    content: "When you invest in empowerment, the returns compound exponentially. Here's the data...",
    date: "March 5, 2025",
    readTime: "12 min read",
    category: "Thought Leadership",
  },
  {
    title: "Scaling Agile Without Losing Your Soul",
    excerpt: "How fast-growth companies can adopt enterprise practices while maintaining startup agility and culture.",
    content: "Scaling doesn't mean bureaucracy. Here's how to grow up without growing old...",
    date: "February 28, 2025",
    readTime: "9 min read",
    category: "Agile Transformation",
  },
  {
    title: "The Mentor's Handbook",
    excerpt: "Essential principles for effective technical mentoring, drawn from thousands of hours coaching delivery teams.",
    content: "Great mentors aren't just technical experts—they're empathy experts. Here's what we've learned...",
    date: "February 22, 2025",
    readTime: "11 min read",
    category: "Best Practices",
  },
  {
    title: "When to Build vs. When to Buy",
    excerpt: "A decision framework for technology choices that considers not just cost, but organizational learning and capability building.",
    content: "The build vs. buy decision should factor in knowledge transfer and team development...",
    date: "February 15, 2025",
    readTime: "7 min read",
    category: "Strategy",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
              Insights & <span className="text-primary">Perspectives</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Thought leadership on transformation, enablement, and sustainable delivery excellence.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="border-border shadow-soft hover:shadow-medium transition-all cursor-pointer group">
                  <CardHeader>
                    <Badge className="w-fit mb-3">{post.category}</Badge>
                    <CardTitle className="text-xl font-display line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center bg-gradient-subtle rounded-2xl p-8 md:p-12 border border-border">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Stay Updated
              </h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Subscribe to receive our latest insights on organizational transformation and delivery excellence.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
