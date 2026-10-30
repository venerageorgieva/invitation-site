import { useState } from 'react'
import { motion } from 'framer-motion'

const PETALS = 24

export default function Final() {
  // случайните стойности се генерират веднъж при първото показване
  const [petals] = useState(() =>
    Array.from({ length: PETALS }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 14 + Math.random() * 18,
      duration: 6 + Math.random() * 6,
      delay: Math.random() * 6,
      drift: -60 + Math.random() * 120,
    }))
  )

  return (
    <>
      <div className="petals" aria-hidden="true">
        {petals.map((p) => (
          <motion.span
            key={p.id}
            className="petal"
            style={{ left: `${p.left}%`, fontSize: p.size }}
            initial={{ y: -60, opacity: 0 }}
            animate={{
              y: '110vh',
              x: p.drift,
              rotate: 360,
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            🌹
          </motion.span>
        ))}
      </div>

      <motion.div
        className="final"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <h1>Нямам търпение да те видя</h1>
        <motion.p
          className="heart"
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        >
          ❤️
        </motion.p>
      </motion.div>
    </>
  )
}