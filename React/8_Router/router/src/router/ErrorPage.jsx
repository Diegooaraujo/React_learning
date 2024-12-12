import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError();

    console.log(error)


  return (
    <div>
      <h1>ops!</h1>
      <h2>temos um problema</h2>
      <p>{error.statusText}</p>
    </div>
  )
}

export default ErrorPage
