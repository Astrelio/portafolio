import { useEffect, useRef, useState } from 'react'

const CLICKABLE =
  'a, button, [role="button"], input:not([type="hidden"]), select, textarea, label, summary, [href], .btn-primary, .btn-ghost, .nav-cta'

const STROKE_LIGHT = '#e8eaed'
const STROKE_DARK = '#0a0a0b'

function parseRgb(color: string): [number, number, number] | null {
  const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)
  if (!match) return null
  return [Number(match[1]), Number(match[2]), Number(match[3])]
}

function isLightTextColor(color: string): boolean {
  const rgb = parseRgb(color)
  if (!rgb) return true
  const [r, g, b] = rgb
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.55
}

function strokeForElement(element: Element | null): string {
  if (!element) return STROKE_LIGHT

  const clickable = element.closest(CLICKABLE)
  if (!clickable) return STROKE_LIGHT

  const { color } = getComputedStyle(clickable)
  return isLightTextColor(color) ? STROKE_LIGHT : STROKE_DARK
}

export function CrossCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isSpinning, setIsSpinning] = useState(false)
  const [stroke, setStroke] = useState(STROKE_LIGHT)
  const [isVisible, setIsVisible] = useState(false)
  const [isEnabled] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches,
  )
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (!isEnabled) return

    document.documentElement.classList.add('custom-cursor-active')

    const updateHoverState = (x: number, y: number) => {
      const target = document.elementFromPoint(x, y)
      const clickable = target?.closest(CLICKABLE) ?? null
      setIsSpinning(Boolean(clickable))
      setStroke(strokeForElement(target))
    }

    const onMouseMove = (event: MouseEvent) => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)

      rafRef.current = requestAnimationFrame(() => {
        setIsVisible(true)
        setPosition({ x: event.clientX, y: event.clientY })
        updateHoverState(event.clientX, event.clientY)
        rafRef.current = null
      })
    }

    const onMouseLeave = () => {
      setIsVisible(false)
      setIsSpinning(false)
      setStroke(STROKE_LIGHT)
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    document.addEventListener('mouseleave', onMouseLeave)

    return () => {
      document.documentElement.classList.remove('custom-cursor-active')
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [isEnabled])

  if (!isEnabled) return null

  return (
    <div
      aria-hidden
      className="cross-cursor"
      style={{
        left: position.x,
        top: position.y,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className={isSpinning ? 'cross-cursor__arm cross-cursor__arm--spin' : 'cross-cursor__arm'}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            className="cross-cursor__line"
            d="M12 2v20M2 12h20"
            stroke={stroke}
            strokeWidth="1"
          />
        </svg>
      </div>
    </div>
  )
}
