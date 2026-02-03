import './App.css'
import { useState } from 'react'

function App() {

  

  let [counter, setCounter]=useState(10)
  


  const addValue = ()=>{
  setCounter(counter+5)
  }


  const removeValue = ()=>{
    
    if(counter<=0){
      setCounter(counter=0)
    } else{
      setCounter(counter-5)
    }

  }

  return (
   <>
   <h1>Counter</h1>
   <h2>counter value:{counter}</h2>


   <button onClick={addValue}>
    add value</button>


      <button onClick={removeValue}>
        subtract value</button>
   </>
  )
}

export default App
