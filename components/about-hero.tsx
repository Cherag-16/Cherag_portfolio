"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, MapPin, GraduationCap, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"

export function AboutHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleDownloadResume = () => {
    window.open('/Cherag_Saxena_Resume.pdf', '_blank')
  }

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={cn("space-y-8", isVisible ? "animate-fade-in-up" : "opacity-0")}>
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-foreground leading-tight">
                About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Passionate developer crafting digital experiences with code, creativity, and dedication.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-card border border-border">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium text-foreground">Location</div>
                  <div className="text-sm text-muted-foreground">Indore, India</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-card border border-border">
                <GraduationCap className="h-5 w-5 text-accent" />
                <div>
                  <div className="font-medium text-foreground">Education</div>
                  <div className="text-sm text-muted-foreground">B.Tech Student</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-card border border-border">
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium text-foreground">Experience</div>
                  <div className="text-sm text-muted-foreground">2+ Years</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-card border border-border">
                <Download className="h-5 w-5 text-accent" />
                <div>
                  <div className="font-medium text-foreground">Resume</div>
                  <Button variant="link" size="sm" className="text-sm text-primary hover:text-accent p-0 h-auto">
                    <a href="/Cherag_Saxena_Resume.pdf" download>Download PDF</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className={cn("relative", isVisible ? "animate-fade-in-up delay-200" : "opacity-0")}>
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8">
                <img
                  src="/professional-developer-portrait.webp"
                  alt="Cherag Saxena"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white font-serif font-bold text-lg">
                28+
                <br />
                Certs
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
