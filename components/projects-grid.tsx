"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Calendar, Star } from "lucide-react"
import projectsData from "@/data/projects.json"
import { FlipCard } from "@/components/flip-card"
const projects = ((projectsData as unknown) as any[]) || []

const categories = ["All", "Fullstack", "Frontend"]

export function ProjectsGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  useEffect(() => {
    // Restore scroll position when returning to this page
    const savedScrollPos = sessionStorage.getItem("portfolioScrollPos")
    if (savedScrollPos) {
      window.scrollTo(0, parseInt(savedScrollPos))
      sessionStorage.removeItem("portfolioScrollPos")
    }
  }, [])

  const handleProjectClick = () => {
    // Save current scroll position before navigating
    sessionStorage.setItem("portfolioScrollPos", window.scrollY.toString())
  }

  const filteredProjects = projects.filter((project: any) => {
    if (selectedCategory === 'All') return true
    if (selectedCategory === 'Fullstack') {
      return (
        project.fullstack === true
      )
    }
    if (selectedCategory === 'Frontend') {
      // Treat as frontend when not explicitly marked fullstack
      const isFull = project.fullstack === true
      return (
        !isFull && (
          (project.technologies?.includes('React')) ||
          (project.techStack?.includes('React'))
        )
      )
    }
    return true
  })

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of web applications, showcasing expertise in modern technologies and best practices.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <FlipCard
              key={project.title}
              project={project}
              onClick={handleProjectClick}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        )}

        {/* Link to all projects on GitHub */}
        <div className="mt-10 text-center">
          <Button asChild variant="ghost">
            <a href="https://github.com/cherag-16" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2">
              <Github className="h-4 w-4" />
              <span>View all projects on GitHub</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
