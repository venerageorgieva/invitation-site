import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

const teases = ['Сигурно ли?', 'Опитай пак', 'Хайде де', 'Не толкова бързо', 'Почти...']

export default function RunawayButton({ children }) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [tries, setTries] = useState(0)

  const runAway = () => {
    const rect = ref.current.getBoundingClientRect()
    const padding = 16

    // изходната позиция на бутона, без текущото преместване
    const baseLeft = rect.left - pos.x
    const baseTop = rect.top - pos.y

    // нова случайна позиция, която остава в рамките на екрана
    const newLeft = padding + Math.random() * (window.innerWidth - rect.width - padding * 2)
    const newTop = padding + Math.random() * (window.innerHeight - rect.height - padding * 2)

    setPos({ x: newLeft - baseLeft, y: newTop - baseTop })
    setTries((t) => t + 1)
  }

  return (
    <motion.button
      ref={ref}
      className="btn"
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onMouseEnter={runAway}
      onTouchStart={runAway}
      onFocus={runAway}
      onClick={runAway}
    >
      {tries === 0 ? children : teases[tries % teases.length]}
    </motion.button>
  )
}