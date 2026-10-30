import { motion } from 'framer-motion'

const angles = [-45, -30, -15, 0, 15, 30, 45]

export default function Roses() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="bouquet">
        {angles.map((angle, i) => (
          <motion.span
            key={angle}
            className="rose"
            initial={{ scale: 0, opacity: 0, rotate: 0 }}
            animate={{ scale: 1, opacity: 1, rotate: angle }}
            transition={{ delay: i * 0.15, type: 'spring', stiffness: 120 }}
          >
            🌹
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}