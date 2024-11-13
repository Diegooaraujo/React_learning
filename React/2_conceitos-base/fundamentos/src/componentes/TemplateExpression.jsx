import React from 'react'

const TemplateExpression = () => {

    const name = "diego"
    const data = {
        age:20,
        job:"programador"
    }
  return (
    <div>
        <h3>bem vindo {name}</h3>
        <p>a some é {2+2}</p>
        <p>idade: {data.age}</p>
        <p>profissão:{data.job}</p>
    </div>
    
  )
}

export default TemplateExpression