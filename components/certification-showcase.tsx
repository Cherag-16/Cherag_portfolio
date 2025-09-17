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
        verified: false,
      },
      {
        title: "Amazon Clone (7 days)",
        issuer: "DevTown / Google DSC",
        date: "2024",
        description: "HTML, CSS and JS mini-project building an Amazon-like storefront.",
        verified: false,
      },
      {
        title: "JS & React Bootcamp",
        issuer: "DevTown / GDSC GIET",
        date: "2024",
        description: "Comprehensive React.js bootcamp (A–Z) covering component patterns and state management.",
        verified: false,
      },
      {
        title: "Intro to C++ and DSA",
        issuer: "DevTown + GDSC",
        date: "2024",
        description: "Foundations of data structures and algorithms using C++.",
        verified: false,
      },
      {
        title: "Deep Learning & Deployment",
        issuer: "DevTown + GDSC",
        date: "2024",
        description: "Deep learning fundamentals and web deployment workflows.",
        verified: false,
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
        verified: false,
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
        verified: false,
      },
      {
        title: "Startup Spark 2024",
        issuer: "SAGE University",
        date: "2024",
        description: "Participated in entrepreneurship & innovation summit.",
        verified: false,
      },
      {
        title: "Appreciation Awards (x3)",
        issuer: "DevTown",
        date: "Feb 2024",
        description: "For community contributions and support.",
        verified: false,
      },
      {
        title: "Expert Session – Java Programming",
        issuer: "SAGE University, Indore",
        date: "May 7, 2024",
        description: "Industry-oriented Java session.",
        verified: false,
      },
      {
        title: "Expert Session – Python Programming",
        issuer: "SAGE University, Indore",
        date: "May 8, 2024",
        description: "Industry-oriented Python session.",
        verified: false,
      },
    ],
  },
}

export function CertificationShowcase() {
  const [activeCategory, setActiveCategory] = useState("fullstack")

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">Certifications & Training</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            33+ verified certifications across multiple domains, showcasing continuous learning and expertise.
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
                className="mb-2"
              >
                {category.title}
              </Button>
            ))}
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationCategories[activeCategory as keyof typeof certificationCategories].certifications.map(
              (cert, index) => (
                <Card
                  key={cert.title}
                  className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border hover:border-primary/50 bg-card/50 backdrop-blur-sm"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-2">
                        <Award className="h-5 w-5 text-primary" />
                        {cert.verified && <Badge variant="secondary">Verified</Badge>}
                      </div>
                      <Button variant="ghost" size="icon">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                    <CardTitle className="font-serif text-lg text-foreground leading-tight">{cert.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Building className="h-4 w-4" />
                      <span>{cert.issuer}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{cert.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>
                  </CardContent>
                </Card>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
