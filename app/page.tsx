import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { Testimonials } from "@/components/testimonials"
import { FeaturedProjects } from "@/components/featured-projects"
import { CallToAction } from "@/components/call-to-action"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturedProjects />
        <CallToAction />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
