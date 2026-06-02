import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PortfolioHero } from "@/components/portfolio-hero"
import { ProjectsGrid } from "@/components/projects-grid"
import { ProjectStats } from "@/components/project-stats"

export const metadata: Metadata = {
  title: "Portfolio - Cherag Saxena | Featured Projects & Case Studies",
  description: "Explore Cherag Saxena's portfolio of full-stack web development projects. View detailed case studies, technologies used, and live demos of React, Node.js, and MERN stack applications.",
  keywords: "Portfolio, Web Development Projects, Case Studies, React Projects, Node.js Projects, MERN Stack Projects, Full Stack Applications, Web Development Portfolio",
  openGraph: {
    title: "Portfolio - Cherag Saxena | Featured Projects",
    description: "View my collection of full-stack web development projects and case studies.",
    type: "website",
    url: "https://cheragsaxena.vercel.app/portfolio",
  },
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <PortfolioHero />
        <ProjectStats />
  <ProjectsGrid />
      </main>
      <Footer />
    </div>
  )
}
