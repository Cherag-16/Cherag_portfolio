import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { ContactCTA } from "@/components/contact-cta"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ContactHero />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 py-12 lg:py-16 bg-background">
          <div className="order-2 lg:order-1">
            <ContactInfo />
          </div>
          <div className="order-1 lg:order-2">
            <ContactForm />
          </div>
        </div>
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}
