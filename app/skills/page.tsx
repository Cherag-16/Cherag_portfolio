import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SkillsHero } from "@/components/skills-hero"
import { TechStack } from "@/components/tech-stack"
import { ProfessionalSkills } from "@/components/professional-skills"

export const metadata: Metadata = {
  title: "Skills - Cherag Saxena | Technical & Professional Expertise",
  description: "Discover Cherag Saxena's technical skills and expertise. Expert in React, Node.js, JavaScript, TypeScript, MongoDB, and full-stack web development with 30+ certifications.",
  keywords: "Developer Skills, Technical Skills, React, Node.js, JavaScript, TypeScript, MongoDB, Full Stack Development, Web Development Skills, Programming Languages",
  openGraph: {
    title: "Skills - Cherag Saxena | Technical Expertise",
    description: "View detailed technical skills and professional expertise in modern web development.",
    type: "website",
    url: "https://cheragsaxena.vercel.app/skills",
  },
}

export default function SkillsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <SkillsHero />
        <TechStack />
        <ProfessionalSkills />
      </main>
      <Footer />
    </div>
  )
}
