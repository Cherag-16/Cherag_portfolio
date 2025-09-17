"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Download } from "lucide-react"

export function CallToAction() {
  const handleDownloadResume = () => {
    window.open('/Cherag_Saxena_Resume.pdf', '_blank')
  }

  return (
    <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">
              Ready to Build Something{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Amazing?</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I'm currently seeking internship and freelancing opportunities. Let's collaborate and create innovative
              solutions that make a difference.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold animate-pulse-glow"
            >
              <Link href="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button variant="outline" size="lg" className="px-8 py-6 text-lg font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent">
              <a href="/Cherag_Saxena_Resume.pdf" download className="flex items-center">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
            <div className="text-center space-y-2">
              <div className="text-2xl font-serif font-bold text-primary">Fast Response</div>
              <p className="text-sm text-muted-foreground">I typically respond within 24 hours</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl font-serif font-bold text-accent">Quality Work</div>
              <p className="text-sm text-muted-foreground">Committed to delivering excellence</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl font-serif font-bold text-primary">Full Support</div>
              <p className="text-sm text-muted-foreground">Ongoing support and maintenance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
