"use client"

import { useEffect, useRef } from "react"

export function AnimatedBlockchain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const setCanvasDimensions = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Add grid drawing function
    const drawGrid = (ctx: CanvasRenderingContext2D) => {
      const gridSize = 200 // Size of each grid cell
      const gridOpacity = 0.15 // Opacity of grid lines

      ctx.strokeStyle = `rgba(255, 255, 255, ${gridOpacity})`
      ctx.lineWidth = 1

      // Draw vertical lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.setLineDash([5, 5]) // Create dashed lines
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Draw horizontal lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.setLineDash([5, 5]) // Create dashed lines
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
    }

    // Prompts array
    const prompts = [
      "> swap ETH to USDT",
      "> bridge to L2",
      "> stake ETH",
      "> mint NFT",
      "> deploy smart contract",
      "> verify contract",
      "> add liquidity",
      "> yield farming",
      "> gas optimization",
      "> MEV protection",
      "> cross-chain swap",
      "> token approval",
      "> wallet connect",
      "> sign message",
      "> block confirmation",
      "> train AI agent",
      "> deploy LLM model",
      "> fine-tune GPT",
      "> buy PEPE token",
      "> sell DOGE coin",
      "> create meme token",
      "> launch NFT collection",
      "> mint generative art",
      "> trade BAYC",
      "> stake BONK",
      "> farm APE rewards",
      "> bridge to Arbitrum",
      "> optimize gas fees",
      "> flash loan attack",
      "> MEV sandwich",
      "> arbitrage bot",
      "> trading bot",
      "> liquidity mining",
      "> impermanent loss",
      "> price impact",
      "> slippage tolerance",
      "> gas estimation",
      "> block explorer",
      "> contract audit",
      "> rugpull check",
      "> honeypot scan"
    ]

    class Prompt {
      text: string
      x: number
      y: number
      currentText: string
      typingSpeed: number
      fontSize: number
      opacity: number
      targetOpacity: number
      isTyping: boolean
      delay: number
      currentDelay: number
      width: number
      height: number
      typingTimer: number

      constructor(text: string, x: number, y: number) {
        this.text = text
        this.x = x
        this.y = y
        this.currentText = ""
        this.typingSpeed = 112.5 // Twice as fast again (was 225)
        this.fontSize = Math.floor(Math.random() * 60 + 60)
        this.opacity = 0
        this.targetOpacity = 0.32 // Reduced by 20% (was 0.4)
        this.isTyping = true
        this.delay = Math.random() * 1500 // Twice as fast again (was 3000)
        this.currentDelay = 0
        this.width = 0
        this.height = this.fontSize
        this.typingTimer = 0
      }

      getBounds() {
        return {
          left: this.x,
          right: this.x + this.width,
          top: this.y - this.height/2,
          bottom: this.y + this.height/2
        }
      }

      intersects(other: Prompt) {
        const bounds1 = this.getBounds()
        const bounds2 = other.getBounds()

        return !(bounds1.right < bounds2.left ||
                bounds1.left > bounds2.right ||
                bounds1.bottom < bounds2.top ||
                bounds1.top > bounds2.bottom)
      }

      update(deltaTime: number) {
        // Fade in twice as fast again
        if (this.isTyping) {
          this.opacity = Math.min(this.opacity + deltaTime * 0.0012, this.targetOpacity) // Twice as fast again (was 0.0006)
        }
        // Fade out twice as fast again
        else if (!this.isTyping && this.currentText.length === this.text.length) {
          this.opacity = Math.max(this.opacity - deltaTime * 0.0006, 0) // Twice as fast again (was 0.0003)
        }

        if (!this.isTyping) return

        if (this.currentDelay < this.delay) {
          this.currentDelay += deltaTime
          return
        }

        this.typingTimer += deltaTime
        if (this.typingTimer >= this.typingSpeed) {
          this.typingTimer = 0
          if (this.currentText.length < this.text.length) {
            this.currentText += this.text[this.currentText.length]
          } else {
            this.isTyping = false
          }
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.font = `bold ${this.fontSize}px monospace`
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
        ctx.textAlign = 'left'
        ctx.textBaseline = 'middle'
        const displayText = this.currentText + (this.isTyping ? '|' : '')
        ctx.fillText(displayText, this.x, this.y)
        this.width = (ctx.measureText(this.text).width + 20) * (this.fontSize / 120)
      }

      isDone() {
        return !this.isTyping && this.opacity === 0
      }
    }

    function findNonOverlappingPosition(existingPrompts: Prompt[], text: string): { x: number; y: number } {
      if (!canvas) return { x: 100, y: 100 }

      const maxAttempts = 50
      let attempt = 0

      while (attempt < maxAttempts) {
        const x = Math.random() * (canvas.width - 1200) + 100
        const y = Math.random() * (canvas.height - 200) + 100

        const testPrompt = new Prompt(text, x, y)
        let hasOverlap = false

        for (const prompt of existingPrompts) {
          if (testPrompt.intersects(prompt)) {
            hasOverlap = true
            break
          }
        }

        if (!hasOverlap) {
          return { x, y }
        }

        attempt++
      }

      return {
        x: Math.random() * (canvas.width - 1200) + 100,
        y: Math.random() * (canvas.height - 200) + 100
      }
    }

    const floatingPrompts: Prompt[] = []

    // Initial prompts with non-overlapping positions
    for (let i = 0; i < 3; i++) {
      const text = prompts[Math.floor(Math.random() * prompts.length)]
      const position = findNonOverlappingPosition(floatingPrompts, text)
      floatingPrompts.push(new Prompt(text, position.x, position.y))
    }

    let lastTime = 0
    const animate = (time: number) => {
      const deltaTime = time - lastTime
      lastTime = time

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw grid first
      drawGrid(ctx)

      floatingPrompts.forEach((prompt) => {
        prompt.update(deltaTime)
        prompt.draw(ctx)
      })

      // Replace completed prompts with longer delay
      for (let i = floatingPrompts.length - 1; i >= 0; i--) {
        if (floatingPrompts[i].isDone()) {
          const text = prompts[Math.floor(Math.random() * prompts.length)]
          const position = findNonOverlappingPosition(
            floatingPrompts.filter((_, index) => index !== i),
            text
          )
          floatingPrompts[i] = new Prompt(text, position.x, position.y)
        }
      }

      requestAnimationFrame(animate)
    }

    animate(0)

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" style={{ pointerEvents: "none" }} />
}

