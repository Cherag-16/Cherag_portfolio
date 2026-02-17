"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Code, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const statVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const floatingVariants: Variants = {
    animate: {
      y: [0, -20, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const backgroundVariants: Variants = {
    animate: {
      opacity: [0.3, 0.6, 0.3],
      transition: { duration: 8, repeat: Infinity },
    },
  };

  return (
    <section className="relative min-h-screen w-full overflow-x-hidden flex flex-col pt-24 pb-12">
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/15 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/15 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl w-full">
        <motion.div
          className="text-center space-y-6 sm:space-y-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Main Heading */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <motion.div
              className="flex items-center justify-center space-x-2 text-primary mb-4"
              variants={itemVariants}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Code className="h-6 w-6" />
              </motion.div>
              <span className="text-sm font-medium tracking-wide uppercase letter-spacing-1.5">
                Full Stack Developer
              </span>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Sparkles className="h-6 w-6" />
              </motion.div>
            </motion.div>
            <motion.h1
              className="text-[clamp(2rem,5vw,4rem)] font-serif font-black text-foreground leading-tight"
              variants={itemVariants}
            >
              Crafting <span className="gradient-text">Code</span>,
              <br />
              Building <span className="gradient-text">Futures</span>
            </motion.h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Hi, I'm{" "}
              <span className="font-semibold text-primary font-serif">
                Cherag Saxena
              </span>{" "}
              - a passionate Full Stack Developer with{" "}
              <span className="font-semibold text-accent">
                33+ certifications
              </span>{" "}
              and a love for innovation.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground/80 max-w-2xl mx-auto">
              Currently pursuing B.Tech in Computer Engineering at Sage
              University, building amazing web experiences with the MERN stack
              and modern web technologies.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/40 text-primary-foreground px-8 py-6 text-lg font-semibold animate-pulse-glow duration-300"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2"
                >
                  <span className="relative z-10 transition-all duration-300">
                    Hire Me
                  </span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto px-8 py-6 text-lg font-semibold border-primary/50 text-primary hover:bg-primary/10 hover:border-primary glass duration-300"
              >
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2"
                >
                  <span className="relative z-10 transition-all duration-300">
                    View Projects
                  </span>
                  <Code className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Quick Stats Preview */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-12 max-w-3xl mx-auto"
            variants={containerVariants}
          >
            {[
              { number: "33+", label: "Certifications" },
              { number: "15+", label: "Projects" },
              { number: "3", label: "Internships" },
              { number: "150+", label: "Cups of Tea" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={statVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="text-center p-4 sm:p-5 rounded-lg glass-card border border-border/30 hover:border-primary/50 transition-all duration-300 cursor-default group"
              >
                <motion.div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold gradient-text group-hover:scale-110 transition-transform">
                  {stat.number}
                </motion.div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            className="w-1 h-2.5 bg-primary rounded-full mt-2"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
