"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Building, Calendar, MapPin, Award, Code, ChevronDown } from "lucide-react"

interface TimelineItem {
  title: string
  company: string
  duration: string
  location: string
  type: string
  status: string
  description: string
  responsibilities: string[]
  achievements: string[]
  technologies: string[]
  skills: string[]
  projects?: Array<{
    id: number
    name: string
    description: string
    link: string
  }>
}

interface ExperienceTimelineViewProps {
  items: TimelineItem[]
}

export function ExperienceTimelineView({ items }: ExperienceTimelineViewProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">Professional Timeline</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A journey of growth, learning, and professional development
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-primary/30" />

          {/* Timeline items */}
          <div className="space-y-8">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="flex-shrink-0 flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-background border-4 border-primary rounded-full flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() =>
                      setExpandedIndex(expandedIndex === index ? null : index)
                    }
                  >
                    <Award className="h-6 w-6 text-primary" />
                  </motion.div>
                </div>

                {/* Content card */}
                <div className="flex-1">
                  <motion.div
                    layout
                    onClick={() =>
                      setExpandedIndex(expandedIndex === index ? null : index)
                    }
                    className="cursor-pointer"
                  >
                    <Card className="hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <CardTitle className="text-xl sm:text-2xl font-serif text-foreground mb-2">
                              {item.title}
                            </CardTitle>
                            <div className="flex flex-wrap gap-2 mb-3">
                              <Badge className="bg-primary/20 text-primary border-primary/30">
                                <Building className="h-3 w-3 mr-1" />
                                {item.company}
                              </Badge>
                              <Badge variant="outline" className="border-primary/30">
                                <MapPin className="h-3 w-3 mr-1" />
                                {item.location}
                              </Badge>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="secondary">
                                <Calendar className="h-3 w-3 mr-1" />
                                {item.duration}
                              </Badge>
                              <Badge className="bg-green-500/20 text-green-700 dark:text-green-400 border-green-500/30">
                                {item.status}
                              </Badge>
                            </div>
                          </div>
                          <motion.div
                            animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="h-6 w-6 text-muted-foreground" />
                          </motion.div>
                        </div>
                      </CardHeader>

                      {/* Expandable content */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: expandedIndex === index ? "auto" : 0,
                          opacity: expandedIndex === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <CardContent className="space-y-6 border-t border-border/50 pt-6">
                          {/* Description */}
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Overview</h4>
                            <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                          </div>

                          {/* Responsibilities */}
                          <div>
                            <h4 className="font-semibold text-foreground mb-3">Key Responsibilities</h4>
                            <ul className="space-y-2">
                              {item.responsibilities.map((resp, i) => (
                                <li key={i} className="flex gap-3 text-muted-foreground">
                                  <span className="text-primary mt-1">•</span>
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Achievements */}
                          <div>
                            <h4 className="font-semibold text-foreground mb-3">Achievements</h4>
                            <ul className="space-y-2">
                              {item.achievements.map((achievement, i) => (
                                <li key={i} className="flex gap-3 text-muted-foreground">
                                  <Award className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Technologies */}
                          <div>
                            <h4 className="font-semibold text-foreground mb-3">Technologies & Tools</h4>
                            <div className="flex flex-wrap gap-2">
                              {item.technologies.map((tech) => (
                                <Badge
                                  key={tech}
                                  variant="outline"
                                  className="bg-primary/10 border-primary/30 text-primary"
                                >
                                  <Code className="h-3 w-3 mr-1" />
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Skills */}
                          <div>
                            <h4 className="font-semibold text-foreground mb-3">Skills Developed</h4>
                            <div className="flex flex-wrap gap-2">
                              {item.skills.map((skill) => (
                                <Badge key={skill} className="bg-accent/20 text-accent border-accent/30">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Projects */}
                          {item.projects && item.projects.length > 0 && (
                            <div>
                              <h4 className="font-semibold text-foreground mb-3">Projects Contributed</h4>
                              <div className="space-y-3">
                                {item.projects.map((project) => (
                                  <a
                                    key={project.id}
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors border border-border/30"
                                  >
                                    <p className="font-medium text-primary hover:underline">{project.name}</p>
                                    <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </motion.div>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
