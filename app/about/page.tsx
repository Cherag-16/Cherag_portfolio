import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { AboutStory } from "@/components/about-story"
import { Education } from "@/components/education"
import { Achievements } from "@/components/achievements"
import { CertificationShowcase } from "@/components/certification-showcase"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <AboutHero />
        <AboutStory />
        <Education />
        <Achievements />
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <CertificationShowcase />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
