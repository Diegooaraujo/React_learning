import { useState } from 'react'

import './App.css'
//css de componente
import MyConponent from './Components/MyConponent'
import Title from './Components/Title'

function App() {
  const [count, setCount] = useState(0)
  const n = 15
  //classe dinamica
  const redTitle = true
  return (
    <>
      {/*css global */}
      <h1>Css no React</h1>
      {/*css de componente*/}
      <MyConponent/>
      <p>o css do MyComponente vazou para este paragrafo </p>

      {/*inline style*/}
      <p style={{color:"blue", backgroundColor:"red"}}>este elemento tem estilos inline</p>

      {/*inline style dinamico*/}
      <h2 style={n>10?{color:"orange"}:{color:"magenta"}} >css dinanamico</h2>
      <h2 style={n>20?{color:"orange"}:{color:"magenta"}} >css dinanamico</h2>
      
      {/*classe dinamica*/}
      <h2 className={redTitle?"red-title":"title"}>Este titulo tem classe dinamica</h2>

      
      {/*css modules*/}
      <Title/>


    </>
  )
}

export default App
