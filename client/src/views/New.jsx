import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'



const NewProduct = (props) => {


    const { createNew } = props


    const navigator = useNavigate()


    const [productData, setProductData] = useState({
        name: "",
        price: "",
        discription: "",
    })


    const [nameErr, setNameErr] = useState('')
    const [descErr, setDescErr] = useState('')
    const [priceErr, setPriceErr] = useState('')


    const handleChange = (e) => {
        const { value, name } = e.target
        setProductData(current => ({ ...current, [name]: value }))
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/products', productData)
            .then(res => {

                setProductData({
                    name: "",
                    price: "",
                    discription: "",
                })
                if (typeof createNew == 'function') {
                    createNew()
                } else {
                    navigator('/')
                }




                setNameErr('')
                setPriceErr('')
                setDescErr('')

            })



            .catch(err => {
                console.log(err, "test")
                const errs = err.response.data.errors;
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
                console.log(err)
            })
    }


    return (
        <form onSubmit={handleSubmit}>
            <hr />
            <h3>Add new Product</h3>
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
export default NewProduct
