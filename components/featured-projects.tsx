"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import projectsData from "@/data/projects.json"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal"
import { motion } from "framer-motion"

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

  const handleProjectClick = () => {
    // Save current scroll position before navigating
    sessionStorage.setItem("portfolioScrollPos", window.scrollY.toString())
  }

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up" className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore some of my best work. Click a project to view details in the portfolio.
          </p>
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.2} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <StaggerItem key={project.slug || project.title} direction="up">
              <Link onClick={handleProjectClick} href={`/portfolio/${project.slug}`} className="block h-full group">
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="h-full"
                >
                  <Card
                    className="group overflow-hidden border-border/30 hover:border-primary/50 transition-all duration-300 hover:shadow-xl glass-card cursor-pointer h-full flex flex-col"
                    onMouseEnter={() => setHoveredProject(index)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <div className="relative overflow-hidden">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                      >
                        <Image
                          src={project.images?.[0] || "/placeholder.svg"}
                          alt={project.title}
                          width={800}
                          height={480}
                          className="w-full h-48 object-cover transition-transform duration-300"
                        />
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <CardHeader className="flex-1">
                      <CardTitle className="font-serif text-lg sm:text-xl group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {project.shortDescription}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs dark:bg-primary/20 dark:text-primary-foreground dark:border-primary/40 bg-primary/10 text-primary border-primary/20">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal direction="up" className="text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/50 text-primary hover:border-primary hover:bg-primary/10 hover:text-primary dark:hover:text-primary-foreground glass transition-all duration-300"
            >
              <Link href="/portfolio" className="flex items-center text-primary">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
