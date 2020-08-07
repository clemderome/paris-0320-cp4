import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Form from './components/Form'
import Gift from './components/Gift'
import logo from './logo.png'

import './App.css'

const App = () => {

  const [gifts, setGifts] = useState([])

  const deleteGift = (e) => {
    const tmp = [...gifts]
    const index = tmp.findIndex((item) => item.id === parseInt(e))
    tmp.splice(index, 1)
    setGifts(tmp)
    axios.delete(`http://localhost:5000/gifts/${e}`)
  }

  const fetchGifts = async () => {
    const result = await axios.get('http://localhost:5000/gifts')
    setGifts(result.data)
  }

  useEffect(() => {
    fetchGifts()
  }, [])

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='Old Wild logo' />
        <h1 className='App-title'>It's Christmas !</h1>
      </header>
      <div className='listForm'>
        <div className='GiftWrapper'>
          <h2 onClick={fetchGifts}>Ma liste de cadeaux :</h2>
          <div className='GiftList' >
            {gifts.map(data =>
              <Gift key={data.id} data={data} deleteGift={deleteGift} />)}
          </div>
        </div>
        <Form />
      </div>

      {/* UNCOMMENT IF YOU'RE DOING THE BONUS */}
      {/* <button type='button' className='mail'> Dear Santa, send me my gifts!</button> */}
    </div>
  )
}

export default App
