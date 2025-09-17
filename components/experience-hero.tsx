"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, Briefcase, Calendar, Award } from "lucide-react"
import { cn } from "@/lib/utils"

export function ExperienceHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleDownloadResume = () => {
    window.open('/Cherag_Saxena_Resume.pdf', '_blank')
  }

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className={cn("space-y-4", isVisible ? "animate-fade-in-up" : "opacity-0")}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-foreground leading-tight">
              Work{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Experience</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              My professional journey through internships, certifications, and hands-on experience in full-stack
              development and emerging technologies.
            </p>
          </div>

          <div
            className={cn(
              "grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto",
              isVisible ? "animate-fade-in-up delay-200" : "opacity-0",
            )}
          >
            <div className="text-center p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-serif font-bold text-primary">3+</div>
              <div className="text-sm text-muted-foreground">Internships</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-card border border-border hover:border-accent/50 transition-colors">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-3">
                <Calendar className="h-6 w-6 text-accent" />
              </div>
              <div className="text-3xl font-serif font-bold text-accent">2+</div>
              <div className="text-sm text-muted-foreground">Years Learning</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-serif font-bold text-primary">33+</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
          </div>

          <div className={cn("", isVisible ? "animate-fade-in-up delay-400" : "opacity-0")}>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent">
              <a href="/Cherag_Saxena_Resume.pdf" download className="flex items-center">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
