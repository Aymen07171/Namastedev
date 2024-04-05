import React from 'react'
import { useRouteError } from 'react-router-dom'

export const Error = () => {

    const err = useRouteError();

    console.log(err);

  return (
    <div>
        <h1>Oops !!!</h1>
        <h2>Something won't wrong </h2>
    </div>
  )
}