import React from 'react'

const ChangeMessage = ({handMessage}) => {
    const messages = ["oi","ola","bom dia"]
  return (
    <div>
        <button onClick={()=>handMessage(messages[0])}>1</button>
        <button onClick={()=>handMessage(messages[1])}>2</button>
        <button onClick={()=>handMessage(messages[2])}>3</button>
    </div>
  )
}

export default ChangeMessage