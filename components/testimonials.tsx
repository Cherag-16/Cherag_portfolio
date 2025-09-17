"use client"

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
]

export function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">What people say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Selected testimonials from mentors, instructors and community collaborators.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <Card key={idx} className="bg-card/60 backdrop-blur-sm border-border hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>{t.name.split(" ")[0][0]}</Avatar>
                  <div>
                    <CardTitle className="font-serif text-base text-foreground leading-tight">{t.name}</CardTitle>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">“{t.quote}”</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
