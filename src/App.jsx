import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Welcome from './components/Welcome'
import Roses from './components/Roses'
import Invite from './components/Invite'

export default function App() {
  const [step, setStep] = useState('welcome')

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
      {step === 'calendar' && <h1 key="calendar">Следва календар...</h1>}
    </AnimatePresence>
  )
}