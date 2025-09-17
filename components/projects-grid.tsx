"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Calendar, Star } from "lucide-react"

const projects = [
  {
    title: "Track My Expenses",
    description:
      "A comprehensive full-stack MERN application for expense tracking with user authentication, data visualization, budget management, and detailed financial analytics.",
    image: "/expense-tracker-app.png",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT", "Chart.js"],
    liveUrl: "https://trackmyexpensess.netlify.app/",
    githubUrl: "#",
    category: "Full Stack",
    featured: true,
    date: "2024",
    status: "Live",
  },
  {
    title: "Chatbox UI",
    description:
      "Modern and responsive chat interface with real-time messaging capabilities, emoji support, file sharing, and beautiful animations.",
    image: "/modern-chat-interface-ui.png",
    technologies: ["React", "CSS3", "JavaScript", "Socket.io"],
    liveUrl: "https://chatbox-frontend.netlify.app/",
    githubUrl: "#",
    category: "Frontend",
    featured: true,
    date: "2024",
    status: "Live",
  },
  {
    title: "Book Store with Redux",
    description:
      "E-commerce book store application with Redux state management, shopping cart functionality, user authentication, and payment integration.",
    image: "/book-store-redux-app.png",
    technologies: ["React", "Redux", "JavaScript", "CSS3", "Local Storage"],
    liveUrl: "https://book-store-with-redux.netlify.app/",
    githubUrl: "#",
    category: "E-commerce",
    featured: true,
    date: "2024",
    status: "Live",
  },
  {
    title: "Redux Todo Manager",
    description:
      "Advanced todo application showcasing Redux state management patterns with features like filtering, sorting, and persistence.",
    image: "/redux-todo-manager.png",
    technologies: ["React", "Redux", "JavaScript", "CSS3"],
    liveUrl: "https://redux-todo-manager.netlify.app/",
    githubUrl: "#",
    category: "Productivity",
    featured: false,
    date: "2024",
    status: "Live",
  },
  {
    title: "Weather Forecast App",
    description:
      "Real-time weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    image: "/weather-forecast-app.png",
    technologies: ["React", "API Integration", "JavaScript", "CSS3"],
    liveUrl: "https://weather-forcastss.netlify.app/",
    githubUrl: "#",
    category: "Utility",
    featured: false,
    date: "2024",
    status: "Live",
  },
  {
    title: "College Form Handler",
    description:
      "Comprehensive form management system for educational institutions with validation, data processing, and reporting features.",
    image: "/college-form-handler.png",
    technologies: ["React", "JavaScript", "Form Validation", "CSS3"],
    liveUrl: "https://handling-college-form-data.netlify.app/",
    githubUrl: "#",
    category: "Education",
    featured: false,
    date: "2024",
    status: "Live",
  },
  {
    title: "Dynamic Feedback System",
    description:
      "Interactive feedback collection system with real-time analytics, rating systems, and administrative dashboard.",
    image: "/dynamic-feedback-system.png",
    technologies: ["React", "JavaScript", "CSS3", "Chart.js"],
    liveUrl: "https://dynamicfeedbac.netlify.app/",
    githubUrl: "#",
    category: "Analytics",
    featured: false,
    date: "2024",
    status: "Live",
  },
  {
    title: "Login Form Validations",
    description:
      "Secure authentication system with comprehensive form validation, password strength checking, and user experience optimization.",
    image: "/login-form-validation.png",
    technologies: ["React", "JavaScript", "Form Validation", "CSS3"],
    liveUrl: "https://loginformvalidations.netlify.app/",
    githubUrl: "#",
    category: "Authentication",
    featured: false,
    date: "2024",
    status: "Live",
  },
  {
    title: "Introduction to Redux",
    description:
      "Educational project demonstrating Redux concepts, state management patterns, and best practices for beginners.",
    image: "/intro-to-redux.png",
    technologies: ["React", "Redux", "JavaScript", "CSS3"],
    liveUrl: "https://introduction-to-redux.netlify.app/",
    githubUrl: "#",
    category: "Educational",
    featured: false,
    date: "2024",
    status: "Live",
  },
]

const categories = [
  "All",
  "Full Stack",
  "Frontend",
  "E-commerce",
  "Utility",
  "Education",
  "Analytics",
  "Authentication",
]

export function ProjectsGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects = projects.filter(
    (project) => selectedCategory === "All" || project.category === selectedCategory,
  )

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
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="secondary" asChild>
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="sm" variant="secondary" asChild>
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </Link>
                  </Button>
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
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center space-x-2 mt-2">
                      <Badge variant="outline">{project.category}</Badge>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{project.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-2 pt-2">
                  <Button size="sm" variant="outline" asChild className="flex-1 bg-transparent">
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                  <Button size="sm" variant="ghost" asChild>
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </Link>
                  </Button>
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
      </div>
    </section>
  )
}
