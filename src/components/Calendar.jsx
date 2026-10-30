import { useState } from 'react'
import { motion } from 'framer-motion'
import { DayPicker } from 'react-day-picker'
import { bg } from 'react-day-picker/locale'
import 'react-day-picker/style.css'

const times = [
  '10:00', '11:00', '12:00', '13:00', '14:00', '15:00',
  '16:00', '17:00', '18:00', '19:00', '20:00', '21:00',
]

export default function Calendar({ onNext }) {
  const [date, setDate] = useState()
  const [time, setTime] = useState()

  return (
    <motion.div
      className="calendar-wrap"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Супер!</h1>
      <p className="question">Кога ти е удобно?</p>

      <DayPicker
        mode="single"
        locale={bg}
        weekStartsOn={1}
        selected={date}
        onSelect={setDate}
        disabled={{ before: new Date() }}
      />

      {date && (
        <motion.div
          className="times"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {times.map((t) => (
            <button
              key={t}
              className={`chip ${time === t ? 'chip-active' : ''}`}
              onClick={() => setTime(t)}
            >
              {t}
            </button>
          ))}
        </motion.div>
      )}

      <button
        className="btn btn-solid"
        disabled={!date || !time}
        onClick={() => onNext({ date, time })}
      >
        Продължи
      </button>
    </motion.div>
  )
}