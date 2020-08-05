import React, { useState, useEffect } from 'react'
import Gift from './components/Gift'
import Form from './components/Form'
import axios from 'axios'
import logo from './logo.png'
import './App.css'

const App = () => {

  const [gifts, setGifts] = useState([])

  const fetchGifts = async () => {
    const result = await axios.get('http://localhost:5000/gifts')
    setGifts(result.data)
  }

  useEffect(() => {
    fetchGifts()
  }, [])

  // removeGift () {
  // }
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='Old Wild logo' />
        <h1 className='App-title'>It's Christmas !</h1>
      </header>
      <div>
        <div className='GiftWrapper'>
          <h2 onClick={fetchGifts}>Ma liste de cadeaux :</h2>
          {gifts.map(data =>
            <Gift key={data.id} data={data} />)}
        </div>
        <Form />
      </div>

      {/* UNCOMMENT IF YOU'RE DOING THE BONUS */}
      {/* <button type='button' className='mail'> Dear Santa, send me my gifts!</button> */}
    </div>
  )
}

export default App
