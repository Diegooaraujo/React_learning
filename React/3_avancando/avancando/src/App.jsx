
import night from './assets/night.jpg'
import Data from './components/Data'
import ListRender from './components/ListRender'
import Fragment from './components/Fragment'
import Conteiner from './components/Conteiner'
import ExecuteFunction from './components/ExecuteFunction'
import './App.css'
import { useState } from 'react'
import Message from './components/Message'
import ChangeMessage from './components/ChangeMessage'


function App() {

  function showMessage (){
    alert ("Evento do componente pai")
  }

  const [message,setMessage] = useState("")

  const handMessage = (msg)=>{
    setMessage(msg)
  }

  return (
    <>
      <h1>avançando em react</h1>
      <img src="/img.jpg" alt="" />
      <img src={night} alt="" />
      <Data/>
      <ListRender/>
      <Fragment/>
      <Conteiner>
        <p>alguma coisa</p>
      </Conteiner>
      <ExecuteFunction myFunction={showMessage()}/>
      <Message msg={message}/>
      <ChangeMessage handMessage={handMessage}/>
    </>
  )
}

export default App
