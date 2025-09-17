"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Prefer EmailJS in the browser when env vars are provided, otherwise POST to server API
    const EMAILJS_SERVICE = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const EMAILJS_TEMPLATE = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    try {
      if (EMAILJS_SERVICE && EMAILJS_TEMPLATE && EMAILJS_PUBLIC_KEY) {
        try {
          const emailjs = await import("@emailjs/browser")
          // keep a copy to forward to server after EmailJS completes
          const forwarded = { ...formData }
          await (emailjs as any).send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, forwarded, EMAILJS_PUBLIC_KEY)

          toast({
            title: "Message Sent",
            description:
              "Thank you for your message — it was delivered successfully. I will review it and reach out to you shortly.",
            duration: 6000,
          })

          // clear the form for the user immediately
          setFormData({ name: "", email: "", subject: "", message: "" });

          // Also forward the same submission to the server API so it can be delivered
          // to your inbox via SendGrid/SMTP or persisted for dev inspection.
          try {
            const res = await fetch("/api/contact", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(forwarded),
            })

            if (!res.ok) {
              const body = await res.text().catch(() => "")
              console.warn("Forward to /api/contact failed:", res.status, body)
              toast({
                title: "Partial Delivery",
                description: "Auto-reply sent, but server forwarding failed. The message was saved for inspection.",
                variant: "destructive",
              })
            }
          } catch (err) {
            console.warn("Failed to forward EmailJS submission to /api/contact:", err)
            toast({
              title: "Partial Delivery",
              description: "Auto-reply sent, but forwarding to the server failed. The message may be saved locally.",
              variant: "destructive",
            })
          }

          // stop here since we've handled the user-facing send
          return
        } catch (emailJsErr) {
          console.warn("EmailJS send failed, falling back to server API:", emailJsErr)
          // fallthrough to server POST
        }
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      const payload = await res.json()

      if (!res.ok) {
        throw new Error(payload?.error || "Failed to send message")
      }

      toast({
        title: "Message Sent",
        description:
          "Thank you for your message — it was delivered successfully. I will review it and reach out to you shortly.",
        duration: 6000,
      })

      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "Something went wrong while sending your message. Please try again or email me directly at cheragsaxena16@gmail.com",
        variant: "destructive",
        duration: 6000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-border bg-card/50 backdrop-blur-sm max-w-2xl mx-auto lg:mx-0">
          <CardHeader>
            <CardTitle className="font-serif text-2xl text-foreground">Send Me a Message</CardTitle>
            <p className="text-muted-foreground">
              Fill out the form below and I'll get back to you as soon as possible.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
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
                    className="bg-background"
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
                    className="bg-background"
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
                  className="bg-background"
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
                  rows={6}
                  className="bg-background resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                <p>
                  All messages are sent directly to{" "}
                  <span className="font-medium text-primary">cheragsaxena16@gmail.com</span>
                </p>
                <p className="mt-1">I typically respond within 24 hours.</p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
