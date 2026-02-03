import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <h1>Hello React Hooks!</h1>
    <h2>Count: {count}</h2>

    <button onClick={() => setCount(count + 1 )}>Increment</button>
    <button onClick={() => setCount(count - 1)}>Decrement</button>
    {count < 0 && setCount(0)}
   </>
  )
}

export default App
