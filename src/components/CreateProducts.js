import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/product'

const CreateProducts = () => {
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
    const navigate = useNavigate()

    const store = async(e) => {
        e.preventDefault()
        await axios.post(endpoint,{description: description, price: price, stock: stock})
        navigate('/')
    }
  return (
    <div>
        <h3>Create Product</h3>
        <form onSubmit={store}>
            <div className='mb-3'>
                <label>Description</label>
                <input
                    type='text'
                    onChange={ (e)=> setDescription(e.target.value)}
                    value={description}
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label>Price</label>
                <input
                    type='number'
                    onChange={ (e)=> setPrice(e.target.value)}
                    value={price}
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label>Stock</label>
                <input
                    type='number'
                    onChange={ (e)=> setStock(e.target.value)}
                    value={stock}
                    className='form-control'
                />
            </div>
            <button type='submit' className='btn btn-success'>Save</button>
        </form>
    </div>
  )
}

export default CreateProducts