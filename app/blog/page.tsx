import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BlogGrid } from "@/components/blog-grid"

export const metadata: Metadata = {
  title: "Blog - Cherag Saxena | Web Development Articles & Tutorials",
  description: "Read articles and tutorials about full-stack web development, React, Node.js, MERN stack, and modern web technologies by Cherag Saxena.",
  keywords: "Web Development Blog, React Articles, Node.js Tutorials, JavaScript Tips, Web Development Guide, Coding Articles, Tech Blog",
  openGraph: {
    title: "Blog - Cherag Saxena | Web Development Articles",
    description: "Explore articles about modern web development and best practices.",
    type: "website",
    url: "https://cheragsaxena.vercel.app/blog",
  },
}

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <BlogGrid />
      </main>
      <Footer />
    </div>
  )
}
