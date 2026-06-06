"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

interface FlipCardProps {
  project: {
    slug: string
    title: string
    shortDescription: string
    images?: string[]
    image?: string
    techStack: string[]
    featured?: boolean
    status?: string
    category?: string
    fullstack?: boolean
  }
  onClick?: () => void
}

export function FlipCard({ project, onClick }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleMouseEnter = () => setIsFlipped(true)
  const handleMouseLeave = () => setIsFlipped(false)

  return (
    <Link onClick={onClick} href={`/portfolio/${project.slug}`} className="block h-full">
      <motion.div
        className="h-full cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        initial={{ rotateY: 0 }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        style={{ perspective: 1000 }}
      >
        <Card className="h-full overflow-hidden border-border/30 hover:border-primary/50 transition-all duration-300 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm relative">
          {/* Front side */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 1, rotateY: 0 }}
            animate={{ opacity: isFlipped ? 0 : 1, rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6 }}
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="relative h-full flex flex-col">
              {/* Image */}
              <div className="relative w-full h-40 overflow-hidden bg-muted">
                <Image
                  src={project.images?.[0] || project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Badges */}
              <div className="absolute top-3 left-3 right-3 flex gap-2">
                {project.featured && (
                  <Badge className="bg-accent text-accent-foreground">
                    <Star className="h-3 w-3 mr-1" />
                    Featured
                  </Badge>
                )}
                {project.status && <Badge variant="secondary">{project.status}</Badge>}
              </div>

              {/* Content */}
              <div className="flex-1 p-4 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-foreground mb-2 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs px-2 py-0.5 dark:bg-primary/20 dark:text-primary-foreground dark:border-primary/40 bg-primary/10 text-primary border-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Back side */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 p-4 flex flex-col justify-center items-center text-center"
            initial={{ opacity: 0, rotateY: 180 }}
            animate={{ opacity: isFlipped ? 1 : 0, rotateY: isFlipped ? 0 : -180 }}
            transition={{ duration: 0.6 }}
            style={{ backfaceVisibility: "hidden" }}
          >
            <h4 className="font-serif text-xl font-bold text-foreground mb-3">Technologies</h4>
            <div className="flex flex-wrap justify-center gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} className="bg-primary text-primary-foreground">
                  {tech}
                </Badge>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6">Click to view full details</p>
          </motion.div>
        </Card>
      </motion.div>
    </Link>
  )
}
