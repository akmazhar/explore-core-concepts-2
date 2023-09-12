import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Team from './team';
import Counter from './counter';
import Users from './users';
import Friends from './friends';






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
      <h1>React Core Concepts 2</h1>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
     



    
    <Friends></Friends>

   <Users></Users>

    <Team></Team>

    <Counter></Counter>

    

    


<button onClick={handleClick}>Click me</button>
<button  onClick={handleClick2}>Click 2</button>
<button onClick={() => { alert('third clicked')}}>Third</button>
<button onClick={() => addToFive(3)}>Four</button> 

     
    </>
  )
}

export default App
