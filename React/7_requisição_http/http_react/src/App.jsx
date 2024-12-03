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

  return (
    <>
      <ul>
        {products.map((product)=>(
          <li key={product.id}> {product.name} - {product.price}</li>
        ))}
      </ul>
    </>
  )
}

export default App
