import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Welcome from './components/Welcome'
import Roses from './components/Roses'
import Invite from './components/Invite'
import Calendar from './components/Calendar'
import Activities from './components/Activities'
import Final from './components/Final'
import { sendAnswers } from './sendAnswers'

export default function App() {
  const [step, setStep] = useState('welcome')
  const [answers, setAnswers] = useState({})

  return (
    <AnimatePresence mode="wait">
      {step === 'welcome' && (
        <Welcome key="welcome" onNext={() => setStep('roses')} />
      )}
      {step === 'roses' && (
        <Roses key="roses" onAccept={() => setStep('invite')} />
      )}
      {step === 'invite' && (
        <Invite key="invite" onYes={() => setStep('calendar')} />
      )}
      {step === 'calendar' && (
        <Calendar
          key="calendar"
          onNext={({ date, time }) => {
            setAnswers((a) => ({ ...a, date, time }))
            setStep('activity')
          }}
        />
      )}
     {step === 'activity' && (
  <Activities
    key="activity"
    onNext={(activities) => {
      const all = { ...answers, activities }
      setAnswers(all)
      sendAnswers(all).catch((err) => console.error('Email failed', err))
      setStep('final')
    }}
  />
)}
      {step === 'final' && <Final key="final" />}
    </AnimatePresence>
  )
}