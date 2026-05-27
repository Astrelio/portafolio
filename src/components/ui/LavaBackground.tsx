import { useEffect, useRef } from 'react'

const BLOBS = [
  { rgb: '124, 58, 237', alpha: 0.12, phaseX: 0, phaseY: 1.2, speedX: 0.0003, speedY: 0.0004, ampX: 0.3, ampY: 0.2, radius: 0.6 },
  { rgb: '59, 130, 246', alpha: 0.10, phaseX: 2.1, phaseY: 0.5, speedX: 0.0004, speedY: 0.0003, ampX: 0.25, ampY: 0.3, radius: 0.5 },
  { rgb: '244, 114, 182', alpha: 0.08, phaseX: 1.5, phaseY: 3.1, speedX: 0.0002, speedY: 0.0005, ampX: 0.4, ampY: 0.25, radius: 0.55 },
  { rgb: '124, 58, 237', alpha: 0.10, phaseX: 4.2, phaseY: 2.8, speedX: 0.0005, speedY: 0.0002, ampX: 0.2, ampY: 0.35, radius: 0.45 },
]

export function LavaBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let rafId: number
    let isVisible = true
    let width = 0
    let height = 0

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
    }

    let resizeTimeout: ReturnType<typeof setTimeout>
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(resize, 150)
    }

    const draw = (time: number) => {
      if (!isVisible) {
        rafId = requestAnimationFrame(draw)
        return
      }

      ctx.clearRect(0, 0, width, height)
      ctx.globalCompositeOperation = 'screen'

      for (const blob of BLOBS) {
        const cx = width * (0.5 + blob.ampX * Math.sin(time * blob.speedX + blob.phaseX))
        const cy = height * (0.5 + blob.ampY * Math.cos(time * blob.speedY + blob.phaseY))
        const r = Math.max(width, height) * blob.radius

        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, r)
        gradient.addColorStop(0, `rgba(${blob.rgb}, ${blob.alpha})`)
        gradient.addColorStop(1, `rgba(${blob.rgb}, 0)`)

        ctx.fillStyle = gradient
        ctx.fillRect(cx - r, cy - r, r * 2, r * 2)
      }

      rafId = requestAnimationFrame(draw)
    }

    const handleVisibilityChange = () => {
      isVisible = document.visibilityState === 'visible'
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
      className="fixed inset-0 -z-10 pointer-events-none w-full h-full"
    />
  )
}
