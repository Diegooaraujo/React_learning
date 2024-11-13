import React from 'react'

import { useState } from 'react'

const Data = () => {
    let someData = 10;

    const [anotherNumber, setAnotherNumber] = useState(10)
  return (
    <div>
        
        <div>
            <p>valor: {someData}</p>
            <button onClick={()=>{someData+=someData}}>mudar variavel</button>
        </div>
        <div>
            <p>valooor: {anotherNumber}</p>
            <button onClick={()=>{setAnotherNumber(20)}}>mudar state</button>
        </div>
        
    </div>
  )
}

export default Data