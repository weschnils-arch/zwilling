import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const elements = ref.current.querySelectorAll('[data-animate]')

    elements.forEach((el) => {
      const type = el.getAttribute('data-animate')
      const delay = parseFloat(el.getAttribute('data-delay') || '0')

      switch (type) {
        case 'fade-up':
          gsap.fromTo(
            el,
            { opacity: 0, y: 60 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              delay,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          )
          break
        case 'fade-in':
          gsap.fromTo(
            el,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 1.2,
              delay,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          )
          break
        case 'slide-left':
          gsap.fromTo(
            el,
            { opacity: 0, x: -40 },
            {
              opacity: 1,
              x: 0,
              duration: 1,
              delay,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          )
          break
        case 'slide-right':
          gsap.fromTo(
            el,
            { opacity: 0, x: 40 },
            {
              opacity: 1,
              x: 0,
              duration: 1,
              delay,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          )
          break
        case 'scale-in':
          gsap.fromTo(
            el,
            { opacity: 0, scale: 0.9 },
            {
              opacity: 1,
              scale: 1,
              duration: 1,
              delay,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          )
          break
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return ref
}
