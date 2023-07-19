import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const Edit = () => {
    const { id } = useParams();

    const navigator = useNavigate()


    const [productData, setProductData] = useState({
        name: "",
        price: "",
        discription: "",
    })


    const [nameErr, setNameErr] = useState('')
    const [descErr, setDescErr] = useState('')
    const [priceErr, setPriceErr] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/products/${id}`, productData)

            .then((res) => navigator(`/`))
            .catch(err => {

                const errs = err.response.data.errors

                if (errs.name) {
                    setNameErr(errs.name.message)
                } else {
                    setNameErr('')
                }

                if (errs.price) {
                    setPriceErr(errs.price.message)
                } else {
                    setPriceErr('')
                }

                if (errs.discription) {
                    setDescErr(errs.discription.message)
                } else {
                    setDescErr('')
                }

            })
    }

    const fetchItem = () => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProductData(res.data))
            .catch(err => console.log(err))
    }
    useEffect(fetchItem, []);

    const handleChange = (e) => {
        const { value, name } = e.target
        setProductData(current => ({ ...current, [name]: value }))
    }

    return (
        <form onSubmit={handleSubmit}>
            <hr />
            <h3>Edit a Product</h3>
            <label>Name :</label>
            <br />
            <p className='err'>{nameErr}</p>
            <input onChange={handleChange} value={productData.name} name='name' type='text'></input>
            <br />
            <label>Price :</label>
            <br />
            <p className='err'>{priceErr}</p>
            <input onChange={handleChange} value={productData.price} name='price' type="text"></input>
            <br />
            <label>discription :</label>
            <br />
            <p className='err'>{descErr}</p>
            <input onChange={handleChange} value={productData.discription} name='discription' type="text"></input>
            <br />
            <button>ADD</button>
            <br />
            <hr />
        </form>



    )
}


export default Edit
