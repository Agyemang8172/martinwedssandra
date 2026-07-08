import { useState, useRef } from 'react'
import CoverScreen from './Components/CoverScreen'
import InvitationScreen from './Components/InvitationScreen'
import song from './assets/audio/song.mp3'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [muted, setMuted] = useState(false)
  const audioRef = useRef(null)

  const handleOpen = () => {
    setIsOpen(true)
    audioRef.current.play().catch(() => {})
  }

  const toggleMute = () => {
    const next = !muted
    setMuted(next)
    audioRef.current.muted = next
  }

  return (
    <div>
      <audio ref={audioRef} src={song} loop />

      {isOpen && (
        <button
          onClick={toggleMute}
          aria-label={muted ? "Unmute music" : "Mute music"}
          className="fixed top-5 right-5 z-50 h-12 w-12 rounded-full bg-white shadow-lg flex items-center justify-center text-brand-green-light text-xl"
        >
          {muted ? "🔇" : "🔊"}
        </button>
      )}

      {isOpen ? <InvitationScreen /> : <CoverScreen onOpen={handleOpen} />}
    </div>
  )
}

export default App