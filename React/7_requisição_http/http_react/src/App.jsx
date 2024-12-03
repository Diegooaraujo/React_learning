import { useState, useEffect } from 'react'

const url = "http://localhost:3000/products"

import './App.css'

function App() {
  //resgatando dados
  const [products,setProducts]=useState([])
  useEffect(()=>{
    async function getData(){
      const res = await fetch(url)
      const data = await res.json()

      setProducts(data)
    }
    getData()
  },[])
  //2 - envio de dados

  const [name, setName] = useState("")
  const [price,setPrice] = useState("")

  const handleSubmit = (e)=>{
    e.prevenDefalt()
    const products = {
      name,
      price
    }
    console.log(products)
  }

  return (
    <>
      <ul >
        {products.map((product)=>(
          <li key={product.id}> {product.name} - {product.price}</li>
        ))}
      </ul>
      {/*envio de dados */}
      <div className='add-product'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">
            <span>Nome</span>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
          </label>
          <label htmlFor="">
            <span>Preço</span>
            <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)}/>
          </label>
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </>
  )
}

export default App
