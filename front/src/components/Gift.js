import React from 'react'
import './Gift.css'

const Gift = ({ data: { id, name, details }, deleteGift }) => {

  return (
    <div className='Gift'>
      <p>{name} </p>
      <p>{details} </p>
      <button className='remove' onClick={() => deleteGift(id)}>Supprimer</button>
    </div>
  )
}

export default Gift
