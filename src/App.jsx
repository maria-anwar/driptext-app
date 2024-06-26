import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WebRoutes from './routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <WebRoutes/>
    </>
  )
}

export default App
