import { useState } from 'react'

import './App.css'

import { Outlet } from 'react-router-dom'

//link entre paginas
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
        <nav>
          <Navbar/>
          <Outlet/>

        </nav>

        <footer>
          <p>foooooter</p>
        </footer>
     </div>
    </>
  )
}

export default App
