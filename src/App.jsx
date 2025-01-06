import { useState } from 'react'
import './App.css'
import TimeConverter from './components/TimeConverter/TimeConverter.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TimeConverter />
      
    </>
  )
}

export default App
