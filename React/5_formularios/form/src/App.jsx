import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyForm from './Componentes/MyForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> form react</h1>
      <MyForm userName = "diego" userEmail = "admin@gmail.com"/>
    </>
  )
}

export default App
