import React from 'react'
import './Gift.css'

function Gift ({data}) {
  return (
    <div className='Gift'>
      <p>{data.name}</p>
      <p>{data.details}</p>
      <button className='remove'>X</button>
    </div>
  )
}

export default Gift
