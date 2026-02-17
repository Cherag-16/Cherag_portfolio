"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Calendar, Star } from "lucide-react"
import projectsData from "@/data/projects.json"
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
          {filteredProjects.map((project, index) => (
            <Card
              key={project.title}
              className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl bg-card/50 backdrop-blur-sm"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden">
                <Link onClick={handleProjectClick} href={`/portfolio/${project.slug}`} className="block">
                  <img src={project.images?.[0] || project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
                </Link>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.githubUrl ? (
                    <Button size="sm" variant="secondary" asChild>
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </Link>
                    </Button>
                  ) : null}
                </div>
                <div className="absolute top-4 left-4 flex space-x-2">
                  {project.featured && (
                    <Badge className="bg-accent text-accent-foreground">
                      <Star className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                  <Badge variant="secondary">{project.status}</Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="font-serif text-xl group-hover:text-primary transition-colors">
                      <Link onClick={handleProjectClick} href={`/portfolio/${project.slug}`}>{project.title}</Link>
                    </CardTitle>
                    <div className="flex items-center space-x-2 mt-2">
                      <Badge variant="outline">{project.category || (project.technologies?.includes('Node.js') ? 'Fullstack' : 'Frontend')}</Badge>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{project.date || '2024'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <Link onClick={handleProjectClick} href={`/portfolio/${project.slug}`} className="text-muted-foreground block text-sm leading-relaxed">{project.shortDescription || project.description}</Link>

                <div className="flex flex-wrap gap-2">
                  {(project.technologies || []).map((tech: string) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-2 pt-2">
                  {project.githubUrl ? (
                    <Button size="sm" variant="ghost" asChild>
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </Link>
                    </Button>
                  ) : null}
                </div>
              </CardContent>
            </Card>
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
