import React from 'react'
import { useEffect } from 'react'

import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';

const {id} = useParams;

const url = 'http://localhost:3000/products/'+id;

const {data:products} = useFetch(url);



export default function Product() {
    if(!products)return <p>carregando</p>
  return (
    <div>
      <p>ID do produto {id}</p>
      <div>
        <h1>
            {
                products.name
            }
        </h1>
      </div>
    </div>
  )
}
