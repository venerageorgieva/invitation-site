import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Welcome from './components/Welcome'
import Roses from './components/Roses'

export default function App() {
  const [step, setStep] = useState('welcome')

  return (
    <AnimatePresence mode="wait">
      {step === 'welcome' && (
        <Welcome key="welcome" onNext={() => setStep('roses')} />
      )}
      {step === 'roses' && <Roses key="roses" />}
    </AnimatePresence>
  )
}