import { useState, useRef } from 'react'
import CoverScreen from './Components/CoverScreen'
import InvitationScreen from './Components/InvitationScreen'
import song from './assets/audio/song.mp3'
import { Volume2, VolumeX } from 'lucide-react'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [muted, setMuted] = useState(false)
  const audioRef = useRef(null)

  const handleOpen = () => {
    setIsOpen(true)
    audioRef.current.currentTime = 5
    audioRef.current.play().catch(() => {})
  }

  const toggleMute = () => {
    const next = !muted
    setMuted(next)
    audioRef.current.muted = next
  }

  return (
    <>

    <div className="hidden md:flex min-h-screen items-center justify-center bg-brand-cream text-center px-8">
        <div>
          <p className="font-serif text-3xl text-brand-green mb-4">This invitation is best viewed on a phone.</p>
          <p className="text-brand-text">Please open it on your mobile device, or make your browser window narrower.</p>
        </div>
    </div>



    
    <div className="md:hidden">
      <audio ref={audioRef} src={song} loop />

      {isOpen && (
        <button
          onClick={toggleMute}
          aria-label={muted ? "Unmute music" : "Mute music"}
          className="fixed top-5 right-5 z-50 h-12 w-12 rounded-full bg-white shadow-lg flex items-center justify-center text-brand-green-light text-xl"
        >
         {muted ? <VolumeX size={22} /> : <Volume2 size={22} />}
        </button>
      )}

      {isOpen ? <InvitationScreen /> : <CoverScreen onOpen={handleOpen} />}
    </div>
    </>
  )
}

export default App