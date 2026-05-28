import { useRef, useState, useEffect } from 'react'

export function ImageCarousel({ images, title }: { images: string[]; title: string }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [dragMoved, setDragMoved] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Prevenir scroll del body cuando el lightbox esta abierto
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedImage])

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return
    setIsDragging(true)
    setDragMoved(false)
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 2 // Multiplicador de velocidad de arrastre
    
    if (Math.abs(walk) > 5) {
      setDragMoved(true)
    }
    
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  const handleImageClick = (img: string) => {
    if (!dragMoved) {
      setSelectedImage(img)
    }
  }

  return (
    <>
      <div
        ref={scrollRef}
        className={`flex gap-4 overflow-x-auto pb-6 pt-2 snap-mandatory cursor-grab active:cursor-grabbing ${
          isDragging ? '' : 'snap-x'
        } [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]`}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${title} screenshot ${i + 1}`}
            draggable={false}
            onClick={() => handleImageClick(img)}
            className="h-48 md:h-64 w-auto rounded-sm border border-[#2a2d33] object-cover snap-start shrink-0 select-none pointer-events-auto"
          />
        ))}
      </div>

      {/* Lightbox Overlay */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
        >
          {/* Fondo empanado (blurred backdrop) */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
          
          {/* Imagen ampliada */}
          <img 
            src={selectedImage} 
            alt={`Vista ampliada de ${title}`} 
            className="relative z-10 max-h-[85vh] max-w-[95vw] rounded-sm border border-[#2a2d33] object-contain shadow-2xl fade-up"
            draggable={false}
          />
        </div>
      )}
    </>
  )
}
