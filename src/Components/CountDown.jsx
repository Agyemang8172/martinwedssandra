import { useState, useEffect } from 'react'

const Countdown = () => {
  const weddingDate = new Date("2026-08-01T11:00:00")
  const [daysLeft, setDaysLeft] = useState(null)

  useEffect(() => {
    const today = new Date()
    const diff = weddingDate - today
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24))
    setDaysLeft(days)
  }, [])

  return (
    <div>
      <h2>Countdown</h2>
      <p>Until we say "I do".</p>
      {daysLeft > 0 ? <p>{daysLeft} days to go</p> : <p>IT'S TODAY!</p>}
    </div>
  )
}

export default Countdown