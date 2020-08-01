import React, { Component } from 'react'
import Gift from './components/Gift'
import logo from './logo.png'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      gifts: []
    }

    this.removeGift = this.removeGift.bind(this)
  }

  removeGift () {

  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='Old Wild logo' />
          <h1 className='App-title'>It&apos;s Christmas !</h1>
        </header>

        <form>
          <input type='text' />
          <button type='submit'> Ajouter </button>
        </form>

        <div className='GiftWrapper'>
          <Gift name='Ferrari LaFerrari' remove={this.removeGift} />
          <Gift name='Palace en Espagne' remove={this.removeGift} />
        </div>

        {/* UNCOMMENT IF YOU'RE DOING THE BONUS */}
        {/* <button type='button' className='mail'> Dear Santa, send me my gifts!</button> */}

      </div>
    )
  }
}

export default App
