"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Code, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleDownloadResume = () => {
    // fallback to open resume if JS is used instead of link
    window.open('/Cherag_Saxena_Resume.pdf', '_blank')
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className={cn("space-y-4", isVisible ? "animate-fade-in-up" : "opacity-0")}>
            <div className="flex items-center justify-center space-x-2 text-primary mb-4">
              <Code className="h-6 w-6" />
              <span className="text-sm font-medium tracking-wide uppercase">Full Stack Developer</span>
              <Sparkles className="h-6 w-6" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-black text-foreground leading-tight">
              Crafting{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Code</span>,
              <br />
              Building{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Futures</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className={cn("space-y-4", isVisible ? "animate-fade-in-up delay-200" : "opacity-0")}>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Hi, I'm <span className="font-semibold text-primary font-serif">Cherag Saxena</span> - a passionate Full
              Stack Developer with <span className="font-semibold text-accent">33+ certifications</span> and a love for
              innovation.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Currently pursuing B.Tech in Computer Engineering at Sage University, building amazing web experiences
              with the MERN stack.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className={cn(
              "flex flex-col sm:flex-row gap-4 justify-center items-center",
              isVisible ? "animate-fade-in-up delay-400" : "opacity-0",
            )}
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold animate-pulse-glow"
            >
              <Link href="/contact">
                Hire Me
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <Link href="/portfolio">
                View Projects
                <Code className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            {/* <Button variant="ghost" size="lg" className="px-8 py-6 text-lg font-semibold text-accent hover:bg-accent/10">
              <a href="/Cherag_Saxena_Resume.pdf" download className="flex items-center">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button> */}
          </div>

          {/* Quick Stats Preview */}
          <div
            className={cn(
              "grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 max-w-2xl mx-auto",
              isVisible ? "animate-fade-in-up delay-600" : "opacity-0",
            )}
          >
            {[
              { number: "33+", label: "Certifications" },
              { number: "15+", label: "Projects" },
              { number: "3", label: "Internships" },
              { number: "150+", label: "Cups of Tea" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-serif font-bold text-primary">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
