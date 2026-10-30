import { motion } from 'framer-motion'

export default function Welcome({ onNext }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Здравей</h1>
      <button className="btn" onClick={onNext}>
        Кликни тук
      </button>
    </motion.div>
  )
}