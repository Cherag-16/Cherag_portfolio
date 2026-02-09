"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import projectsData from "@/data/projects.json"

type Project = {
  slug: string
  title: string
  shortDescription: string
  problem: string
  role: string
  techStack: string[]
  challenges: string[]
  solution?: string
  images?: string[]
  repo?: string
  demo?: string
  featured?: boolean
}

const featuredProjects = ((projectsData as unknown) as Project[] || []).filter((p) => p.featured)

export function FeaturedProjects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-2">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore some of my best work. Click a project to view details in the portfolio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <Link href={`/portfolio/${project.slug}`} key={project.slug || project.title} className="block">
              <Card
                className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl bg-card/50 backdrop-blur-sm cursor-pointer"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.images?.[0] || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={480}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-serif text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.techStack.slice(0,3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <Link href="/portfolio">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
