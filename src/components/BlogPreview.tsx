import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const blogPosts = [
  {
    title: "Why Traditional Consulting is Broken",
    excerpt: "Exploring how the traditional consulting model creates dependency rather than capability.",
    date: "March 15, 2025",
    category: "Industry Insights",
  },
  {
    title: "Building a Culture of Continuous Improvement",
    excerpt: "Practical frameworks for establishing sustainable delivery excellence within your organization.",
    date: "March 10, 2025",
    category: "Best Practices",
  },
  {
    title: "The ROI of Empowerment",
    excerpt: "Measuring the long-term value of building internal capabilities versus hiring external teams.",
    date: "March 5, 2025",
    category: "Thought Leadership",
  },
];

const BlogPreview = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Insights & <span className="text-accent">Perspectives</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Thought leadership on transformation, enablement, and sustainable delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card key={index} className="border-border shadow-soft hover:shadow-medium transition-all">
              <CardHeader>
                <div className="text-sm text-accent font-medium mb-2">{post.category}</div>
                <CardTitle className="text-xl font-display line-clamp-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar size={14} className="mr-2" />
                  {post.date}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link to="/blog">Read All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
