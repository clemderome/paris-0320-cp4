import React from 'react'
import './Gift.css'

const Gift = ({ data: { id, name, details }, deleteGift }) => {

  return (
    <div className='Gift'>
      <div className='gifts'>
        <h3>{name} </h3>
        <p>{details} </p>
      </div>
        <img className='remove' 
        onClick ={() => deleteGift(id)} 
        src="https://img.icons8.com/doodle/48/000000/delete-sign.png" 
        alt='delete-button' />
    </div>
  )
}

export default Gift
