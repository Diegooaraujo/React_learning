import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
        <nav>
          <p>navbar</p>
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
