import React, { useState } from 'react'
import axios from 'axios'

import './Form.css'

const Form = () => {

    const [gifts, setGifts] = useState([])

    const handleChange = e => {
        const { name, value } = e.target
        setGifts(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        axios.post('http://localhost:5000/gifts', gifts)
        .then(setGifts(e.target.value))
        .catch(err => console.log('erreur:', err))
    }
    return (
        <div className='formular'>
            <form className='formBloc' onSubmit={handleSubmit} >
                <label>Cadeau : </label>
                <input type='text' name='name' onChange={handleChange} />
                <label>Détails du cadeau : </label>
                <textarea name='details' onChange={handleChange} />
                <button className='add-button' type='submit'> Ajouter </button>
            </form>
        </div>
    )
}

export default Form