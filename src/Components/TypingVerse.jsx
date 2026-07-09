import { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

const TypingVerse = ({ text }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    if (count >= text.length) return
    const timer = setTimeout(() => {
      setCount(count + 1)
    }, 40)
    return () => clearTimeout(timer)
  }, [inView, count, text])

  return (
    <p ref={ref} className="italic font-serif text-lg text-brand-text min-h-[3rem]">
      {text.slice(0, count)}
    </p>
  )
}

export default TypingVerse