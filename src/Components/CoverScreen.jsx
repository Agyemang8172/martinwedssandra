import { motion } from 'framer-motion'
import { useState } from 'react'
import badge from '../assets/images/martsanpic.png'
import bird from '../assets/images/bird.png'
import confetti from 'canvas-confetti'

const CoverScreen = ({ onOpen }) => {
  const [tapped, setTapped] = useState(false)

  const handleTap = () => {
    setTapped(true)

    setTimeout(() => {
      const duration = 3000
      const end = Date.now() + duration

      const frame = () => {
        confetti({ particleCount: 6, angle: 60, spread: 55, origin: { x: 0 }, startVelocity: 55 })
        confetti({ particleCount: 6, angle: 120, spread: 55, origin: { x: 1 }, startVelocity: 55 })
        if (Date.now() < end) {
          requestAnimationFrame(frame)
        }
      }
      frame()
    }, 500)

    setTimeout(() => {
      onOpen()
    }, 1200)
  }

  return (
    <div
      onClick={handleTap}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-brand-mint to-brand-cream cursor-pointer px-6"
    >
      <div className="relative flex items-center justify-center">
        <motion.img
          src={bird}
          alt=""
          className="absolute w-48 z-10 pointer-events-none"
          initial={{ scale: 0, opacity: 0 }}
          animate={tapped ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        <img
          src={badge}
          alt="Martin and Sandra"
          className="relative w-72 max-w-[80%]"
        />
      </div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        className="text-brand-text text-3xl mt-10"
      >
        ↑
      </motion.div>

      <p className="font-sans tracking-widest text-brand-text text-sm mt-2">
        TAP TO OPEN YOUR INVITATION
      </p>
    </div>
  )
}

export default CoverScreen