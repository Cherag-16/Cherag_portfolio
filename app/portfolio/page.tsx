import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PortfolioHero } from "@/components/portfolio-hero"
import { ProjectsGrid } from "@/components/projects-grid"
import { ProjectStats } from "@/components/project-stats"
import { TechStack } from "@/components/tech-stack"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <PortfolioHero />
        <ProjectStats />
        <ProjectsGrid />
        <TechStack />
      </main>
      <Footer />
    </div>
  )
}
