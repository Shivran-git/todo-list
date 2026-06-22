import { useState } from 'react'
import './App.css'
import TodoAdder from './Components/todoAdder/TodoAdder'
import TodoStates from './Components/TodoStates/TodoStates'
import spots from './assets/spots.mp4'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>

      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      >

        <source src= {spots} type='video/mp4'/>
      </video>
      
           <h1>TODO LIST</h1>
       <TodoAdder/>
       <TodoStates/>
    </div>
       
    </>
      
  )
}

export default App
