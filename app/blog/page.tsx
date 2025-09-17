import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BlogHero } from "@/components/blog-hero"
import { BlogGrid } from "@/components/blog-grid"
import { BlogCategories } from "@/components/blog-categories"

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <BlogHero />
        <BlogCategories />
        <BlogGrid />
      </main>
      <Footer />
    </div>
  )
}
