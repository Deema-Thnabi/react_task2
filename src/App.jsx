
import { useState } from 'react'
import './App.css'

function App() {

  let [count, setCount] = useState(0);

  const incrementCount = () =>{
    setCount(count + 1);
  }

  const resetCount = () =>{
    setCount(0);
  }

  return (
    <>
    <div>
    <button onClick={incrementCount}>Deema Thnabi <span>{count}</span></button> 
    <button onClick={resetCount}>reset</button> 
    </div>
    </>
  )
}

export default App
