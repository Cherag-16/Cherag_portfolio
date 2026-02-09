"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"

const testimonials = [
  {
    quote:
      "Cherag delivered an outstanding internship project — well-structured code, thoughtful design, and timely delivery. His eagerness to learn and collaborate stood out.",
    name: "Mentor, My Job Grow",
    role: "Project Mentor",
  },
  {
    quote:
      "A strong problem solver who picks up new concepts quickly. Enjoyed working with Cherag on the web applications; his attention to detail made the UX much better.",
    name: "Senior Developer, VGT",
    role: "Lead Instructor",
  },
  {
    quote:
      "Active community contributor with a clear focus on learning and sharing. Cherag's projects show practical engineering and polish — great to collaborate with.",
    name: "Community Organizer",
    role: "DevTown / GDSC Partner",
  },
  {
    quote:
      "Cherag's work during the My Job Grow program demonstrated strong full-stack skills and a keen eye for UX. His contributions were consistently reliable and well-executed.",
    name: "Comment on LinkedIn",
    role: "Source: My Job Grow post",
    source: "https://www.linkedin.com/posts/my-job-grow_webdevelopment-fullstack-mern-activity-7301670914058792963-76o_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEwyZnwBdGA6T9ujYHuVPr2ww-N8qfjVMHk",
  },
  {
    quote:
      "Great collaboration and fast learning — enjoyed mentoring Cherag. His projects are practical and polished.",
    name: "Comment on LinkedIn",
    role: "Source: LinkedIn discussion",
    source: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7301556494850781185?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7301556494850781185%2C7303945078920622080%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287303945078920622080%2Curn%3Ali%3AugcPost%3A7301556494850781185%29",
  },
]

export function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (isHovering) return

    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    let scrollPosition = 0
    const scrollSpeed = 0.8
    const scrollWidth = scrollContainer.scrollWidth / 2

    const scrollStep = () => {
      scrollPosition += scrollSpeed
      if (scrollPosition >= scrollWidth) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
    }

    const interval = setInterval(scrollStep, 30)
    return () => clearInterval(interval)
  }, [isHovering])

  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">What people say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Selected testimonials from mentors, instructors and community collaborators.</p>
        </div>

        <div className="relative overflow-hidden">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-hidden pb-4 scrollbar-hide"
            style={{ scrollBehavior: "auto" }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {[...testimonials, ...testimonials].map((t, idx) => (
              <Card
                key={idx}
                className="flex-shrink-0 w-96 bg-card/60 backdrop-blur-sm border-border hover:shadow-lg transition-all cursor-pointer"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm">
                      {t.name.split(" ")[0][0]}
                    </div>
                    <div>
                      <CardTitle className="font-serif text-base text-foreground leading-tight">{t.name}</CardTitle>
                      <div className="text-sm text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">"{t.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  )
}
