import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <div>
      <h1>Home</h1>
      <hr />
      <div className='button-home-container'>
        <Link className='button-home' to='/examen'>Iniciar examen</Link>
      </div>
    </div>
  )
}
