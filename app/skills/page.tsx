import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SkillsHero } from "@/components/skills-hero"
import { TechnicalSkills } from "@/components/technical-skills"
import { CertificationShowcase } from "@/components/certification-showcase"
import { SkillsTimeline } from "@/components/skills-timeline"

export default function SkillsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <SkillsHero />
        <TechnicalSkills />
        <CertificationShowcase />
        <SkillsTimeline />
      </main>
      <Footer />
    </div>
  )
}
