import { useState } from 'react'
import './App.css'
import FirstComponent from './componentes/FirstComponets'
import TemplateExpression from './componentes/TemplateExpression'
import MyComponents from './componentes/MyComponents'
import Event from './componentes/event'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>fundamentos do react</h1>
      <FirstComponent/>

      <TemplateExpression/>
      
      <MyComponents/>

      <Event/>
    </>
  )
}

export default App
