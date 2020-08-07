import React, { useState } from 'react'
import axios from 'axios'

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
        <div>
            <form onSubmit={handleSubmit}>
                <label>Cadeau : </label>
                <input type='text' name='name' onChange={handleChange} />
                <label>Détails du cadeau : </label>
                <input type='text' name='details' onChange={handleChange} />
                <button type='submit'> Ajouter </button>
            </form>
        </div>
    )
}

export default Form