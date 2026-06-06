"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Send, CheckCircle, AlertCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [submitMessage, setSubmitMessage] = useState("")
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before submitting.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")
    
    const EMAILJS_SERVICE = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const EMAILJS_TEMPLATE = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    try {
      if (EMAILJS_SERVICE && EMAILJS_TEMPLATE && EMAILJS_PUBLIC_KEY) {
        try {
          const emailjs = await import("@emailjs/browser")
          const forwarded = { ...formData }
          await (emailjs as any).send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, forwarded, EMAILJS_PUBLIC_KEY)

          setSubmitStatus("success")
          setSubmitMessage(`Thank you, ${formData.name}! Your message has been sent successfully. I'll review it and get back to you within 24 hours.`)
          
          // Clear the form
          setFormData({ name: "", email: "", subject: "", message: "" })

          toast({
            title: "✓ Message Sent Successfully",
            description: `Thank you for reaching out! I'll respond to ${formData.email} soon.`,
            duration: 6000,
          })

          // Also forward to server API
          try {
            await fetch("/api/contact", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(forwarded),
            })
          } catch (err) {
            console.warn("Server forward failed:", err)
          }

          return
        } catch (emailJsErr) {
          console.warn("EmailJS failed, trying server API:", emailJsErr)
        }
      }

      // Fallback to server API
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const payload = await res.json()

      if (!res.ok) {
        throw new Error(payload?.error || "Failed to send message")
      }

      setSubmitStatus("success")
      setSubmitMessage(`Thank you, ${formData.name}! Your message has been sent successfully. I'll review it and get back to you within 24 hours.`)
      setFormData({ name: "", email: "", subject: "", message: "" })

      toast({
        title: "✓ Message Sent Successfully",
        description: `Thank you for reaching out! I'll respond to ${formData.email} soon.`,
        duration: 6000,
      })
    } catch (error) {
      setSubmitStatus("error")
      setSubmitMessage(error instanceof Error ? error.message : "Something went wrong. Please try again later.")
      
      toast({
        title: "Error Sending Message",
        description: "Something went wrong. Please try again or email cheragsaxena16@gmail.com",
        variant: "destructive",
        duration: 6000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-2xl">
        <Card className="border-border/50 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="font-serif text-2xl sm:text-3xl text-foreground">Get In Touch</CardTitle>
            <p className="text-sm sm:text-base text-muted-foreground mt-2">
              Have a project in mind or want to collaborate? Send me a message and I'll get back to you within 24 hours.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Success Message */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <Alert className="border-green-500/30 bg-green-500/10 text-green-600 dark:text-green-400">
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription className="ml-2">{submitMessage}</AlertDescription>
                  </Alert>
                </motion.div>
              )}

              {/* Error Message */}
              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <Alert className="border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription className="ml-2">{submitMessage}</AlertDescription>
                  </Alert>
                </motion.div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="bg-background border-border focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project, questions, or how I can help you..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={6}
                  className="bg-background border-border focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>

              <div className="text-center text-sm text-muted-foreground space-y-1 pt-4 border-t border-border/30">
                <p className="font-medium text-foreground">Response Time</p>
                <p>I typically respond within <span className="text-primary font-semibold">24 hours</span></p>
                <p>Email: <span className="text-primary font-semibold">cheragsaxena16@gmail.com</span></p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
