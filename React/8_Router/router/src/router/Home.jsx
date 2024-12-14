import React from 'react'

//carregamentos de dados
import { useFetch } from '../hooks/useFetch'
const url = "http://localhost:3000/products"

//rota dinamica
import {Link} from "react-router-dom"



const Home = () => {
  const {data:items}= useFetch(url)
  return (
    <div>
      <h1>Home</h1>
      {/*carregando dados */}
      <ul className='products'>
        {items && items.map((item)=>(
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            {/*rota dinamica*/}
            <Link to={`/products/${item.id}`}> Detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
