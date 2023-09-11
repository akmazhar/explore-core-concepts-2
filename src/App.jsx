import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './team'


function App() {
  const [count, setCount] = useState(0)

  function handleClick(){
    alert('button clicked');
  }
  const handleClick2 = () =>{
    alert('button 2 clicked')
  }
  
  const addToFive = (num) =>{
    alert(num + 5);
  }
  

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Core Concepts 2</h1>
       
       

    <Counter></Counter>

     


<button onClick={handleClick}>Click me</button>
<button  onClick={handleClick2}>Click 2</button>
<button onClick={() => { alert('third clicked')}}>Third</button>
<button onClick={() => addToFive(3)}>Four</button> 

     
    </>
  )
}

export default App
