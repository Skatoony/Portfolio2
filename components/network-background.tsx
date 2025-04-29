"use client"

import { useEffect, useRef } from "react"

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    const particleCount = 80
    const connectionDistance = 180

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
        this.size = Math.random() * 2.5 + 1
        this.speedX = (Math.random() - 0.5) * 0.6
        this.speedY = (Math.random() - 0.5) * 0.6

        // Brighter colors for black background
        const colors = [
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

        // Update pulse effect
        if (this.pulseDirection) {
          this.pulseIntensity += 0.01
          if (this.pulseIntensity > 1) this.pulseDirection = false
        } else {
          this.pulseIntensity -= 0.01
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
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      init()
    }

    // Connect particles with lines
    const connect = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
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

            if (isPurple) {
              gradient.addColorStop(0, `rgba(186, 104, 255, ${opacity * 0.6})`)
              gradient.addColorStop(1, `rgba(216, 180, 254, ${opacity * 0.6})`)
            } else {
              gradient.addColorStop(0, `rgba(203, 213, 225, ${opacity * 0.5})`)
              gradient.addColorStop(1, `rgba(226, 232, 240, ${opacity * 0.5})`)
            }

            ctx!.strokeStyle = gradient
            ctx!.lineWidth = 1.5 * opacity // Thicker lines
            ctx!.beginPath()
            ctx!.moveTo(particles[a].x, particles[a].y)
            ctx!.lineTo(particles[b].x, particles[b].y)
            ctx!.stroke()
          }
        }
      }
    }

    // Animation loop
    const animate = () => {
      // Use a semi-transparent black clear to create trail effect
      ctx!.fillStyle = "rgba(0, 0, 0, 0.05)" // Very subtle trail effect with black
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
  }, [])

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />
}
