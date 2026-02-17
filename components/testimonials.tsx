"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Cherag delivered an outstanding internship project — well-structured code, thoughtful design, and timely delivery. His eagerness to learn and collaborate stood out.",
    name: "Mentor, My Job Grow",
    role: "Project Mentor",
    rating: 5,
  },
  {
    quote:
      "A strong problem solver who picks up new concepts quickly. Enjoyed working with Cherag on the web applications; his attention to detail made the UX much better.",
    name: "Senior Developer, VGT",
    role: "Lead Instructor",
    rating: 5,
  },
  {
    quote:
      "Active community contributor with a clear focus on learning and sharing. Cherag's projects show practical engineering and polish — great to collaborate with.",
    name: "Community Organizer",
    role: "DevTown / GDSC Partner",
    rating: 5,
  },
  {
    quote:
      "Cherag's work during the My Job Grow program demonstrated strong full-stack skills and a keen eye for UX. His contributions were consistently reliable and well-executed.",
    name: "Comment on LinkedIn",
    role: "Source: My Job Grow post",
    rating: 5,
    source: "https://www.linkedin.com/posts/my-job-grow_webdevelopment-fullstack-mern-activity-7301670914058792963-76o_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEwyZnwBdGA6T9ujYHuVPr2ww-N8qfjVMHk",
  },
  {
    quote:
      "Great collaboration and fast learning — enjoyed mentoring Cherag. His projects are practical and polished.",
    name: "Comment on LinkedIn",
    role: "Source: LinkedIn discussion",
    rating: 5,
    source: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7301556494850781185?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7301556494850781185%2C7303945078920622080%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287303945078920622080%2Curn%3Ali%3AugcPost%3A7301556494850781185%29",
  },
]

export function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    if (isHovering) return

    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    let position = scrollPosition
    const scrollSpeed = 0.8
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth

    const scrollStep = () => {
      position += scrollSpeed
      if (position > maxScroll) {
        position = 0
      }
      setScrollPosition(position)
      scrollContainer.scrollLeft = position
    }

    const interval = setInterval(scrollStep, 30)
    return () => clearInterval(interval)
  }, [isHovering, scrollPosition])

  return (
    <section className="py-20 bg-gradient-to-b from-background via-muted/5 to-background relative overflow-hidden">
      {/* Background animation */}
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute -top-96 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up" className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">What people say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Selected testimonials from mentors, instructors and community collaborators.
          </p>
        </ScrollReveal>

        <div className="relative overflow-hidden group">
          <motion.div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 overflow-x-hidden pb-4 scrollbar-hide"
            style={{ scrollBehavior: "auto" }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {[...testimonials, ...testimonials].map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-80 sm:w-96"
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="h-full"
                >
                  <Card
                    className="h-full glass-card border-border/30 hover:border-primary/50 transition-all duration-300 hover:shadow-xl flex flex-col"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3 flex-1">
                          <motion.div 
                            className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            {t.name.split(" ")[0][0]}
                          </motion.div>
                          <div className="min-w-0">
                            <CardTitle className="font-serif text-base text-foreground leading-tight truncate">
                              {t.name}
                            </CardTitle>
                            <div className="text-xs sm:text-sm text-muted-foreground truncate">{t.role}</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(t.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-accent text-accent" />
                          </motion.div>
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-sm text-muted-foreground leading-relaxed italic">
                        "{t.quote}"
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient overlays for infinite scroll effect */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
        </div>

        <ScrollReveal direction="up" className="text-center mt-12">
          <p className="text-muted-foreground text-sm italic">
            ↚ Scroll to see more testimonials →
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
