"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Award, Calendar, Building } from "lucide-react"

const certificationCategories = {
  fullstack: {
    title: "Full Stack & Web Development",
    certifications: [
      {
        title: "3-Week Web Development Internship",
        issuer: "VGT (under MSME, India)",
        date: "Jan-Feb 2025",
        description: "Practical exposure to full web stack development; hands-on projects and industry workflows.",
        verified: true,
      },
      {
        title: "Web Dev Internship Completion",
        issuer: "My Job Grow + Techfest IIT Bombay",
        date: "Jan 2025",
        description: "Advanced projects with exceptional performance and mentor feedback.",
        verified: true,
      },
      {
        title: "Web Dev Course Completion",
        issuer: "My Job Grow",
        date: "Dec 2024",
        description: "15-hour hands-on web development course covering modern front-end and back-end basics.",
        verified: true,
      },
    ],
  },
  frontend: {
    title: "Frontend & JavaScript Ecosystem (DevTown Series)",
    certifications: [
      {
        title: "Instagram Auth Clone (7 days)",
        issuer: "DevTown",
        date: "2024",
        description: "Node.js, Express and JavaScript-focused hands-on 7-day project (Instagram Auth clone).",
        verified: true,
      },
      {
        title: "Amazon Clone (7 days)",
        issuer: "DevTown / Google DSC",
        date: "2024",
        description: "HTML, CSS and JS mini-project building an Amazon-like storefront.",
        verified: true,
      },
      {
        title: "JS & React Bootcamp",
        issuer: "DevTown / GDSC GIET",
        date: "2024",
        description: "Comprehensive React.js bootcamp (A–Z) covering component patterns and state management.",
        verified: true,
      },
      {
        title: "Intro to C++ and DSA",
        issuer: "DevTown + GDSC",
        date: "2024",
        description: "Foundations of data structures and algorithms using C++.",
        verified: true,
      },
      {
        title: "Deep Learning & Deployment",
        issuer: "DevTown + GDSC",
        date: "2024",
        description: "Deep learning fundamentals and web deployment workflows.",
        verified: true,
      },
    ],
  },
  cloud: {
    title: "Cloud & Cybersecurity",
    certifications: [
      {
        title: "Microsoft Certified: Azure Fundamentals",
        issuer: "Microsoft (Certiport)",
        date: "June 2025",
        description: "Score: 900/1000 — Verification ID: Cx35-Dw8X",
        verified: true,
      },
      {
        title: "AWS Cloud Practitioner Essentials",
        issuer: "AWS Training & Certification",
        date: "July 2025",
        description: "Core AWS cloud concepts and services (completed July 05, 2025).",
        verified: true,
      },
      {
        title: "Getting Started with Amazon Location Service",
        issuer: "AWS Training & Certification",
        date: "July 2025",
        description: "Foundational knowledge of Amazon Location Service (completed July 04, 2025).",
        verified: true,
      },
      {
        title: "Cybersecurity Certificate",
        issuer: "SheKunj + Skill India",
        date: "June 2025",
        description: "Intro to Cybersecurity (Gov. of India-backed program).",
        verified: true,
      },
    ],
  },
  aiml: {
    title: "AI/ML & Emerging Tech",
    certifications: [
      {
        title: "UAS Bootcamp 4.0 – AI/ML for Drones",
        issuer: "IIT Indore + MeitY",
        date: "2024",
        description: "40+ hours on communication, navigation, and AI for UAVs",
        verified: true,
      },
      {
        title: "GenAI Powered Data Analytics",
        issuer: "Forage (Tata Collaboration)",
        date: "2025",
        description: "Hands-on simulation: EDA, risk profiling, AI delinquency prediction, business reporting.",
        verified: true,
      },
      {
        title: "Introduction to Generative AI Concepts",
        issuer: "Microsoft Learn",
        date: "June 29, 2025",
        description: "Foundational GenAI principles and applications.",
        verified: true,
      },
      {
        title: "Oracle Cloud Infrastructure – AI Foundations",
        issuer: "Oracle University",
        date: "2025",
        description: "Certified Foundations Associate (valid through Aug 2027); AI in Oracle Cloud.",
        verified: true,
      },
      {
        title: "Deep Learning & Web Deployment",
        issuer: "DevTown + GDSC",
        date: "2024",
        description: "ML fundamentals + full-stack deployment training",
        verified: true,
      },
    ],
  },
  security: {
    title: "Cybersecurity & Others",
    certifications: [
      {
        title: "Cybersecurity Certificate",
        issuer: "SheKunj + Skill India",
        date: "June 2025",
        description: "Intro to Cybersecurity, Gov. of India-backed",
        verified: true,
      },
      {
        title: "Winter School: Zero to IoT Hero",
        issuer: "SAGE University, Indore",
        date: "Mar 2025",
        description: "Two-week bootcamp on IoT systems",
        verified: true,
      },
      {
        title: "Python Workshop",
        issuer: "S Edutech",
        date: "June 2024",
        description: "Introductory programming workshop",
        verified: true,
      },
    ],
  },
  iot: {
    title: "IoT, Cross-Platform & Hardware",
    certifications: [
      {
        title: "Winter School: Zero to IoT Hero",
        issuer: "SAGE University, Indore",
        date: "Mar 2025",
        description: "Two-week bootcamp on IoT systems.",
        verified: true,
      },
      {
        title: "Robo Race Participant",
        issuer: "SAGE Euphoria 2024",
        date: "April 2024",
        description: "Robotics competition participation.",
        verified: true,
      },
      {
        title: "Google Flutter – Intermediate",
        issuer: "Infosys Springboard",
        date: "July 5, 2025",
        description: "Intermediate-level Flutter development.",
        verified: true,
      },
    ],
  },
  events: {
    title: "Events, Symposiums & Soft Skills",
    certifications: [
      {
        title: "SAGE Symposium 2.0",
        issuer: "IIT Indore",
        date: "2024-2025",
        description: "Knowledge exchange and speaker engagement.",
        verified: true,
      },
      {
        title: "Startup Spark 2024",
        issuer: "SAGE University",
        date: "2024",
        description: "Participated in entrepreneurship & innovation summit.",
        verified: true,
      },
      {
        title: "Appreciation Awards (x3)",
        issuer: "DevTown",
        date: "Feb 2024",
        description: "For community contributions and support.",
        verified: true,
      },
      {
        title: "Expert Session – Java Programming",
        issuer: "SAGE University, Indore",
        date: "May 7, 2024",
        description: "Industry-oriented Java session.",
        verified: true,
      },
      {
        title: "Expert Session – Python Programming",
        issuer: "SAGE University, Indore",
        date: "May 8, 2024",
        description: "Industry-oriented Python session.",
        verified: true,
      },
    ],
  },
}

export function CertificationShowcase() {
  const [activeCategory, setActiveCategory] = useState("fullstack")

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-muted/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-primary drop-shadow mb-4">Certifications & Training</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <span className="font-semibold text-primary">33+</span> verified certifications across multiple domains, showcasing continuous learning and expertise.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {Object.entries(certificationCategories).map(([key, category]) => (
              <Button
                key={key}
                variant={activeCategory === key ? "default" : "outline"}
                onClick={() => setActiveCategory(key)}
                className="mb-2 shadow-md rounded-full px-6 py-2 text-base font-medium"
              >
                {category.title}
              </Button>
            ))}
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificationCategories[activeCategory as keyof typeof certificationCategories].certifications.map(
              (cert, index) => (
                <Card
                  key={cert.title}
                  className="group border-none shadow-xl bg-white/60 dark:bg-card/60 backdrop-blur-lg rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-primary/10 animate-fade-in"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-primary drop-shadow" />
                        {cert.verified && <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs">Verified</Badge>}
                      </div>
                      {/* External link button hidden for now, can be enabled if cert URLs available */}
                    </div>
                    <CardTitle className="font-serif text-lg text-foreground leading-tight mt-2 mb-1">
                      {cert.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Building className="h-4 w-4 text-primary/70" />
                      <span className="font-medium text-foreground">{cert.issuer}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 text-primary/70" />
                      <span>{cert.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-1">{cert.description}</p>
                  </CardContent>
                </Card>
              ),
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        .animate-fade-in {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s forwards;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  )
}
