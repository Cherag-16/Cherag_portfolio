import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ExperienceHero } from "@/components/experience-hero"
import { WorkTimeline } from "@/components/work-timeline"
import { InternshipDetails } from "@/components/internship-details"
import { ProfessionalSkills } from "@/components/professional-skills"

export default function ExperiencePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ExperienceHero />
        <InternshipDetails />
        <WorkTimeline />
        <ProfessionalSkills />
      </main>
      <Footer />
    </div>
  )
}
