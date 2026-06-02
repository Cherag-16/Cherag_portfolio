import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { AboutStory } from "@/components/about-story"
import { Education } from "@/components/education"
import { Achievements } from "@/components/achievements"

export const metadata: Metadata = {
  title: "About - Cherag Saxena | Full Stack Developer Profile",
  description: "Learn about Cherag Saxena's background, education, certifications, and journey as a full-stack developer. Passionate about creating innovative web solutions.",
  keywords: "About Cherag Saxena, Developer Profile, Background, Education, Certifications, Full Stack Developer, Career Journey",
  openGraph: {
    title: "About - Cherag Saxena | Full Stack Developer",
    description: "Discover my journey, skills, and achievements as a full-stack developer.",
    type: "website",
    url: "https://cheragsaxena.vercel.app/about",
  },
}

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
