"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, MapPin, Phone, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <footer className="bg-gradient-to-b from-muted/30 to-background border-t border-border/50 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute -bottom-96 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <StaggerItem direction="up">
            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link href="/" className="flex items-center space-x-2 font-serif font-bold text-lg sm:text-xl text-primary hover:text-accent transition-colors w-fit">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-primary-foreground font-bold">
                    C
                  </div>
                  <span>Cherag Saxena</span>
                </Link>
              </motion.div>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-xs leading-relaxed">
                Full Stack Developer passionate about creating innovative web solutions and building the future through code.
              </p>
            </div>
          </StaggerItem>

          {/* Quick Links */}
          <StaggerItem direction="up">
            <div className="space-y-4">
              <h3 className="font-serif font-semibold text-foreground text-sm sm:text-base">Quick Links</h3>
              <div className="space-y-2">
                {["About", "Skills", "Portfolio", "Experience"].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="block text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
                  >
                    <span className="group-hover:translate-x-1 inline-block transition-transform">→</span> {item}
                  </Link>
                ))}
              </div>
            </div>
          </StaggerItem>

          {/* Services */}
          <StaggerItem direction="up">
            <div className="space-y-4">
              <h3 className="font-serif font-semibold text-foreground text-sm sm:text-base">Services</h3>
              <div className="space-y-2">
                {["Web Development", "Full Stack Solutions", "Frontend Design", "Backend Development"].map((service) => (
                  <motion.div 
                    key={service} 
                    className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-300 cursor-default"
                    whileHover={{ x: 5 }}
                  >
                    {service}
                  </motion.div>
                ))}
              </div>
            </div>
          </StaggerItem>

          {/* Contact Info */}
          <StaggerItem direction="up">
            <div className="space-y-4">
              <h3 className="font-serif font-semibold text-foreground text-sm sm:text-base">Get In Touch</h3>
              <div className="space-y-2 sm:space-y-3">
                <motion.a 
                  href="mailto:cheragsaxena16@gmail.com"
                  className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4 group-hover:animate-pulse" />
                  <span className="truncate">cheragsaxena16@gmail.com</span>
                </motion.a>
                <motion.a 
                  href="tel:+918871582449"
                  className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4 group-hover:animate-pulse" />
                  <span>+91-8871582449</span>
                </motion.a>
                <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                  <span>Indore, India</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-2 pt-2">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    asChild
                    className="hover:text-primary hover:bg-primary/10 transition-all"
                  >
                    <Link href="https://github.com/cherag-16" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    asChild
                    className="hover:text-primary hover:bg-primary/10 transition-all"
                  >
                    <Link
                      href="https://www.linkedin.com/in/cherag-saxena-36415a2b8/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    asChild
                    className="hover:text-primary hover:bg-primary/10 transition-all"
                  >
                    <Link href="mailto:cheragsaxena16@gmail.com">
                      <Mail className="h-4 w-4" />
                      <span className="sr-only">Email</span>
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

        <motion.div 
          className="border-t border-border/30 mt-8 sm:mt-12 pt-8 sm:pt-12 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            © {currentYear} Cherag Saxena. All rights reserved.
          </p>
          <div className="flex space-x-4 items-center">
            <Link href="/blog" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Blog
            </Link>
            <Link href="/contact" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Contact
            </Link>
            <motion.button
              onClick={scrollToTop}
              className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors rounded-full" />
              <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5 text-primary absolute inset-0 m-auto group-hover:animate-bounce" />
              <span className="sr-only">Back to top</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
