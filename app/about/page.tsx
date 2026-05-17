import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { AboutStory } from "@/components/about-story"
import { Education } from "@/components/education"
import { Achievements } from "@/components/achievements"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <AboutHero />
        <AboutStory />
        <Education />
        <Achievements />
      </main>
      <Footer />
    </div>
  )
}
