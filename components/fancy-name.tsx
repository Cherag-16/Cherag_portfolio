"use client"

import { motion } from "framer-motion"

interface FancyNameProps {
  name: string
  className?: string
}

export function FancyName({ name, className = "" }: FancyNameProps) {
  const letters = name.split("")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 20, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      },
    },
    hover: {
      y: -10,
      color: "#ff6b35",
      textShadow: "0 10px 20px rgba(255, 107, 53, 0.4)",
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 200,
      },
    },
  }

  return (
    <motion.span
      className={`inline-block font-serif font-black bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ perspective: 1000 }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          whileHover="hover"
          className="inline-block cursor-pointer"
          style={{ transformStyle: "preserve-3d" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  )
}

// Alternative glitch effect version
export function GlitchName({ name, className = "" }: FancyNameProps) {
  return (
    <div className={`relative inline-block ${className}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary"
      >
        {name}
      </motion.div>

      {/* Glitch effect layers */}
      <motion.div
        className="absolute inset-0 font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary opacity-80"
        animate={{
          x: [0, 2, -2, 0],
          y: [0, -1, 1, 0],
        }}
        transition={{
          duration: 0.15,
          repeat: Infinity,
          repeatDelay: 2,
        }}
      >
        {name}
      </motion.div>

      <motion.div
        className="absolute inset-0 font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent opacity-60"
        animate={{
          x: [0, -2, 2, 0],
          y: [0, 1, -1, 0],
        }}
        transition={{
          duration: 0.15,
          repeat: Infinity,
          repeatDelay: 2.1,
        }}
      >
        {name}
      </motion.div>
    </div>
  )
}

// Wave animation version
export function WaveName({ name, className = "" }: FancyNameProps) {
  const letters = name.split("")

  return (
    <span className={`inline-block font-serif font-black ${className}`}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: index * 0.1,
            ease: "easeInOut",
          }}
          className="inline-block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  )
}

// Rainbow color cycling version
export function RainbowName({ name, className = "" }: FancyNameProps) {
  const colors = ["from-red-500", "from-orange-500", "from-yellow-500", "from-green-500", "from-blue-500", "from-purple-500", "from-pink-500"]

  const letters = name.split("")

  return (
    <span className={`inline-block font-serif font-black ${className}`}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          animate={{ color: ["#ff6b6b", "#ffa94d", "#ffd93d", "#6bcf7f", "#4d96ff", "#a78bfa", "#f472b6", "#ff6b6b"] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.1,
            ease: "easeInOut",
          }}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  )
}

// Spotlight effect version
export function SpotlightName({ name, className = "" }: FancyNameProps) {
  return (
    <motion.span
      className={`relative inline-block font-serif font-black text-foreground ${className}`}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="absolute -inset-2 bg-gradient-to-r from-primary via-accent to-primary opacity-0 blur-md group-hover:opacity-100 transition duration-500 -z-10"
        animate={{
          opacity: [0, 0.3, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />
      <span className="relative z-10 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
        {name}
      </span>
    </motion.span>
  )
}
