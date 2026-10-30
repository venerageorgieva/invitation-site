import { useState } from 'react'
import { motion } from 'framer-motion'

const options = [
  { id: 'car-lunch', icon: '🚗', label: 'Обяд в колата на красива гледка' },
  { id: 'coffee', icon: '☕', label: 'Кафе' },
  { id: 'park', icon: '🌳', label: 'Разходка в парка' },
  { id: 'trip', icon: '🗺️', label: 'Пътуване до друг град' },
]

export default function Activities({ onNext }) {
  const [selected, setSelected] = useState([])

  const toggle = (id) =>
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]))

  return (
    <motion.div
      className="activities-wrap"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Какво ще правим?</h1>
      <p className="question">Избери едно или повече.</p>

      <div className="cards">
        {options.map((o, i) => (
          <motion.button
            key={o.id}
            className={`card ${selected.includes(o.id) ? 'card-active' : ''}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.12 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => toggle(o.id)}
          >
            <span className="card-icon">{o.icon}</span>
            <span>{o.label}</span>
          </motion.button>
        ))}
      </div>

      <button
        className="btn btn-solid"
        disabled={selected.length === 0}
        onClick={() => onNext(selected)}
      >
        Продължи
      </button>
    </motion.div>
  )
}