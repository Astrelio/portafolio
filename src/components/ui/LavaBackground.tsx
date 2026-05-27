import { useEffect, useRef } from 'react'

const BLOBS = [
  { rgb: '124, 58, 237', alpha: 0.22, phaseX: 0, phaseY: 1.2, speedX: 0.00035, speedY: 0.0004, ampX: 0.32, ampY: 0.22, radius: 0.42 },
  { rgb: '59, 130, 246', alpha: 0.18, phaseX: 2.1, phaseY: 0.5, speedX: 0.0004, speedY: 0.00032, ampX: 0.28, ampY: 0.3, radius: 0.38 },
  { rgb: '244, 114, 182', alpha: 0.14, phaseX: 1.5, phaseY: 3.1, speedX: 0.00028, speedY: 0.00045, ampX: 0.36, ampY: 0.26, radius: 0.4 },
  { rgb: '99, 102, 241', alpha: 0.16, phaseX: 4.2, phaseY: 2.8, speedX: 0.00045, speedY: 0.00025, ampX: 0.22, ampY: 0.34, radius: 0.35 },
]

export function LavaBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let rafId = 0
    let isPageVisible = true
    let width = 0
    let height = 0
    let dpr = 1

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      dpr = Math.min(window.devicePixelRatio || 1, 2)

      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    let resizeTimeout: ReturnType<typeof setTimeout>
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(resize, 150)
    }

    const draw = (time: number) => {
      rafId = requestAnimationFrame(draw)

      if (!isPageVisible || width === 0 || height === 0) return

      ctx.clearRect(0, 0, width, height)
      ctx.globalCompositeOperation = 'lighter'

      for (const blob of BLOBS) {
        const cx = width * (0.5 + blob.ampX * Math.sin(time * blob.speedX + blob.phaseX))
        const cy = height * (0.5 + blob.ampY * Math.cos(time * blob.speedY + blob.phaseY))
        const r = Math.max(width, height) * blob.radius

        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, r)
        gradient.addColorStop(0, `rgba(${blob.rgb}, ${blob.alpha})`)
        gradient.addColorStop(0.45, `rgba(${blob.rgb}, ${blob.alpha * 0.35})`)
        gradient.addColorStop(1, `rgba(${blob.rgb}, 0)`)

        ctx.fillStyle = gradient
        ctx.fillRect(cx - r, cy - r, r * 2, r * 2)
      }
    }

    const handleVisibilityChange = () => {
      isPageVisible = document.visibilityState === 'visible'
    }

    window.addEventListener('resize', handleResize)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    resize()
    rafId = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      cancelAnimationFrame(rafId)
      clearTimeout(resizeTimeout)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="lava-canvas"
      aria-hidden
    />
  )
}
