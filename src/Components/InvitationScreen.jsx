import Countdown from './Countdown'
import couplephoto from '../assets/images/couplephoto.jpeg'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.25 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const InvitationScreen = () => {
  const program = [
    "Arrival & Welcome",
    "Musical Interlude",
    "Processional",
    "Removal of Veil & Giving of Bride & Charge",
    "Profession of Vows",
    "Exchange of Rings and Communion",
    "Pastoral Blessing",
    "Introduction of Couple",
    "Musical Interlude",
    "Word Ministration",
    "Offering (To the Couple)",
    "Presentation of Offering",
    "Announcement",
    "Closing Prayer & Benediction",
    "Recessional Song",
    "Photo Session",
    "Dinner and Cocktail",
    "Cake Cutting",
    "Toast",
    "Open Dance",
    "Send-Off",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-mint to-brand-cream font-sans text-brand-text">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-md mx-auto px-6 py-12 flex flex-col items-center text-center"
      >

        {/* HEADER */}
        <motion.div variants={item} className="flex items-center gap-3 mb-8 text-brand-gold">
          <span className="h-px w-12 bg-brand-gold" />
          <span>♡</span>
          <span className="h-px w-12 bg-brand-gold" />
        </motion.div>

        <motion.p variants={item} className="tracking-[0.3em] text-sm mb-6">
          TOGETHER WITH THEIR FAMILIES
        </motion.p>

        <motion.h1 variants={item} className="font-serif text-5xl text-brand-green leading-tight mb-6">
          Martin &amp; Sandra
        </motion.h1>

        <motion.p variants={item} className="mb-8 leading-relaxed">
          Request the honour of your presence at their wedding celebration.
        </motion.p>

        <motion.p variants={item} className="font-semibold tracking-widest text-brand-green mb-12 leading-loose">
          SATURDAY, 1ST AUGUST 2026 · 11:00 AM · ASSEMBLIES OF GOD, JCCC, BROADCASTING LAST STOP
        </motion.p>

        {/* COUPLE PHOTO */}
        <motion.div variants={item} className="w-full rounded-3xl overflow-hidden shadow-lg mb-12 bg-white p-2">
          <img src={couplephoto} alt="Martin and Sandra" className="w-full rounded-2xl" />
        </motion.div>

        {/* COUNTDOWN */}
        <motion.div variants={item} className="w-full bg-white rounded-3xl shadow-lg p-8 mb-12">
          <Countdown />
         <a href="https://www.google.com/maps/search/?api=1&query=Assemblies+of+God+JCCC+Broadcasting+Last+Stop+Accra"
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-6 border border-brand-green-light text-brand-green-light tracking-widest py-4 rounded-full font-semibold hover:bg-brand-cream   transition-colors"
      >
        SEE THE VENUE & GET DIRECTIONS →
      </a>
        </motion.div>

        {/* ORDER OF CELEBRATION */}
        <motion.div variants={item} className="w-full bg-white rounded-3xl shadow-lg p-8 mb-12">
          <h2 className="font-serif text-4xl text-brand-green mb-2">Order of Celebration</h2>
          <p className="mb-8">A gentle flow through our day.</p>
         <ul className="text-left">
            {program.map((prog, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
                className="flex items-start gap-3 py-4 border-b border-brand-mint last:border-0"
              >
                <span className="mt-1.5 h-3 w-3 rounded-full bg-brand-green-light/60 shrink-0" />
                <span className="font-semibold text-brand-green">{prog}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* WEDDING VENUE */}
        <motion.div variants={item} className="w-full bg-white rounded-3xl shadow-lg p-8 mb-12">
          <h2 className="font-serif text-4xl text-brand-green mb-4">Wedding Venue</h2>
          <p className="mb-6">Assemblies of God, JCCC, Broadcasting Last Stop</p>
         <div className="flex justify-center text-brand-green-light mb-6">
            <MapPin size={40} />
          </div>
          
             <a href="https://www.google.com/maps/search/?api=1&query=Assemblies+of+God+JCCC+Broadcasting+Last+Stop+Accra"
            target="_blank"
            rel="noopener noreferrer"
           className="block w-full bg-brand-green-light hover:bg-brand-green transition-colors text-white tracking-widest py-4 rounded-full font-semibold"
          >
            GET DIRECTIONS →
          </a>
        </motion.div>

        {/* CLOSING */}
        <motion.div variants={item} className="w-full bg-white rounded-3xl shadow-lg p-8">
          <span className="block h-px w-16 bg-brand-gold mx-auto mb-6" />
          <h2 className="font-serif text-4xl text-brand-green mb-4">M &amp; S</h2>
          <p className="italic font-serif text-xl text-brand-text mb-8">
            We can't wait to celebrate with you.
          </p>

          <p className="tracking-widest text-sm mb-4">COLORS</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="flex items-center gap-2"><span className="h-4 w-4 rounded-full bg-brand-green" /> Emerald green</span>
            <span className="flex items-center gap-2"><span className="h-4 w-4 rounded-full border border-brand-mint bg-[#f5f3d8]" /> Ivory</span>
            <span className="flex items-center gap-2"><span className="h-4 w-4 rounded-full bg-[#c9a68a]" /> Nude</span>
          </div>

          <p className="tracking-widest text-sm mb-4">1 CORINTHIANS 13:13</p>
          <p className="italic font-serif text-lg text-brand-text">
            Three things will last forever, faith, hope, and love, and the greatest of these is love.
          </p>
        </motion.div>
       </motion.div>
    
    </div>
  )
}

export default InvitationScreen