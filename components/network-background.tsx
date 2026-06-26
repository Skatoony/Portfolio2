"use client"

import { useEffect, useRef, useState } from "react"

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkMobile()

    // Add resize listener
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []

    // Tuned for performance: fewer particles cuts the per-frame O(n²) connection cost
    const particleCount = isMobile ? 70 : 60
    const connectionDistance = isMobile ? 150 : 180

    // First, define the Particle class before using it
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      pulseIntensity: number
      pulseDirection: boolean

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * (isMobile ? 3 : 2.5) + 1.5

        // Slightly faster movement on mobile with more particles for more dynamic effect
        const speedFactor = isMobile ? 0.6 : 0.6
        this.speedX = (Math.random() - 0.5) * speedFactor
        this.speedY = (Math.random() - 0.5) * speedFactor

        // Brighter colors for mobile - increased opacity
        const colors = isMobile
          ? [
              "rgba(223, 230, 238, 0.95)", // brighter light slate
              "rgba(206, 144, 255, 0.95)", // brighter purple
              "rgba(226, 200, 254, 0.95)", // brighter lighter purple
              "rgba(212, 162, 252, 0.95)", // brighter violet
            ]
          : [
              "rgba(203, 213, 225, 0.8)", // light slate
              "rgba(186, 104, 255, 0.8)", // bright purple
              "rgba(216, 180, 254, 0.8)", // lighter purple
              "rgba(192, 132, 252, 0.8)", // bright violet
            ]
        this.color = colors[Math.floor(Math.random() * colors.length)]

        // For pulse effect (size variation)
        this.pulseIntensity = Math.random() * 0.5 + 0.5
        this.pulseDirection = Math.random() > 0.5
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX
        }

        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY
        }

        // Update pulse effect - slower on mobile
        const pulseSpeed = isMobile ? 0.008 : 0.01
        if (this.pulseDirection) {
          this.pulseIntensity += pulseSpeed
          if (this.pulseIntensity > 1) this.pulseDirection = false
        } else {
          this.pulseIntensity -= pulseSpeed
          if (this.pulseIntensity < 0.5) this.pulseDirection = true
        }
      }

      draw() {
        // Draw the particle
        ctx!.fillStyle = this.color
        ctx!.beginPath()
        ctx!.arc(this.x, this.y, this.size * this.pulseIntensity, 0, Math.PI * 2)
        ctx!.fill()
      }
    }

    // Then define the init function that uses the Particle class
    const init = () => {
      particles = []
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    // Then define the resizeCanvas function that calls init
    const resizeCanvas = () => {
      // Set to device pixel ratio for better rendering on high DPI screens
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr

      // Scale the context to ensure correct drawing operations
      ctx.scale(dpr, dpr)

      // Set the CSS size
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`

      init()
    }

    // Connect particles with lines - optimize for mobile
    const connect = () => {
      // On mobile with more particles, we need to skip some connections for performance
      // but still show enough to be visible
      const skipFactor = isMobile ? 2 : 1 // Skip every other particle on mobile for performance

      for (let a = 0; a < particles.length; a += skipFactor) {
        // Limit the number of connections per particle on mobile for performance
        const connectionsPerParticle = isMobile ? 5 : particles.length

        for (let b = a; b < Math.min(a + connectionsPerParticle, particles.length); b += skipFactor) {
          if (a === b) continue // Skip self

          const dx = particles[a].x - particles[b].x
          const dy = particles[a].y - particles[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const opacity = 1 - distance / connectionDistance

            // Determine if this connection should be purple or light
            const isPurple =
              particles[a].color.includes("purple") ||
              particles[b].color.includes("purple") ||
              particles[a].color.includes("violet") ||
              particles[b].color.includes("violet")

            // Create gradient for connections - brighter for black background
            const gradient = ctx!.createLinearGradient(particles[a].x, particles[a].y, particles[b].x, particles[b].y)

            // Brighter connections for mobile
            if (isPurple) {
              gradient.addColorStop(0, `rgba(206, 144, 255, ${isMobile ? opacity * 0.8 : opacity * 0.6})`)
              gradient.addColorStop(1, `rgba(226, 200, 254, ${isMobile ? opacity * 0.8 : opacity * 0.6})`)
            } else {
              gradient.addColorStop(0, `rgba(223, 230, 238, ${isMobile ? opacity * 0.7 : opacity * 0.5})`)
              gradient.addColorStop(1, `rgba(236, 240, 245, ${isMobile ? opacity * 0.7 : opacity * 0.5})`)
            }

            // Thicker lines on mobile for visibility
            ctx!.strokeStyle = gradient
            ctx!.lineWidth = isMobile ? opacity * 1.2 : 1.5 * opacity
            ctx!.beginPath()
            ctx!.moveTo(particles[a].x, particles[a].y)
            ctx!.lineTo(particles[b].x, particles[b].y)
            ctx!.stroke()
          }
        }
      }
    }

    // Animation loop - optimize for mobile
    const animate = () => {
      // Use a semi-transparent near-black clear to create trail effect
      // Matches the page background (#08080c) for a seamless blend
      ctx!.fillStyle = `rgba(8, 8, 12, ${isMobile ? 0.1 : 0.05})`
      ctx!.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      connect()
      animationFrameId = requestAnimationFrame(animate)
    }

    // Set up event listeners and start animation
    window.addEventListener("resize", resizeCanvas)
    resizeCanvas() // This will call init()
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isMobile]) // Re-initialize when isMobile changes

  // Lower z-index to ensure navigation is clickable
  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />
}
