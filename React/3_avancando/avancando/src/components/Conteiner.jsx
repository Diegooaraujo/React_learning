import React from 'react'

const Conteiner = ({children}) => {
  return (
    <div>
      <h1>Conteudo do componente pai</h1>
      {children}
    </div>
  )
}

export default Conteiner
