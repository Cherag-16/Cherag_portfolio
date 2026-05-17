"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Code, Heart, Target, Zap } from "lucide-react";

const values = [
  {
    icon: Code,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable, and efficient code that stands the test of time.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "Genuine love for technology and continuous learning drives everything I do.",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description:
      "Focused on delivering results that exceed expectations and create real value.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "Always exploring new technologies and approaches to solve complex problems.",
  },
];

export function AboutStory() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
              My Journey
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Hi! I'm{" "}
                <span className="font-semibold text-primary">
                  Cherag Saxena
                </span>
                , a Full Stack Developer from Indore who genuinely loves every
                part of this craft. I love building products from scratch,
                debugging what others give up on, sweating the design details,
                and refining every line until the product ships flawlessly. My most exciting work
                right now is Code Mentor AI — an AI-powered platform that
                bridges the gap between learning to code and actually applying
                it. It's the kind of project that pushed me across the full
                stack: React frontend, Node/Express backend, MongoDB, and
                integrating both OpenAI and Gemini APIs into a product that's
                genuinely useful.
              </p>
              <p>
                Beyond that, I've shipped a B2B business platform for a real
                client, built a real-time expense tracker, and worked across 3
                internships where I contributed from day one.{" "}
                <span className="font-semibold text-accent">
                  33+ certifications across Full Stack, Cloud (Azure, AWS),
                  AI/ML, and Cybersecurity
                </span>{" "}
                back up the learning — but the projects are what I'm proud of.
              </p>
              <p>
                I believe in the power of continuous learning and hands-on
                experience. Through{" "}
                <span className="font-semibold text-primary">
                  3 internships
                </span>{" "}
                and{" "}
                <span className="font-semibold text-accent">15+ projects</span>,
                I'm currently looking for internships and freelance work where I
                can bring all of this to the table — the building, the
                problem-solving, the design eye, and the commitment to ship.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
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
                      <h3 className="font-serif font-semibold text-xl text-foreground">
                        {value.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
