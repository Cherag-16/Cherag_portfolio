"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Filter } from "lucide-react"
import { cn } from "@/lib/utils"

export function PortfolioHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className={cn("space-y-4", isVisible ? "animate-fade-in-up" : "opacity-0")}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-foreground leading-tight">
              My{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A collection of projects showcasing my journey in full-stack development, from simple web applications to
              complex MERN stack solutions.
            </p>
          </div>

          <div
            className={cn(
              "flex flex-col sm:flex-row gap-4 justify-center items-center",
              isVisible ? "animate-fade-in-up delay-200" : "opacity-0",
            )}
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold"
            >
              <a href="https://github.com/cherag-16" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <Filter className="mr-2 h-5 w-5" />
              Filter Projects
            </Button>
          </div>

          <div
            className={cn(
              "grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto",
              isVisible ? "animate-fade-in-up delay-400" : "opacity-0",
            )}
          >
            <div className="text-center p-4 rounded-lg bg-card border border-border">
              <div className="text-3xl font-serif font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Projects Built</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card border border-border">
              <div className="text-3xl font-serif font-bold text-accent">100%</div>
              <div className="text-sm text-muted-foreground">Live & Deployed</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card border border-border">
              <div className="text-3xl font-serif font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Tech Stacks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
