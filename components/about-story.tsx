"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Heart, Target, Zap } from "lucide-react"

const values = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and efficient code that stands the test of time.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Genuine love for technology and continuous learning drives everything I do.",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "Focused on delivering results that exceed expectations and create real value.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Always exploring new technologies and approaches to solve complex problems.",
  },
]

export function AboutStory() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">My Journey</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Hi! I'm <span className="font-semibold text-primary">Cherag Saxena</span>, a passionate Full Stack
                Developer currently pursuing my B.Tech in Computer Engineering (Software Engineering) at Sage
                University. With a CGPA of 8.20 and the Best Excellence Award for First Year Academic Honors, I've
                always been driven by a love for technology and innovation.
              </p>
              <p>
                My journey in tech began with curiosity and has evolved into a deep passion for creating meaningful
                digital experiences. Over the past few years, I've earned{" "}
                <span className="font-semibold text-accent">33+ certifications</span> across various domains including
                Full Stack Development, Cloud Computing, AI/ML, and Cybersecurity.
              </p>
              <p>
                I believe in the power of continuous learning and hands-on experience. Through{" "}
                <span className="font-semibold text-primary">3 internships</span> and{" "}
                <span className="font-semibold text-accent">15+ projects</span>, I've honed my skills in the MERN stack,
                cloud technologies, and modern development practices. Each project has been a stepping stone, teaching
                me not just technical skills but also problem-solving, teamwork, and the importance of user-centered
                design.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card
                  key={value.title}
                  className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border hover:border-primary/50 bg-card/50 backdrop-blur-sm"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-serif font-semibold text-xl text-foreground">{value.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
