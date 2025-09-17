import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"

const blogPosts = [
  {
    title: "Building Scalable React Applications with Modern Hooks",
    excerpt:
      "Learn how to leverage React's latest hooks and patterns to build maintainable and scalable applications that can grow with your business needs.",
    image: "/react-hooks-blog.png",
    category: "React",
    date: "2024-12-15",
    readTime: "8 min read",
    featured: true,
  },
  {
    title: "Full Stack Development with MERN: A Complete Guide",
    excerpt:
      "A comprehensive guide to building full-stack applications using MongoDB, Express.js, React, and Node.js with real-world examples and best practices.",
    image: "/mern-stack-guide.png",
    category: "Web Development",
    date: "2024-12-10",
    readTime: "12 min read",
    featured: true,
  },
  {
    title: "My Journey: From Student to Full Stack Developer",
    excerpt:
      "Sharing my personal journey, challenges faced, lessons learned, and tips for aspiring developers starting their career in tech.",
    image: "/developer-journey-blog.png",
    category: "Career Tips",
    date: "2024-12-05",
    readTime: "6 min read",
    featured: false,
  },
  {
    title: "Mastering Node.js: Advanced Patterns and Best Practices",
    excerpt:
      "Deep dive into advanced Node.js concepts, design patterns, and best practices for building robust backend applications.",
    image: "/nodejs-advanced-blog.png",
    category: "Node.js",
    date: "2024-11-28",
    readTime: "10 min read",
    featured: false,
  },
  {
    title: "CSS Grid vs Flexbox: When to Use Which",
    excerpt:
      "A practical comparison of CSS Grid and Flexbox with real examples, helping you choose the right layout method for your projects.",
    image: "/css-grid-flexbox.png",
    category: "Tutorials",
    date: "2024-11-20",
    readTime: "7 min read",
    featured: false,
  },
  {
    title: "Deploying React Apps: A Complete DevOps Guide",
    excerpt:
      "Step-by-step guide to deploying React applications using modern DevOps practices, CI/CD pipelines, and cloud platforms.",
    image: "/react-deployment-blog.png",
    category: "Tutorials",
    date: "2024-11-15",
    readTime: "9 min read",
    featured: false,
  },
]

export function BlogGrid() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">Latest Articles</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on web development, technology trends, and career growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <Card
              key={post.title}
              className={`group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl bg-card/50 backdrop-blur-sm ${
                post.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4 flex space-x-2">
                  {post.featured && <Badge className="bg-accent text-accent-foreground">Featured</Badge>}
                  <Badge variant="secondary">{post.category}</Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <CardTitle className="font-serif text-xl group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">Cherag Saxena</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-accent">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
