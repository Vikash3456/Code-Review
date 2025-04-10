import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main>
      <div className="left">
        <h1>Sonama kushwaha</h1>
        <div className="code"></div>
        <div className="review"></div>
      </div>
      <div className="right"> <h1>Vikash Kushawha</h1></div>
    </main>
    </>
  )
}

export default App
