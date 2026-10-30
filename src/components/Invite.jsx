import { motion } from 'framer-motion'
import RunawayButton from './RunawayButton'

export default function Invite({ onYes }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Мина доста време...</h1>
      <p className="question">Искаш ли да се видим?</p>
      <div className="actions">
        <motion.button
          className="btn btn-solid"
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          onClick={onYes}
        >
          Искам!
        </motion.button>
        <RunawayButton>Не искам...</RunawayButton>
      </div>
    </motion.div>
  )
}