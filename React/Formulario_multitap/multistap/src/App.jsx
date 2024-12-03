//components
import {GrFormNext, GrFormPrevious} from 'react-icons/gr'

import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <div className='header'>
          <h2>Deixe sua avaliação</h2>
          <p>ficamos felizes com a sua compra, utilize o formualrio abaixo para avaliar o produto</p>
        </div>
        <div className='form-conteiner'>
          <p>etapas</p>
          <form action="">
            <div className="inputs-conteiner">
              
            </div>
            <div className="actions">
              <button type='button'>
              <GrFormPrevious/>
                <span>voltar</span>
              </button>
              <button type='submit'>
                <span>Avançar</span>
                <GrFormNext/>
              </button>
            </div>
          </form>

        </div>
      </div>
    </>

  )
}

export default App
