//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

//im page
import Button from './Component/Button'
import Nav from "./Component/Nav"

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className='h-screen bg-zinc-300' >
      <Nav />
      <h1 className="text-3xl font-bold ">
        Generation Thailand <br />
        React-Assessment
      </h1>
      <div>
        <Button/>
      </div>
    </div>
  )
}

export default App
