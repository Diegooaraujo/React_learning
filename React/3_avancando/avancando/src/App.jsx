import { useState } from 'react'
import night from './assets/night.jpg'
import Data from './components/Data'
import ListRender from './components/ListRender'
import './App.css'

function App() {


  return (
    <>
      <h1>avançando em react</h1>
      <img src="/img.jpg" alt="" />
      <img src={night} alt="" />
      <Data/>
      <ListRender/>
    </>
  )
}

export default App
