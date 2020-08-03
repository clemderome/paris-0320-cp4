import React, { useState, useEffect } from 'react'
import Gift from './components/Gift'
import axios from 'axios'
import logo from './logo.png'
import './App.css'

const App = () => {

  const [gifts, setGifts] = useState([])

  const fetchGifts = async () => {
    const result = await axios.get('http://localhost:5000/gifts')
    setGifts(result.data)
    console.log('result: ', result.data)
  }

  useEffect(() => {
    fetchGifts()
  }, [])

  const handleChange = e => {
    const { name, value } = e.target
    setGifts(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    axios.post('http://localhost:5000/gifts', gifts)
      .then(() => gifts.status(200))
      .catch(err => console.log('erreur:', err))
    e.preventDefault()
  }

  // removeGift () {
  // }
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='Old Wild logo' />
        <h1 className='App-title'>It's Christmas !</h1>
      </header>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Cadeau : </label>
          <input type='text' name='name' onChange={handleChange} />
          <label>Détails du cadeau : </label>
          <input type='text' name='details' onChange={handleChange} />
          <button type='submit'> Ajouter </button>
        </form>
        <div className='GiftWrapper'>
          <h2 onClick={fetchGifts}>Ma liste de cadeaux :</h2>
          {gifts.map(data =>
            <Gift data={data} />)}
        </div>
      </div>

        {/* UNCOMMENT IF YOU'RE DOING THE BONUS */}
        {/* <button type='button' className='mail'> Dear Santa, send me my gifts!</button> */}
    </div>
  )
}

export default App
